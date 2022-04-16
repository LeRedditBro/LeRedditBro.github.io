import Table from "../../Table/Table";
import HealthBar from "./HealthBar";

export default function Player({ player }) {
	return (
		<div>
			<Table>
				<tbody>
					<tr><th>name</th><td>{player.name}</td></tr>
					<tr><th>health</th><HealthBar health={player.health} /></tr>
				</tbody>
			</Table>
		</div>
	)
}


