export default function HealthBar({ health }) {
	return (
		<td style={{ background: 'red' }}><code style={{ color: 'white', fontSize: '32px' }}><b>{health}</b></code></td>
	)
}
