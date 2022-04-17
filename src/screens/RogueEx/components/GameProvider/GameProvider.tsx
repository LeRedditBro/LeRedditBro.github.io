import { useEffect } from 'react'
import loadPlayer from '../../logic/storage/loadPlayer';
import useStore from '../../store/store';
import usePlayer from './usePlayer';

export default function GameProvider({ children }) {

	const player = usePlayer();
	const sight = useStore(state => state.sight);
	const setSight = useStore(state => state.setSight);

	useEffect(() => {
		const pl = localStorage.getItem('rx_player');
		const loadedPlayer = loadPlayer(pl)


		player.load(loadedPlayer);

		// @ts-ignore
		window.setSight = setSight;

	}, [])

	useEffect(() => {
		// @ts-ignore
		window.sight = sight;
		if (sight < -10) {
			document.body.style.filter = `blur(${-(sight / 10)}px)`;
		} else {
			document.body.style.filter = '';
		}
	}, [sight])

	return (
		children
	)
}
