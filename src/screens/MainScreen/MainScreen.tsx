import React from 'react'
import { html } from 'print-xml'

import { ServerStyleSheets } from '@material-ui/styles'

import styled, { keyframes } from 'styled-components'
import IconGrid from '../../elements/IconGrid'
import Theme from '../../Theme'
import AppBar from '../../elements/AppBar'
import TextSplash from '../../elements/TextSplash'
import WorkScreen from '../WorkPanel/WorkPanel'
import { Box } from '@material-ui/core'
import GellyHover from './GellyHover'

const sheets = new ServerStyleSheets()

const BG_SIZE = 300

const moveBG = keyframes`
	from { background-position: 0px 0px; }
	to { background-position: ${BG_SIZE * 2}px ${BG_SIZE}px; }
`

const bg1 = html({
	width: BG_SIZE,
	height: BG_SIZE,
	style: () => sheets.toString(),
	element: sheets.collect(
		<IconGrid cellSize={(BG_SIZE / 4)} style={{ color: Theme.palette.paper }} />
	)
})

const BackgroundWrapper = styled.div`

	background-color: ${({ theme }) => theme.palette.background};
	background-image: ${bg1};

	position: relative;

	flex: 1;
	
	overflow-y: scroll;

	animation: 40s ${moveBG} linear infinite;
	
	&::-webkit-scrollbar {
		width: 25px;
	}
	/* Track */
	&::-webkit-scrollbar-track {
		background: ${({ theme }) => theme.palette.primary}aa;
	}

	/* Handle */
	&::-webkit-scrollbar-thumb {
		background: ${({ theme }) => theme.palette.secondary}dd;
	}

	/* Handle on hover */
	&::-webkit-scrollbar-thumb:hover {
		background: ${({ theme }) => theme.palette.secondary};
	}

`

const OuterWrapper = styled.div`
	position: absolute;

	top: 0;
	bottom: 0;
	right: 0;
	left: 0;

	display: flex;
	flex-direction: column;
`

export default function MainScreen() {
	return (
		<OuterWrapper>
			<BackgroundWrapper>
				<Box zIndex="999" position="sticky" top="0px"><AppBar /></Box>
				<GellyHover style={{ width: '100%', height: '100%' }}>
					<TextSplash>
						Beautifully<br />Efficient
					</TextSplash>
					<WorkScreen />
				</GellyHover>
			</BackgroundWrapper>
		</OuterWrapper>
	)
}
