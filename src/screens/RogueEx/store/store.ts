import create from "zustand";
import player from "./player";

interface StoreInterface {
	player: ReturnType<typeof player>
}

const useStore = create<StoreInterface>((set) => ({
	player: player(set),
}));

export default useStore;