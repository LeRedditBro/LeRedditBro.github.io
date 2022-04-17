export default function HealthBar({ health, color = 'red' }) {
	return (
		<td style={{ background: color }}><code style={{ color: 'white', fontSize: '32px' }}><b>{health}</b></code></td>
	)
}
