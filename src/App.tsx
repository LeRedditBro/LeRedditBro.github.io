import React from 'react'

import styled, { ThemeProvider } from 'styled-components'
import MainScreen from './MainScreen/MainScreen'
import theme from './Theme'

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<MainScreen />
		</ThemeProvider>
	)
}
