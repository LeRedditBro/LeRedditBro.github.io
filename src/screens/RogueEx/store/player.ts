import produce from "immer";

export default (set) => ({
	name: 'Dev Player',
	health: 'aaabbbccc',
	setHealth: (h) => {
		set(state => produce(state, draft => {
			if (typeof h === 'function') {
				draft.player.health = h(draft.player.health);
			} else {
				draft.player.health = h;
			}
		}))
	},
	load: (save) => {
		set(state => produce(state, draft => {
			Object.assign(draft, save);
		}))
	},
	tech: {} as any,
})