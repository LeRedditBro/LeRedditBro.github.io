import styled from 'styled-components';

const TableRoot = styled.table`
	border: 4px ridge;

	& th {
		border: 1px solid;
	}


	& td {
		border: 1px solid;
	}
`

export default function Table(props) {
	return (
		<TableRoot cellSpacing="0" {...props} />
	)
}