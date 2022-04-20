import { useEffect, useMemo, useState } from 'react'
import getCallToAction from '../../../logic/getCallToAction';
import DialogRoom, { DialogOption } from './DialogRoom'

export default function AcceptDialog({ message, moreOptions = undefined, children, ...rest }) {

	const [selectedOption, setSelectedOption] = useState<DialogOption>()

	const optionsMemo = useMemo<DialogOption[]>(() => {
		return [{ name: getCallToAction(), selectedEl: children }, ...(moreOptions || [])]
	}, [moreOptions, children]);

	useEffect(() => {
		Object.defineProperty(window, 'next', {
			get: function () {
				setSelectedOption(optionsMemo[0])
			}
		});

		return () => {
			// @ts-ignore
			delete window.next;
		}
	}, [optionsMemo])

	return (
		<DialogRoom selectedOption={selectedOption} message={message} options={optionsMemo} {...rest} />
	)
}
