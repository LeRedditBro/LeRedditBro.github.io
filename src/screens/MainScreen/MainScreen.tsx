import React from 'react'
import { html } from 'print-xml'

import { ServerStyleSheets } from '@material-ui/styles'

import styled, { keyframes } from 'styled-components'
import Paper from '../../components/Paper'
import IconGrid from '../../elements/IconGrid'
import Theme from '../../Theme'
import AppBar from '../../elements/AppBar'
import TextSplash from '../../elements/TextSplash'
import WorkScreen from '../WorkScreen/WorkScreen'

const sheets = new ServerStyleSheets()
const sheets1 = new ServerStyleSheets()
const sheets2 = new ServerStyleSheets()
const sheets3 = new ServerStyleSheets()
const sheets4 = new ServerStyleSheets()

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
	/* width: 100%;
	height: 100%; */

	background-color: ${({ theme }) => theme.palette.background};
	background-image: ${bg1};

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
			<AppBar />
			<BackgroundWrapper>
				<TextSplash>
					Beautifully<br />Efficient
				</TextSplash>
				<WorkScreen />
			</BackgroundWrapper>
		</OuterWrapper>
	)
}
