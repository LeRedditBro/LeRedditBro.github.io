import React from 'react'
import Theme from '../Theme'

export default function LineBackground({ rotation = 0, thickness = '25%', color = Theme.palette.thirdary }) {
	return <g transform={`rotate(${rotation})`}>
		<line x1="0%" y1="0%" x2="100%" y2="100%" strokeWidth={thickness} stroke={color} />
		<line x1="-50%" y1="50%" x2="50%" y2="150%" strokeWidth={thickness} stroke={color} />
		<line x1="50%" y1="-50%" x2="150%" y2="50%" strokeWidth={thickness} stroke={color} />
	</g>
}
