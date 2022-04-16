export default function loadPlayer(json) {
	if (!json) return {};

	const plObj = JSON.parse(json);

	return plObj;
}