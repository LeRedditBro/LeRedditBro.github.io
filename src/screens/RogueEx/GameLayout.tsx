import { Box } from '@material-ui/core'
import { Outlet } from 'react-router-dom'

export default function GameLayout() {
	return (
		<Box>
			<Outlet />
		</Box>
	)
}
