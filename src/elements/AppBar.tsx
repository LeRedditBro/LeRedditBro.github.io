import { Box, Typography } from '@material-ui/core'
import React from 'react'

import styled from 'styled-components'

import AtIcon from 'mdi-material-ui/At'
import Theme from '../Theme'

const AppBarRoot = styled.div`
	background: ${({ theme }) => theme.palette.primary};
	padding: 1rem 4rem;
`

const AppBarButtons = styled.div`
	display: flex;
	gap: 16px;
	color: ${({ theme }) => theme.palette.secondary};
`

const StyledLogoBox = styled(Box)`
	transition: gap .4s;
	gap: 0;

	&:hover {
		gap: 10px;
	}
`

export default function AppBar() {
	return (
		<AppBarRoot>
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
			<AppBarButtons></AppBarButtons>
		</AppBarRoot>
	)
}
