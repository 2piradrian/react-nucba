import styled from "styled-components";
import { HiTrash } from "react-icons/hi";

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Input = styled.input`
	height: 30px;
	width: 240px;
	outline: none;
	padding-left: 10px;
	border: none;
	border-radius: 10px 0px 0px 10px;
	border: 1px solid ${(props) => props.theme.highlight};
	border-right: 0px;
	color: ${(props) => props.theme.stroke};
`;

export const SendButton = styled.button`
	height: 30px;
	width: 30px;
	margin: 0px -15px;
	border: none;
	color: ${(props) => props.theme.background};
	background-color: ${(props) => props.theme.highlight};
	border-radius: 50%;
	cursor: pointer;
`;

export const TrashButton = styled.button`
	height: 30px;
	width: 30px;
	margin: 0px 20px;
	border-radius: 50%;
	color: ${(props) => props.theme.background};
	background-color: ${(props) => props.theme.highlight};
	border: none;
`;

export const Trash = styled(HiTrash)`
	margin: 5px;
	font-size: 20px;
	cursor: pointer;
`;

export const InputContainer = styled.div`
	padding: 20px;
	display: flex;
`;

export const Error = styled.small`
	color: red;
	text-align: center;
	margin-bottom: 10px;
`;
