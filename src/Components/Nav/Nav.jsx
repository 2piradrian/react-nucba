import React from "react";
import { Navbar, NavContainer, NavDivisor, NavStyledLink } from "./NavStyles";

function Nav() {
	return (
		<Navbar>
			<NavDivisor>
				<NavContainer>
					<NavStyledLink to="/home">Home</NavStyledLink>
					<NavStyledLink to="/todo">To Do</NavStyledLink>
					<NavStyledLink to="/pokemon">Pokemon</NavStyledLink>
				</NavContainer>
			</NavDivisor>
		</Navbar>
	);
}

export default Nav;
