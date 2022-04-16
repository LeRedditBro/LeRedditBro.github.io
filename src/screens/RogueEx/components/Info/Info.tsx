import { Box, BoxProps, fade, Typography, useTheme } from '@material-ui/core'
import useTech from '../GameProvider/useTech';

export default function Info({ children, error = false, ...rest }: BoxProps & { error?: boolean }) {

	const theme = useTheme();

	const hasMui = useTech('mui');

	if (!hasMui) {
		return <code>{children}</code>
	}

	return (
		<Box bgcolor={fade(error ? theme.palette.error.main : theme.palette.primary.main, 0.2)} p="1rem" borderRadius="6px">
			<Typography color={error ? 'error' : undefined}>
				{children}
			</Typography>
		</Box>
	)
}
