import BattleRoom from '../../../components/Room/BattleRoom/BattleRoom'

export default function Encounter() {
	return (
		<BattleRoom message="you have been ambushed by goblins!" player={{ health: 'aaabbbccc', name: 'player' }} enemies={[{ health: 'aaa', name: 'goblin' }, { health: 'bbb', name: 'goblin' }, { health: 'ccc', name: 'goblin' }]} />
	)
}
