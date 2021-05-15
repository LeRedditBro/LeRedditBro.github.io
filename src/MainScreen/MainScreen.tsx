import React from 'react'
import { html } from 'print-xml'

import { ServerStyleSheets } from '@material-ui/styles'

import styled, { keyframes } from 'styled-components'
import Paper from '../components/Paper'
import IconGrid from '../elements/IconGrid'
import Theme from '../Theme'
import AppBar from '../elements/AppBar'
import TextSplash from '../elements/TextSplash'

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
	position: absolute;

	top: 0;
	bottom: 0;
	right: 0;
	left: 0;

	/* width: 100%;
	height: 100%; */

	background-color: ${({ theme }) => theme.palette.background};
	background-image: ${bg1};

	animation: 40s ${moveBG} linear infinite;

	&::-webkit-scrollbar {
		width: 40px;
	}

	/* TODO style scrollbar more */

`

const StyledPaper = styled(Paper)`
	position: absolute;

	top: 150px;
	left: 225px;

	padding: 1rem;

	color: ${({ theme }) => theme.palette.secondary};
	font-weight: 900;
	font-size: 30px;
	font-family: Roboto, 'sans-serif';
`

export default function MainScreen() {
	return (
		<BackgroundWrapper>
			<AppBar />
			<TextSplash>
				Beautifully
				Efficient
			</TextSplash>
			{/* <StyledPaper square>
				<IconGrid cellSize={100} />
			</StyledPaper> */}
		</BackgroundWrapper>
	)
}
