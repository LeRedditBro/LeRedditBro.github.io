import { Box } from "@material-ui/core";
import { Routes } from "react-router-dom";
import useTech from "../GameProvider/useTech";
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";

export default function ZoneSelect({ children }) {

	// const hasBreadcrumbs = useTech('breadcrumbs');
	const hasMui = useTech('mui');

	return (
		<Box>
			<Breadcrumbs />
			<Box mt="1rem" display="flex" flexDirection="column">
				{children}
			</Box>
		</Box>
	)
}

