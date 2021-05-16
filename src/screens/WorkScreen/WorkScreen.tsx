import React from 'react'
import { Box, Typography } from '@material-ui/core'

import styled from 'styled-components'
import Stack from '../../components/Stack'
import Theme from '../../Theme'
import WorkCard from './WorkCard'

import StarFourPointsIcon from 'mdi-material-ui/StarFourPoints'
import NpmIcon from 'mdi-material-ui/Npm'
import GamepadSquareIcon from 'mdi-material-ui/GamepadSquare'
import { svg } from 'print-xml'
import LineBackground from '../../elements/LineBackground'

const CardTrayDiv = styled.div`
	background: ${Theme.palette.paper};
	position: relative;

	width: 100%;
	box-sizing: border-box;

	flex: 1;
	padding: 2rem;
	display: flex;
	justify-content: center;
	place-items: center;
	align-items: stretch;
	gap: 2rem;

	z-index: 1;
`
const CardTrayDivInner = styled.div`
	width: 100%;
	box-sizing: border-box;

	flex: 1;
	padding: 2rem;
	display: flex;
	justify-content: center;
	place-items: center;
	align-items: stretch;
	gap: 2rem;

	& > * {
		flex: 1;
	}
`

const HazardDiv = styled.div`

	width: 100%;
	height: 102.5%;
	opacity: 0.87;

	background-image: ${svg({
	width: 24,
	height: 24,
	element: <LineBackground />
})};
`

export default function WorkScreen() {
	return (
		<Box height="100%" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
			<Stack style={{ placeItems: 'center', width: '100%' }}>
				<CardTrayDiv>
					<Box
						display="flex"
						gridGap="1rem"
						alignItems="center"
						position="absolute"

						p="6px 12px"

						color={Theme.palette.secondary}
						style={{ backgroundColor: Theme.palette.primary }}

						borderRadius={100}
						border={`8px solid ${Theme.palette.paper}`}

						top={-36}

						zIndex={2}
					>
						<StarFourPointsIcon />
						<Typography variant="h4" style={{ fontFamily: 'Roboto Mono' }}>MY WORK</Typography>
						<StarFourPointsIcon />
					</Box>
					<CardTrayDivInner>
						<WorkCard
							icon={<NpmIcon style={{ fontSize: 250 }} />}
							title="Print XML"
							subtitle="npm library"
							text={`A library I've created, in order to render complex XML architectures inside data URI.\nIn fact, many parts of this website are rendered using it!`}
						/>
						<WorkCard
							icon={<GamepadSquareIcon style={{ fontSize: 200 }} />}
							title="Consolve"
							subtitle="game"
							text="An independant game made by me, where the user needs to solve puzzles using his very own chrome devtools"
						/>
						<WorkCard
							icon={<img src="https://pbs.twimg.com/profile_images/1214543046622269442/PsoBIQyl.jpg" style={{ height: '80%', borderRadius: 200 }} />}
							title="Fullstack Developer at ScopioLabs"
							subtitle="work experience"
							text="Working as a fullstack developer at Scopio Labs. Current experience - 1 Year as fullstack"
						/>

					</CardTrayDivInner>
				</CardTrayDiv>
				<HazardDiv />
			</Stack>
		</Box>
	)
}
