import { Box, ServerStyleSheets } from '@material-ui/core'
import { html, svg } from 'print-xml'
import React from 'react'

import styled from 'styled-components'
import Theme from '../Theme'

const TextSplashDiv = styled.div`
	font-family: 'Roboto Mono';
	font-size: inherit;
	
	color: ${({ theme }) => theme.palette.secondary};
	
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
	
	transform: translate(5px, 5px);
	
	background-clip: text;
	
	pointer-events: none;
	user-select: none;

	z-index: 0;

	white-space: pre;
	width: fit-content;
	height: fit-content;

	color: ${Theme.palette.thirdary};
`

const TextGridContainer = styled.div`
	display: grid;
	mix-blend-mode: exclusion;
	font-size: 150px;
	margin-left: 150px;
`

const FlexWrapper = styled.div`
	display: flex;
	align-items: center;
	height: 100%;
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
