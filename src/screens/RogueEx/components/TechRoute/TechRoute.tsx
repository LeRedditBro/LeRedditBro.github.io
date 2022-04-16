import { Route, RouteProps } from 'react-router-dom'
import useTech from '../GameProvider/useTech';

export default function TechRoute({ tech, level = 0, ...rest }: RouteProps & { tech: any, level: number }) {

	const hasTech = useTech(tech, level);

	if (!hasTech) {
		return null;
	}

	return (
		<Route {...rest} />
	)
}
