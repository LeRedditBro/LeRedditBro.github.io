import React from 'react'
import { Box, Typography } from '@material-ui/core'

import styled, { keyframes } from 'styled-components'
import Stack from '../../components/Stack'
import Theme from '../../Theme'
import WorkCard from './WorkCard'

import StarFourPointsIcon from 'mdi-material-ui/StarFourPoints'
import NpmIcon from 'mdi-material-ui/Npm'
import GamepadSquareIcon from 'mdi-material-ui/GamepadSquare'
import { html, svg } from 'print-xml'
import LineBackground from '../../elements/LineBackground'
import { Flash } from 'mdi-material-ui'
import { repeatTextShadow } from '../../util/cssUtil'

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

// const BG_SIZE = 24
const BG_MARGIN = 10
const BG_SIZE = (24) + (BG_MARGIN * 2)

// const moveBG = keyframes`
// 	from { background-position: 0px 0px; }
// 	/* to { background-position: ${BG_SIZE * 2}px ${BG_SIZE}px; } */
// 	to { background-position: ${BG_SIZE}px 0; }
// `

// const HazardDiv = styled.div`

// 	width: 100%;
// 	height: 102.5%;
// 	opacity: 0.87;

// 	animation: 2s ${moveBG} infinite linear;

// 	background-image: ${svg({
// 	width: BG_SIZE,
// 	height: BG_SIZE,
// 	element: <LineBackground />
// })};
// `

const RepeatIcon = styled.div`
	height: ${BG_SIZE}px;
	flex: 1;

	border: 2px solid ${Theme.palette.secondary};
	background-color: ${Theme.palette.background};

	box-shadow: inset 0 0 6px 10px ${Theme.palette.background};

	background-image: ${html({
	width: BG_SIZE,
	height: BG_SIZE,
	element: <Flash style={{ fill: Theme.palette.thirdary, margin: BG_MARGIN }} />
	// element: <LineBackground />
})};
`

const moveBGLeft = keyframes`
	from { background-position: 0px 0px; }
	/* to { background-position: ${BG_SIZE * 2}px ${BG_SIZE}px; } */
	to { background-position: ${-BG_SIZE}px 0; }
`
const moveBGRight = keyframes`
	from { background-position: 0px 0px; }
	/* to { background-position: ${BG_SIZE * 2}px ${BG_SIZE}px; } */
	to { background-position: ${BG_SIZE}px 0; }
`

const RepeatRight = styled(RepeatIcon)`
	border-bottom-left-radius: 100px;
	border-top-left-radius: 100px;
	border-right: none;

	animation: 2s ${moveBGLeft} infinite linear;
`
const RepeatLeft = styled(RepeatIcon)`
	border-bottom-right-radius: 100px;
	border-top-right-radius: 100px;
	border-left: none;

	animation: 2s ${moveBGRight} infinite linear;
`

const StyledTitleBox = styled(Box)`
	& svg {
		transition: all .4s;
	}
	& .MuiTypography-root {
		text-shadow: ${repeatTextShadow(1, 1, () => Theme.palette.paper, 50)};
		font-family: 'Roboto Mono';
		transition: all .4s;
	}

	/* &:hover  */

	&:hover {
		svg {
			transform: rotate(180deg);
		}

		.MuiTypography-root {
			/* transform: rotate(180deg); */
			text-shadow: ${repeatTextShadow(-1, 1, () => Theme.palette.paper, 50)};
		}
	}
`


export default function WorkScreen() {
	return (
		<Box height="100%" display="flex" flexDirection="column" justifyContent="center" alignItems="center" id="my_work">
			<Stack style={{ placeItems: 'center', width: '100%' }}>
				<CardTrayDiv>
					<Box
						display="flex"
						gridGap="1rem"
						alignItems="center"
						position="absolute"

						width="100%"
						top={-36}

						zIndex={2}
					>
						<RepeatLeft className="cursor-flash" />
						<StyledTitleBox
							display="flex"
							gridGap="1rem"
							alignItems="center"

							p="6px 12px"

							color={Theme.palette.thirdary}
							style={{ backgroundColor: Theme.palette.background }}

							borderRadius={100}
							border={`4px solid ${Theme.palette.secondary}`}

							overflow="hidden"
						>
							<StarFourPointsIcon />
							<Typography variant="h4">MY WORK</Typography>
							<StarFourPointsIcon />
						</StyledTitleBox>
						<RepeatRight className="cursor-flash" />
					</Box>
					<CardTrayDivInner>
						<WorkCard
							icon={<NpmIcon style={{ fontSize: 250 }} />}
							title="Print XML"
							subtitle="npm library"
							text={`A library I've created, in order to render complex XML architectures inside data URI.\nIn fact, many parts of this website are rendered using it!`}
							href="https://www.npmjs.com/package/print-xml/v/1.0.22"
						/>
						<WorkCard
							icon={<GamepadSquareIcon style={{ fontSize: 200 }} />}
							title="Consolve"
							subtitle="game"
							text="An independant game made by me, where the user needs to solve puzzles using his very own chrome devtools"
							href="https://consolve.netlify.app/"
						/>
						<WorkCard
							icon={<img src="https://pbs.twimg.com/profile_images/1214543046622269442/PsoBIQyl.jpg" style={{ height: '80%', borderRadius: 200 }} />}
							title="Fullstack Developer at ScopioLabs"
							subtitle="work experience"
							text="Working as a fullstack developer at Scopio Labs. Current experience - 1 Year as fullstack"
							href="https://scopiolabs.com/"
						/>

					</CardTrayDivInner>
				</CardTrayDiv>
				{/* <HazardDiv /> */}
			</Stack>
		</Box>
	)
}
