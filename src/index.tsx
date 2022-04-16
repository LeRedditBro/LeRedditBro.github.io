import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

const root = document.getElementById('root')

document.body.style.margin = "0px"
document.body.style.padding = "0px"

render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
	, root)