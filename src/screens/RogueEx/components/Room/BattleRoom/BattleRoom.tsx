import { Box } from '@material-ui/core';
import produce from 'immer';
import { useEffect, useState } from 'react';
import usePlayer from '../../GameProvider/usePlayer';
import Info from '../../Info/Info';
import Room from '../Room';
import Enemy from './Enemy';
import Player from './Player';

export default function BattleRoom({ message = undefined as any, enemies, onClear = undefined as any, onFail = undefined as any, ...rest }) {

	const player = usePlayer();
	const [encounter, setEncounter] = useState({
		enemies, attack: (regex) => {
			setEncounter((prev) => {
				const { enemies } = prev;
				const newEnemies = produce(enemies as any[], draft => {
					draft.forEach(e => {
						e.health = e.health.replace(regex, '');
					})
				});

				let nPlayerHealth;
				player.setHealth(prev => {
					nPlayerHealth = prev.replace(regex, '');
					return nPlayerHealth;
				});

				if (!nPlayerHealth) {
					onFail?.();
					return prev;
				}

				const filteredEnemies = newEnemies.filter(e => e.health);

				if (!filteredEnemies.length) onClear?.();

				return produce(prev, draft => {
					draft.enemies = filteredEnemies;
				});
			})
		}
	});

	useEffect(() => {
		// @ts-ignore
		window.encounter = encounter;
		return () => {
			// @ts-ignore
			window.encounter = null;
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
					<Player player={player} />
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
