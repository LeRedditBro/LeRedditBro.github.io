import { Typography } from '@material-ui/core'
import React from 'react'

import styled from 'styled-components'

const AppBarRoot = styled.div`
	background: ${({ theme }) => theme.palette.primary};
	padding: 12px 26px;
`

const AppBarButtons = styled.div`
	display: flex;
	gap: 16px;
	color: ${({ theme }) => theme.palette.secondary};
`

export default function AppBar() {
	return (
		<AppBarRoot>
			<Typography>
				Tomer Atar
			</Typography>
			<AppBarButtons></AppBarButtons>
		</AppBarRoot>
	)
}
