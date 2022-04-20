import Encounter from "../../../components/Room/Encounter/Encounter";
import DialogRoom from "../../../components/Room/UtilityRoom/DialogRoom";
import slime from "../../../logic/enemies/slime";


export default function SlimeTutorial3(props) {
	return (
		<Encounter
			message={<>

			</>}
			initialHealth="a"
			enemies={[slime({ name: 'slime', health: 'aa', splitsRemaining: 0 })]}
			{...props}
		/>
	)
}
