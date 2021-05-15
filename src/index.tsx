import { render } from 'react-dom'
import App from './App'

// const root = document.createElement('div')
// root.id = "root"

const root = document.getElementById('root')

// document.body.append(root)

document.body.style.margin = "0px"
document.body.style.padding = "0px"

render(<App />, root)