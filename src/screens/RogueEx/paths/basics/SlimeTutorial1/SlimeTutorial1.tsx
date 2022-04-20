import Encounter from '../../../components/Room/Encounter/Encounter'
import slime from '../../../logic/enemies/slime'

export default function SlimeTutorial1(props) {
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
			enemies={[slime({ name: 'slime', health: 'aaa', splitsRemaining: 0 })]}
			{...props}
		/>
	)
}
