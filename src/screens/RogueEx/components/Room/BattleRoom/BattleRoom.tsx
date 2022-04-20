import { Box } from '@material-ui/core';
import produce from 'immer';
import { useEffect, useRef, useState } from 'react';
import Info from '../../Info/Info';
import Room from '../Room';
import Enemy from './Enemy';
import Ally from './Ally';

export default function BattleRoom({ allies, message = undefined as any, enemies, onSuccess = undefined as any, onDefeat = undefined as any, ...rest }) {

	const [encounter, setEncounter] = useState({
		enemies,
		allies,
	});

	const encounterRef = useRef(encounter);

	useEffect(() => {
		encounterRef.current = encounter;
	}, [encounter]);

	const enemiesRef = useRef(enemies);

	const playTurn = (callback: (draft, prev) => void) => {

		const prev = encounterRef.current;

		const newEncounter = produce(prev, stage => {

			callback(stage, prev);

			// @ts-ignore
			stage.player?.onTurnEnd?.(stage);
			stage.enemies.forEach(e => e?.onTurnEnd?.(stage));
		});

		setEncounter(newEncounter);
	}

	useEffect(() => {
		const encounterContext = {
			get enemies() {
				return enemiesRef.current;
			},
			get allies() {
				return enemiesRef.current;
			},
			attack: (regex) => {
				playTurn((draft, prev) => {
					// damage enemies
					draft.enemies.forEach(e => {
						e.health = e.health.replace(regex, '');
					})

					draft.allies.forEach(a => {
						a.health = a.health.replace(regex, '');
					});


					const handleHealth = (entities) => {
						entities.forEach(e => {
							if (!e.health) {
								e?.onDeath?.(draft);
							}
						});

						return entities.filter(e => {
							return Boolean(e.health);
						});
					}

					const filteredAllies = handleHealth(draft.allies);
					draft.allies = filteredAllies;

					const filteredEnemies = handleHealth(draft.enemies);
					draft.enemies = filteredEnemies;



					if (!filteredAllies.length) onDefeat?.();
					else if (!filteredEnemies.length) onSuccess?.();
				});
			}

		};


		Object.keys(encounterContext).forEach(k => {
			// @ts-ignore
			window[k] = encounterContext[k];
		})

		return () => {
			Object.keys(encounterContext).forEach(k => {
				// @ts-ignore
				delete window[k];
			})
		}
	}, [encounter])

	return (
		<Room element={
			<>
				{message && (
					<>
						<Info>{message}</Info>
						<br />
					</>
				)}
				<Box display="flex">
					<Box display="flex" flexDirection="column">
						{encounter.allies.map((a, index) => (
							<Ally ally={a} key={index} />
						))}
					</Box>
					<Box mr="8px" ml="8px">vs</Box>
					<Box display="flex" flexDirection="column">
						{encounter.enemies.map((e, index) => (
							<Enemy enemy={e} key={index} />
						))}
					</Box>
				</Box>
			</>
		} {...rest} />
	)
}
