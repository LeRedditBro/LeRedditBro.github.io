import { Route } from 'react-router-dom'
import Link from '../../components/Link/Link'
import Room from '../../components/Room/Room'
import PlainsRoom from '../PlainsRoom/PlainsRoom'
import Readme from './Readme'

export default function StartingRoom() {
	return (
		<Room element={
			<>
				<Link to="README">README.txt</Link>
				<Link to="plains">Plains</Link>
			</>
		} routes={
			<>
				<Route path="README" element={<Readme />} />
				<Route path="plains/*" element={<PlainsRoom />} />
			</>
		} />
	)
}
