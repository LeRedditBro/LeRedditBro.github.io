import styled from 'styled-components'

const GellyHover = styled.div`
	& .gelly {
		transition: transform 255ms;
		transform-origin: center;
		pointer-events: all;
	}
	& .gelly:hover {
		transform: scale(1.2);
	}
`

export default GellyHover;