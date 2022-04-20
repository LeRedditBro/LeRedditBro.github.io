import livingBase from "../livingBase";

const orc = ({ health, name = 'orc', regeneration }) => {

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

			if (self && self.health.length < health.length) {
				self.health += regeneration;
				self.health = self.health.substr(0, health.length);
				console.log(`💞 ${name} regenerated %o health!`, regeneration);
			}
		}
	})
};

export default orc;