import React from 'react'

import Skull from 'mdi-material-ui/Skull'
import Flash from 'mdi-material-ui/Flash'
import Atom from 'mdi-material-ui/Atom'
import DeathStar from 'mdi-material-ui/DeathStar'
import ConsoleLine from 'mdi-material-ui/ConsoleLine'
import Bug from 'mdi-material-ui/Bug'
import Cat from 'mdi-material-ui/Cat'
import Hexagon from 'mdi-material-ui/Hexagon'

import Plus from 'mdi-material-ui/Plus'

import { Box } from '@material-ui/core'

const OpacityPlus = () => (
	<div style={{ opacity: 0.25 }}>
		<Plus />
	</div>
)

export default function IconGrid({ cellSize, style = {} }) {
	return (
		<Box
			display="grid"
			width={cellSize * 4}
			height={cellSize * 4}
			gridTemplateColumns="repeat(4, 1fr)"
			gridTemplateRows="repeat(4, 1fr)"
			style={{ placeItems: 'center', ...style }}
		>
			<Skull />
			<OpacityPlus />
			<Flash />
			<OpacityPlus />

			<OpacityPlus />
			<Atom />
			<OpacityPlus />
			<DeathStar />

			<ConsoleLine />
			<OpacityPlus />
			<Hexagon />
			<OpacityPlus />

			<OpacityPlus />
			<Bug />
			<OpacityPlus />
			<Cat />
		</Box>
	)
}
