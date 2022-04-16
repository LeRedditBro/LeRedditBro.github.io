import usePlayer from "./usePlayer";

export default function useTech(name, minLevel = 0) {
	const player = usePlayer()

	if (!minLevel) {
		return Boolean(player?.tech?.[name]);
	}

	return player?.tech?.[name] >= minLevel;
}