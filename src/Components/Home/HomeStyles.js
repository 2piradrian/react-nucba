import styled from "styled-components";

export const HomeContainer = styled.div`
	width: 100%;
	height: 300px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const ButtonContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 10px;
`;

export const ButtonWithoutTask = styled.button`
	width: 250px;
	height: 80px;
	background-color: ${(props) => props.theme.highlight};
	font-size: 22px;
	border-radius: 8px;
	border: none;
	cursor: pointer;
`;
export const ButtonWithTask = styled.button`
	width: 250px;
	height: 80px;
	background-color: ${(props) => props.theme.tertiary};
	font-size: 22px;
	border-radius: 8px;
	border: none;
	cursor: pointer;
`;
