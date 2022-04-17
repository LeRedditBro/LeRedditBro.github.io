import produce from "immer";
import create from "zustand";
import player from "./player";

interface StoreInterface {
	player: ReturnType<typeof player>;
	sight: number;
	setSight: (level: number) => void;
}

const useStore = create<StoreInterface>((set) => ({
	player: player(set),
	sight: 0,
	setSight: (level) => {
		set(state => {
			if (level <= (state.player.tech.sight || 0)) {
				return produce(state, (draft) => {
					draft.sight = level;
				})
			}

			console.error('You are not skilled enough to see at such clarity');

			return state;
		})
	},
}));

export default useStore;