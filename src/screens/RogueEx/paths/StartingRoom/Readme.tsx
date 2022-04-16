import { Box } from "@material-ui/core";
import Info from "../../components/Info/Info";
import Room from "../../components/Room/Room";

export default function Readme() {
	return (
		<Room>
			<Info>
				=== Welcome to RogueEx === <br />
				Explore the nested routes of this world, battle monsters using RegEx, and upgrade your tech tree (literally) to make the game easier on the eyes!<br />
				* The game is meant to be played alongside the browser devtools, take this opportunity to open them (press F12)
			</Info>
		</Room>
	)
}
