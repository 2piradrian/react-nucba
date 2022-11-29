import styled from "styled-components";
import { StyledLink } from "../Global/Global";

export const Navbar = styled.nav`
	height: 52px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 0px 0px 8px 8px;
	background-color: ${(props) => props.theme.highlight};
`;

export const NavContainer = styled.nav`
	height: 100%;
	width: 90%;
	max-width: 1300px;
	gap: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const NavDivisor = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const NavStyledLink = styled(StyledLink)`
	font-weight: 500;
	&:hover {
		border-bottom: 1px solid ${(props) => props.theme.stroke};
	}
`;
