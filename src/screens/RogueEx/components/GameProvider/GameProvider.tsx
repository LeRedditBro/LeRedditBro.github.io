import { useEffect } from 'react'
import loadPlayer from '../../logic/storage/loadPlayer';
import usePlayer from './usePlayer';

export default function GameProvider({ children }) {

	const player = usePlayer();

	useEffect(() => {
		const pl = localStorage.getItem('rx_player');
		const loadedPlayer = loadPlayer(pl)


		player.load(loadedPlayer);
	}, [])

	return (
		children
	)
}
