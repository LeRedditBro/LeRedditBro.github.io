import { Box, Typography } from '@material-ui/core'
import React from 'react'

import styled from 'styled-components'

import AtIcon from 'mdi-material-ui/At'
import PoundIcon from 'mdi-material-ui/Pound'

import Theme from '../Theme'
import useMobile from '../util/useMobile'



const AppBarRoot = styled.div`
	display: flex;
	gap: 2rem;

	background: ${({ theme }) => theme.palette.primary};
	padding: 1rem 4rem;
`

const AppBarButtons = styled.div`
	display: inline-flex;
	gap: 16px;
	margin: 0 auto;
	color: ${({ theme }) => theme.palette.secondary};
`

const StyledLogoBox = styled(Box)`
	transition: gap .4s;
	gap: 0;

	&:hover {
		gap: 10px;
	}
`

const StyledLink = styled.a`
	text-decoration: none;
	color: inherit;
	display: flex;
	max-width: 350px;
`

const HashButtonRoot = styled.div`
	display: flex;
	transition: gap .4s;
	gap: 0;
	align-items: center;

	&:hover {
		gap: 10px;
	}

	& MuiTypography-root {
		font-family: 'Roboto Mono';
		color: white;
	}
`

const HashButton = ({ children, href }) => {
	return (
		<StyledLink href={href} className="cursor-hash">
			<HashButtonRoot>
				<Box color={Theme.palette.thirdary} display="flex">
					<PoundIcon />
				</Box>
				{children}
			</HashButtonRoot>
		</StyledLink>
	)
}

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
			<AppBarButtons>
				<HashButton href="#my_work">
					<Typography variant="h6">My</Typography>
					<Typography variant="h6">Work</Typography>
				</HashButton>
			</AppBarButtons>
		</AppBarRoot >
	)
}
