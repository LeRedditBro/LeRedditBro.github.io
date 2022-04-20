import Encounter from "../../../components/Room/Encounter/Encounter";
import DialogRoom from "../../../components/Room/UtilityRoom/DialogRoom";
import orc from "../../../logic/enemies/orc";
import SlimeTutorial2 from "../SlimeTutorial2/SlimeTutorial2";

export default function OrcTutorial1(props) {
	return (
		<Encounter
			message={<>
				You have encountered a wild slime!<br />
				Try attacking the slime:<br />
				attack("a")<br />
				or<br />
				attack(/a/)<br />

			</>}
			initialHealth="xxx"
			enemies={[orc({ health: 'hhh', regeneration: 'h' })]}
			successEl={(
				<DialogRoom
					message={<>Well done!<br />but dont get cozy yet - more enemies want in on the fun!</>}
					options={[{ name: "En Garde!", selectedEl: <SlimeTutorial2 /> }]}
				/>
			)}
		/>
	)
}
