import { Box, ServerStyleSheets } from '@material-ui/core'
import { html, svg } from 'print-xml'
import React from 'react'

import styled from 'styled-components'
import Theme from '../Theme'

const TextSplashDiv = styled.div`
	font-family: 'Roboto Mono';
	font-size: inherit;
	
	/* color: ${({ theme }) => theme.palette.secondary}; */
	color: ${Theme.palette.thirdary};

	
	grid-row: 1;
	grid-column: 1;
	
	z-index: 1;

	white-space: pre;
	width: fit-content;
	height: fit-content;
`


const TextSplashShadowDiv = styled.div`
	font-family: 'Roboto Mono';
	font-size: inherit;
	color: transparent;
	
	grid-row: 1;
	grid-column: 1;
	
	transform: translate(0.5vw, 0.5vw);
	
	background-clip: text;
	
	pointer-events: none;
	user-select: none;

	z-index: 0;

	white-space: pre;
	width: fit-content;
	height: fit-content;

	/* color: ${Theme.palette.thirdary}; */
	color: ${({ theme }) => theme.palette.secondary};

`

const TextGridContainer = styled.div`
	display: grid;
	mix-blend-mode: exclusion;
	font-size: 10vw;
	margin-left: 10vw;
`

const FlexWrapper = styled.div`
	display: flex;
	align-items: center;
	height: 78%;
	z-index: 1;
`

export default function TextSplash({ children }) {
	return (
		<FlexWrapper>
			<TextGridContainer>
				<TextSplashShadowDiv>
					{children}
				</TextSplashShadowDiv>
				<TextSplashDiv className="cursor-text">
					{children}
				</TextSplashDiv>
			</TextGridContainer>
		</FlexWrapper>
	)
}
