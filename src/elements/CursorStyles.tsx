import { html } from 'print-xml'
import React from 'react'

import styled from 'styled-components'

import CursorDefault from 'mdi-material-ui/CursorDefault'
import CursorPointer from 'mdi-material-ui/CursorPointer'

import Theme from '../Theme'
import { CursorText } from 'mdi-material-ui'

const iconToCursor = (Icon) => (
	html({
		width: 24,
		height: 24,
		element: <Icon style={{
			fill: Theme.palette.thirdary, filter: `

		drop-shadow(1px 0px 0px ${Theme.palette.secondary}) \
		drop-shadow(-1px 0px 0px ${Theme.palette.secondary}) \
		drop-shadow(0px -1px 0px ${Theme.palette.secondary}) \
		drop-shadow(0px 1px 0px ${Theme.palette.secondary}) \
		`
		}} />
	})
)

const auto = iconToCursor(CursorDefault)
const pointer = iconToCursor(CursorPointer)
const text = iconToCursor(CursorText)

const CursorRules = styled.div`

	cursor: ${auto} 0 4, auto;

	& .cursor-pointer {
		cursor: ${pointer} 0 4, pointer;
	}

	& .cursor-auto {
		cursor: ${auto} 0 4, auto;
	}

	& .cursor-text {
		cursor: ${text} 0 12, text;
	}
`

export default function CursorStyles({ children }) {
	return (
		<CursorRules>
			{children}
		</CursorRules>
	)
}
