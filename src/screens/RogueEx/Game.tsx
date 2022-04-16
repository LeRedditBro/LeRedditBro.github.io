import { Box } from "@material-ui/core";
import { useEffect } from "react";
import GameProvider from "./components/GameProvider/GameProvider";
import StartingRoom from "./paths/StartingRoom/StartingRoom";

export default function Game() {

	useEffect(() => {
		document.title = 'RogueEx';
	}, [])

	return (
		<Box m="1rem">
			<GameProvider>
				<StartingRoom />
			</GameProvider>
		</Box>
	)
}
