import React from 'react'
import Theme from '../Theme'

export default function WireFrame({ thickness = '25%', color = Theme.palette.thirdary }) {
	return (
		<rect width="100%" height="100%" strokeWidth={thickness} stroke={color} fill="transparent" />
	)
}