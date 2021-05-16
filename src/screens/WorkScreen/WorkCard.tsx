import { Box, Typography } from '@material-ui/core'
import React from 'react'

import styled from 'styled-components'
import Theme from '../../Theme'

const CardRoot = styled.div`

	display: flex;
	flex-direction: column;
	align-items: center;

	background: ${Theme.palette.primary};
	color: ${Theme.palette.primaryText};

	border-radius: 8px;

	padding: 1rem;

	gap: 8px;

	box-shadow: 0 0 0 0px ${Theme.palette.thirdary};
	transition: all .4s;

	max-width: 350px;

	&:hover {
		box-shadow: 0 0 0 8px ${Theme.palette.thirdary};
		transform: scale(1.1);
		z-index: 2;
	}
`

const StyledTag = styled.div`
	background-color: ${Theme.palette.thirdary};
	color: ${Theme.palette.primaryText};
	border-radius: 4px;
	padding: 2px 8px;
`

export default function WorkCard({ icon, title, subtitle, text }) {
	return (
		<CardRoot>
			<Box
				width="100%"
				height="200px"
				display="flex"
				justifyContent="center"
				alignItems="center"
				borderRadius={8}
				color={Theme.palette.secondary}
				style={{ backgroundColor: 'rgba(0,0,0,0.17)' }}
			>
				{icon}
			</Box>
			<Typography variant="h5" align="center">{title}</Typography>
			<Box display="flex" justifyContent="center">
				<StyledTag><Typography variant="subtitle2">{subtitle}</Typography></StyledTag>
			</Box>
			<Typography variant="subtitle1">{text}</Typography>
		</CardRoot>
	)
}
