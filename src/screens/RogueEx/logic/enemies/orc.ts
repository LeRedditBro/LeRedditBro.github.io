import livingBase from "../livingBase";

const slime = ({ health, name = 'orc', regeneration }) => {

	const base = livingBase();

	return ({
		...base,
		originalHealth: health,
		health,
		name,
		properties: [
			{
				name: 'regenerationPerTurn',
				value: regeneration,
				sightRequired: 0,
			},
		],
		onTurnEnd: function onTurnEnd(stage) {
			const self = stage.enemies.find(e => e.uuid === this.uuid);

			if (self) {
				self.health += regeneration;
			}
		}
	})
};

export default slime;