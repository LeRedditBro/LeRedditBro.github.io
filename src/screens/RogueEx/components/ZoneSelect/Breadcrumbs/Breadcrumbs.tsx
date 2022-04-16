import { Box } from '@material-ui/core';
import React, { Fragment } from 'react'
import { Link, useLocation } from 'react-router-dom';
import useTech from '../../GameProvider/useTech';
import { Breadcrumbs as MuiBreadcrumbs, Link as MuiLink } from '@material-ui/core';

export default function Breadcrumbs() {
	const hasMui = useTech('mui');

	const location = useLocation();

	const [, ...rooms] = location.pathname.split('/');

	return (
		hasMui ? (
			<MuiBreadcrumbs>
				{rooms.map((r, index) => (
					index === rooms.length - 1 ? (
						<b key={index}>{r}</b>
					) : (
						<MuiLink component={Link} key={index} to={'/' + rooms.slice(0, index + 1).join('/')} >{r}</MuiLink>
					)
				))}
			</MuiBreadcrumbs>
		) : (
			<Box display="flex" gridGap="8px">
				{rooms.map((r, index) => (
					<Fragment key={index}>
						{index !== 0 && <Box>/</Box>}
						{index === rooms.length - 1 ? (
							<b>{r}</b>
						) : (
							<Link to={'/' + rooms.slice(0, index + 1).join('/')} >{r}</Link>
						)}
					</Fragment>
				))}
			</Box>
		)
	)
}
