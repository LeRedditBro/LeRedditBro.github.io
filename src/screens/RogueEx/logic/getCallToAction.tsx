import { Tooltip } from "@material-ui/core";

const callsToActions = [
	'Bring it on!',
	'En Garde!',
	'Danger is my second name!',
	'Aha',
	'Sure',
	'👍',
	'Mhm',
	'I approve this message',
	'Accept',
	'OK',
	'✅',
	'I fear nothing!',
	'I fear n-nothing..!!',
	'I pledge alliance to the 💰',
	'Lets make history!',
	'We shall drink from the skulls of our enemies',
	<Tooltip title="Horse Milk"><span>马奶</span></Tooltip>,
	'RogueEx.successScreen.acceptButton.text',
	'*accepts in a good vibe?*',
	'*accepts in a bad vibe?*',
	'*accepts while keeping in mind this is a game about regex*',
	'ACCEPT (must be naked IRL to click this)',
	'ACCEPT (only smart people can see this)',
	'ACCEPT (97% of people fail this 😲❌)',
]

export default function getCallToAction() {
	return callsToActions[Math.round(Math.random() * (callsToActions.length - 1))];
}