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

	&::selection {
		color: ${({ theme }) => theme.palette.thirdary};
		background-color: ${({ theme }) => theme.palette.primary};
	}
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

	color: ${Theme.palette.thirdary};
`

const TextGridContainer = styled.div`
	display: grid;
	width: 500px;
	margin: 260px 100px;
	mix-blend-mode: exclusion;
	font-size: 150px;
`

export default function TextSplash({ children }) {
	return (
		<TextGridContainer>
			<TextSplashShadowDiv>
				{children}
			</TextSplashShadowDiv>
			<TextSplashDiv>
				{children}
			</TextSplashDiv>
		</TextGridContainer>
	)
}
