import { Box, Typography } from '@material-ui/core'
import styled from 'styled-components'
import Theme from '../../Theme'

const CardRoot = styled.div`

	position: relative;

	max-width: 350px;
	display: flex;
	flex-direction: column;
	align-items: center;

	background: ${Theme.palette.primary};
	color: ${Theme.palette.primaryText};

	border-radius: 8px;

	padding: 1rem;

	gap: 8px;

	box-shadow: 0 0 0 0px ${Theme.palette.primary};
	transition: all .4s;

	& > * {
		z-index: 6;
	}
`

const StyledTag = styled.div`
	background-color: ${Theme.palette.thirdary};
	color: ${Theme.palette.primaryText};
	border-radius: 4px;
	padding: 2px 8px;
`

const StyledAnchor = styled.div`
	text-decoration: none;
	color: inherit;
	display: flex;
	width: fit-content;
`

const Bubble = styled.div`
	margin: 0 -2rem;
	width: 500px;
	height: 500px;
	background: ${Theme.palette.primary};
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: visible;
`

export default function WorkCard({ icon, title = '' as any, section, text = '' as any, bubble = undefined as any, reverse = false, CardProps = {} }) {
	return (
		<Box display="flex" flexDirection={reverse ? 'row-reverse' : 'row'} alignItems="center" position="relative">
			<Box position="absolute" zIndex="3" top="0" {...(reverse ? { left: "0" } : { right: "0" })} display="flex" justifyContent="center" alignItems="center">
				<Box bgcolor={Theme.palette.primary} borderRadius="50px" width="60px" height="60px" display="flex" justifyContent="center" alignItems="center">
					<Box bgcolor={'rgba(0,0,0,0.17)'} borderRadius="50px" width="50px" height="50px" display="flex" justifyContent="center" alignItems="center">
						{icon}
					</Box>
				</Box>
			</Box>

			<StyledAnchor>
				<CardRoot {...CardProps}>
					{/* <Box
						width="100%"
						height="200px"
						display="flex"
						justifyContent="center"
						alignItems="center"
						borderRadius={8}
						color={Theme.palette.secondary}
						style={{ backgroundColor: 'rgba(0,0,0,0.17)' }}
					>
						{icon}
					</Box> */}
					<Box position="relative" display="flex" justifyContent="center">
						<StyledTag><Typography variant="h4">{section}</Typography></StyledTag>
					</Box>
					<Typography variant="h5" align="center">{title}</Typography>
					<Typography variant="subtitle1">{text}</Typography>
				</CardRoot>
			</StyledAnchor>

			<Bubble className="gelly">
				<Box position="absolute">
					{bubble}
				</Box>
			</Bubble>
		</Box>
	)
}
