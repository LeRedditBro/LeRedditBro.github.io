import Table from "../../Table/Table";
import HealthBar from "./HealthBar";

export default function Ally({ ally }) {
	return (
		<div>
			<Table>
				<tbody>
					<tr><th colSpan={2}>{ally.name}</th></tr>
					<tr><th>health</th><HealthBar health={ally.health} color="green" /></tr>
				</tbody>
			</Table>
		</div>
	)
}


