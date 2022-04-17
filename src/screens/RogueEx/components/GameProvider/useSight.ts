import useStore from "../../store/store";

export default function useSight() {
	return useStore(state => state.sight);
}