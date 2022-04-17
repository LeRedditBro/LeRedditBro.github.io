import Table from "../../Table/Table";
import HealthBar from "./HealthBar";

export default function Enemy({ enemy }) {
	return (
		<div>
			<Table>
				<tbody>
					<tr><th colSpan={2}>{enemy.name}</th></tr>
					<tr><th>health</th><HealthBar health={enemy.health} /></tr>
				</tbody>
			</Table>
		</div>
	)
}
