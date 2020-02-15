/** @format */

import styled from 'styled-components';

export const Container = styled.div`
	background: #fff;
	color: #222;
	min-width: 300px;
	max-width: 300px;
	min-height: 90px;
	max-height: 90px;
	display: flex;
	flex-flow: column wrap;
	justify-content: flex-end;
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;

	& div {
		display: flex;
		flex-flow: column wrap;
		overflow: auto;
		align-items: flex-end;
		justify-content: flex-end;
	}

	& p,
	& span {
		padding-left: 10px;
		padding-right: 10px;
	}

	& span {
		font-size: 2em;
	}
`;
