import { Box, Typography } from '@material-ui/core'

import styled from 'styled-components'

import AtIcon from 'mdi-material-ui/At'

import Theme from '../Theme'
import useMobile from '../util/useMobile'

const ColoredCircle = styled.div`
	background: ${({ theme }) => theme.palette.primary};
	position: absolute;
    left: -136px;
    width: 562px;
    height: 445px;
    bottom: -73px;
    border-radius: 50%;
`


const AppBarRoot = styled.div`
	display: flex;
	gap: 2rem;

	padding: 1rem 4rem;
	position: relative;
	overflow: hidden;

	filter: drop-shadow(4px 5px 0px #15102d);
`

const StyledLogoBox = styled(Box)`
z-index: 1;
	transition: gap .4s;
	gap: 0;

	&:hover {
		gap: 10px;
	}
`

export default function AppBar() {

	const isMobile = useMobile()

	return (
		<AppBarRoot style={{ flexDirection: isMobile ? 'column' : 'row' }}>
			<StyledLogoBox display="inline-flex" alignItems="center" className="cursor-pointer">
				<Box color={Theme.palette.secondary} display="flex">
					<AtIcon />
				</Box>
				<Typography variant="h4" style={{ fontFamily: 'Roboto Mono', color: 'white' }}>
					Tomer
				</Typography>
				<Typography variant="h4" style={{ fontFamily: 'Roboto Mono', color: 'white' }}>
					Atar
				</Typography>
			</StyledLogoBox>

			<ColoredCircle />
		</AppBarRoot >
	)
}
