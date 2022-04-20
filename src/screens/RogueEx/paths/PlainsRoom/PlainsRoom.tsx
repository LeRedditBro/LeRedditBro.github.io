import { Route, useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button'
import Link from '../../components/Link/Link'
import Room from '../../components/Room/Room'
import AcceptDialog from '../../components/Room/UtilityRoom/AcceptDialog'
import OrcTutorial1 from '../basics/OrcTutorial1/OrcTutorial1'
import SlimeTutorial1 from '../basics/SlimeTutorial1/SlimeTutorial1'
import SlimeTutorial2 from '../basics/SlimeTutorial2/SlimeTutorial2'
import SlimeTutorial3 from '../basics/SlimeTutorial3/SlimeTutorial3'

export default function PlainsRoom() {

	const navigate = useNavigate();

	return (
		<Room element={
			<>
				<Link to="traveling-merchant">traveling merchant</Link>
				<Button style={{ width: 'fit-content' }} onClick={() => {
					navigate('encounter');
				}}>EXPLORE</Button>
			</>
		} routes={
			<>
				<Route path="encounter/*" element={
					// basics tutorial
					// teaching combat api
					<SlimeTutorial1 successEl={(
						<AcceptDialog
							message={<>More enemies ahead!<br />Click the button below or write "next" to proceed!</>}
						>
							{/* teaching using multiple chars */}
							<SlimeTutorial3 successEl={(
								<AcceptDialog
									message={<>Well done!<br />It is almost over! keep pushing through!</>}
								>
									{/* teaching one shot? maybe redundant see SlimeTutorial3 */}
									<OrcTutorial1 successEl={(
										<AcceptDialog
											message={<>Last wave!</>}
										>
											{/* teaching importance of action separation */}
											<SlimeTutorial2 />
										</AcceptDialog>
									)} />
								</AcceptDialog>
							)} />
						</AcceptDialog>
					)} />
				} />
			</>
		} />
	)
}
