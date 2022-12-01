import styled from "styled-components";
import { FaWeightHanging } from "react-icons/fa";
import { TbLineHeight } from "react-icons/tb";

export const PokemonContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const CardContainer = styled.div`
	width: 400px;
	border-radius: 8px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.theme.highlight};
`;

export const DataContainer = styled.div`
	width: 50%;
	height: 100%;
`;

export const ImgContainer = styled.div`
	width: 50%;
	height: 100%;
`;

export const PokeImg = styled.img`
	width: 200px;
	height: auto;
`;

export const PokeTitle = styled.h3`
	font-size: 28px;
	font-weight: 600;
	text-align: center;
`;

export const StatsContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
`;

export const Stats = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
`;

export const StatsP = styled.div`
	font-size: 20px;
`;

export const WeightIcon = styled(FaWeightHanging)`
	font-size: 24px;
`;

export const HeightIcon = styled(TbLineHeight)`
	font-size: 26px;
`;
