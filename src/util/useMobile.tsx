import { useMediaQuery } from "@material-ui/core";

export default function useMobile() {
	return !useMediaQuery('(min-width:600px)')
}