import { Box, Button, Chip, Tooltip, Typography } from '@material-ui/core'

import styled from 'styled-components'
import WorkCard from './WorkCard'

import FileCodeIcon from 'mdi-material-ui/FileCode'
import GamepadSquareIcon from 'mdi-material-ui/GamepadSquare'
import Goo from 'gooey-react'
import HideSvg from './HideSvg'
import { amber, orange, purple, red, yellow } from '@material-ui/core/colors'
import workExperience from './workExperience'
import LinkedInBadge from './LinkedInBadge'
import projects from './projects'
import hobbies from './hobbies'

const StyledChip = styled(Chip)`
	background: #1b2769;
	border: 3px solid #100d1c87;
`

export default function WorkScreen() {

	return (
		<Box id="my_work" display="flex" width="100%" flexDirection="column" justifyContent="center" alignItems="center" position="relative">
			<Goo id="big-goo" intensity='strong' composite>
				<Box position="absolute" overflow="visible" right={0} bottom={0}>
					<HideSvg>
						<Goo intensity="strong" style={{ position: 'relative', height: '1400px', width: '800px' }}>

							<svg width="100%" height="100%">
								{/* @ts-ignore */}
								<circle r="100px" fill={purple[500]} cx="351px" cy="108px" />
								<circle r="200px" fill={red[500]} cx="500px" cy="500px" />
								<circle r="150px" fill={orange[500]} cx="400px" cy="700px" />
								<circle r="50px" fill={amber[500]} cx="350px" cy="850px" />
								<circle r="200px" fill={yellow[500]} cx="219px" cy="1217px" />
							</svg>

						</Goo>
					</HideSvg>
				</Box>

				<Goo id="cardgoo" composite intensity="strong" style={{ position: 'relative', height: '1400px' }}>
					<Box display="flex" flexDirection="column" alignItems="center" gridGap="4rem" width="100%">

						<WorkCard
							icon={<a className="cursor-pointer" href="https://scopiolabs.com/" target="_blank" style={{ display: 'flex', height: '80%' }}><img src="https://pbs.twimg.com/profile_images/1214543046622269442/PsoBIQyl.jpg" style={{ borderRadius: 200 }} /> </a>}
							title="Fullstack Developer"
							section="My Work Experience"
							text={<>
								<Typography align="center" style={{ margin: '-4px 0 6px 0' }}>2 Years of experience</Typography>
								<LinkedInBadge />
							</>}
							bubble={
								<Box zIndex="5" display="flex" flexWrap="wrap" maxWidth="400px" justifyContent="center" gridGap="0.5rem" style={{ pointerEvents: 'none' }}>
									{workExperience.map(e => <StyledChip color="primary" label={e.name} key={e.name} icon={e.icon} />)}
								</Box>
							}
						/>

						<WorkCard
							reverse
							icon={<FileCodeIcon style={{ fontSize: '32px' }} />}
							text="A collection of some of my public projects"
							section="My Projects"
							bubble={
								<Box zIndex="5" display="flex" flexWrap="wrap" maxWidth="400px" justifyContent="center" gridGap="0.5rem">
									{/* @ts-ignore */}
									{projects.map(e => <Tooltip key={e.name} arrow title={<Box fontSize="16px" style={{ lineHeight: '20px' }}>{e.description}</Box>}><span><Button variant="contained" className="cursor-pointer" color="secondary" key={e.name} startIcon={e.icon} component="a" href={e.url} target="_blank">{e.name}</Button></span></Tooltip>)}
								</Box>
							}
						/>

						<WorkCard
							icon={<GamepadSquareIcon style={{ fontSize: '32px' }} />}
							section="Hobbies"
							text="Some of my hobbies, I like to be creative, either when making games, coding, or drawing."
							bubble={
								<Box zIndex="5" display="flex" flexWrap="wrap" maxWidth="400px" justifyContent="center" gridGap="0.5rem">
									{hobbies.map(e => <StyledChip color="primary" label={e.name} key={e.name} icon={e.icon} {...(e.url ? { href: e.url, clickable: true, target: '_blank', className: 'cursor-pointer', component: 'a' } : { style: { pointerEvents: 'none' } })} />)}
								</Box>
							}
						/>
					</Box>
				</Goo>
			</Goo>
		</Box>

	)
}
