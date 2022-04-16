import { Route, Routes } from 'react-router-dom'
import NotFound from '../../paths/NotFound/NotFound'
import ZoneSelect from '../ZoneSelect/ZoneSelect'

export default function Room({ routes = undefined as any, element = undefined as any, children = undefined as any }) {
	return (
		<Routes>
			<Route path="/">
				<Route index element={<ZoneSelect>{element || children}</ZoneSelect>} />
				{routes}
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	)
}
