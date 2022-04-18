import { v4 as uuidv4 } from 'uuid';

export default () => ({
	name: '',
	uuid: uuidv4(),
	onDeath: function onDeath() {
		console.log(`☠ ${this.name} had died!`);
	}
})