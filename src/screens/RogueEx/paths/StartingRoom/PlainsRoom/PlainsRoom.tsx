import React from 'react'
import { Route, useNavigate } from 'react-router-dom'
import Button from '../../../components/Button/Button'
import Link from '../../../components/Link/Link'
import Room from '../../../components/Room/Room'
import Encounter from './Encounter'

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
				<Route path="encounter/*" element={<Encounter />} />
			</>
		} />
	)
}
