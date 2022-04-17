import produce from "immer";

export default (set) => ({
	name: 'Dev Player',
	load: (save) => {
		set(state => produce(state, draft => {
			Object.assign(draft, save);
		}))
	},
	tech: {} as any,
})