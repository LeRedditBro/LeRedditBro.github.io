import useTech from '../GameProvider/useTech';

export default function Button(props) {
	const hasMui = useTech('mui');

	if (hasMui) {
		return <Button {...props} />
	}
	return (
		<button {...props} />
	)
}
