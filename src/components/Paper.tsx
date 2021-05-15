import React from 'react'

import styled from 'styled-components'

const PaperDiv = styled.div<{ $square: boolean, $color: string }>`
	background: ${({ theme, $color }) => theme.palette[$color]};
	${p => !p.$square && `
		border-radius: 4px;
	`}
`

export default function Paper({ children, color = "paper", square = false, ...rest }) {
	return (
		<PaperDiv {...rest} $square={square} $color={color}>
			{children}
		</PaperDiv>
	)
}
