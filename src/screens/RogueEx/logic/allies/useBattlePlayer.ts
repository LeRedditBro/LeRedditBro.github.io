import { useMemo } from "react";
import usePlayer from "../../components/GameProvider/usePlayer";
import { default as battlePlayer } from './player';

export default function useBattlePlayer(health) {
	const player = usePlayer();

	return useMemo(() => battlePlayer({ name: player.name, health }), []);
}