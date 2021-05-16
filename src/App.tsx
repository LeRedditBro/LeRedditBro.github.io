import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import React from 'react'

import { createGlobalStyle, ThemeProvider } from 'styled-components'
import CursorStyles from './elements/CursorStyles'
import MainScreen from './screens/MainScreen/MainScreen'
import theme from './Theme'

const muiTheme = createMuiTheme({
	palette: {
		type: 'dark'
	}
})

const GlobalStyle = createGlobalStyle`
	::selection {
		color: ${theme.palette.thirdary};
		background-color: ${theme.palette.primary};
	}
`

export default function App() {
	return (
		<MuiThemeProvider theme={muiTheme}>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<CursorStyles>
					<MainScreen />
				</CursorStyles>
			</ThemeProvider>
		</MuiThemeProvider>
	)
}
