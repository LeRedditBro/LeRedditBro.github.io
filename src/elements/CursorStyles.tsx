import { html } from 'print-xml'
import React from 'react'

import styled, { createGlobalStyle } from 'styled-components'

import CursorDefault from 'mdi-material-ui/CursorDefault'
import CursorPointer from 'mdi-material-ui/CursorPointer'

import Theme from '../Theme'
import { CursorText, Flash } from 'mdi-material-ui'

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

const createGlobalCursor = (selector, cursor, fallback) => {
	return createGlobalStyle`
	${selector} {
		cursor: ${cursor} 0 4, ${fallback};
	}
	`
}

const auto = iconToCursor(CursorDefault)
const pointer = iconToCursor(CursorPointer)
const text = iconToCursor(CursorText)
const flash = iconToCursor(Flash)

const AutoStyle = createGlobalCursor('*, .cursor-auto', auto, 'auto')
const PointerStyle = createGlobalCursor('.cursor-pointer, .cursor-pointer *', pointer, 'pointer')
const TextStyle = createGlobalCursor('.cursor-text', text, 'text')
const FlashStyle = createGlobalCursor('.cursor-flash', flash, 'auto')


export default function CursorStyles({ children }) {
	return (
		<>
			<AutoStyle />
			<PointerStyle />
			<TextStyle />
			<FlashStyle />
			{children}
		</>
	)
}
