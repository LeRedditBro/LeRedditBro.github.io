import { Box } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import Button from '../../Button/Button';
import useSight from '../../GameProvider/useSight';
import Info from '../../Info/Info';
import Room from '../Room'

type DialogOption = {
	name: string,
	selectedEl?: any,
	onSelect?: () => void,
	requiredSight?: number,
}

export default function DialogRoom({ message, options }: { message: any, options: DialogOption[] }) {

	const [clickedOption, setClickedOption] = useState(undefined as any)
	const sight = useSight();

	useEffect(() => {
		clickedOption?.onSelect?.();
	}, [clickedOption])

	if (clickedOption?.selectedEl) {
		return clickedOption.selectedEl;
	}

	return (
		<Room element={<Box>
			<Info>{message}</Info>
			<Box mt="16px" display="flex" flexDirection="column" gridGap="8px" alignItems="stretch" width="fit-content">
				{options.filter(o => o.requiredSight === undefined ? true : o.requiredSight <= sight).map((o, index) => (<Button key={index} onClick={() => setClickedOption(o)}>{o.name}</Button>))}
			</Box>
		</Box>} />
	)
}
