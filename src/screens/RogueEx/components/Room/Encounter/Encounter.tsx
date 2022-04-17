import { useState } from 'react';
import BattleRoom from '../BattleRoom/BattleRoom'
import useBattlePlayer from '../../../logic/allies/useBattlePlayer';

export default function Encounter({ message, enemies, additionalAllies = [], initialHealth, defeatEl = undefined as any, successEl = undefined as any }) {
	const battlePlayer = useBattlePlayer(initialHealth);
	const [success, setSuccess] = useState(false);
	const [defeat, setDefeat] = useState(false);

	if (success) {
		return successEl || null;
	}

	if (defeat) {
		return defeatEl || null;
	}

	return (
		<BattleRoom
			message={message}
			allies={[battlePlayer, ...additionalAllies]}
			enemies={enemies}

			onDefeat={() => setDefeat(true)}
			onSuccess={() => setSuccess(true)}
		/>
	)
}
