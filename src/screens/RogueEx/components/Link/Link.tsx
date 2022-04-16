import { Link as MuiLink } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import useTech from '../GameProvider/useTech';

export default function Link(props) {
	const hasMui = useTech('mui');

	if (hasMui) {
		return <MuiLink component={RouterLink} {...props} />
	}
	return (
		<RouterLink {...props} />
	)
}
