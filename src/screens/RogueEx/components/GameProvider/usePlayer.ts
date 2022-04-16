import useStore from "../../store/store";

export default function usePlayer() {
	return useStore(state => state.player);
}