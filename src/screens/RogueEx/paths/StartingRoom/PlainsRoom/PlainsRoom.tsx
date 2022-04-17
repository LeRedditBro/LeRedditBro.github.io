import React from 'react'
import { Route, useNavigate } from 'react-router-dom'
import Button from '../../../components/Button/Button'
import Link from '../../../components/Link/Link'
import Room from '../../../components/Room/Room'
import Encounter from '../../../components/Room/Encounter/Encounter'
import slime from '../../../logic/enemies/slime'
import DialogRoom from '../../../components/Room/UtilityRoom/DialogRoom'

export default function PlainsRoom() {

	const navigate = useNavigate();

	return (
		<Room element={
			<>
				<Link to="traveling-merchant">traveling merchant</Link>
				<Button onClick={() => {
					navigate('encounter');
				}}>EXPLORE</Button>
			</>
		} routes={
			<>
				<Route path="encounter/*" element={<Encounter
					message={<>
						You have encountered a wild slime!<br />
						Try attacking the slime:<br />
						attack("a")<br />
						or<br />
						attack(/a/)<br />

					</>}
					initialHealth="xxx"
					enemies={[slime({ name: 'slime', health: 'aaa', splitsRemaining: 0 })]}
					successEl={(
						<DialogRoom
							message={<>Well done!<br />but dont get cozy yet - more enemies want in on the fun!</>}
							options={[{ name: "En Garde!", selectedEl: <>🚧WIP🚧</> }]}
						/>
					)}
				/>} />
			</>
		} />
	)
}
