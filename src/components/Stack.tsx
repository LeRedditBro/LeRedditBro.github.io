import React from 'react'

import styled from 'styled-components'

const StackGrid = styled.div`
	display: grid;

	& > * {
		grid-row: 1;
		grid-column: 1;
	}
`

export default function Stack({ children, ...rest }) {
	return (
		<StackGrid {...rest}>
			{children}
		</StackGrid>
	)
}
