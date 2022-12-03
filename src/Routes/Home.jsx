import React, { useContext } from "react";
import { StyledLink } from "../Components/Global/Global";
import {
	ButtonContainer,
	ButtonWithoutTask,
	ButtonWithTask,
	HomeContainer,
} from "../Components/Home/HomeStyles";
import { Context } from "../Context/TaskContext";

function Home() {
	const { tasks } = useContext(Context);

	return (
		<HomeContainer>
			<ButtonContainer>
				{tasks.length > 0 && (
					<>
						<StyledLink to="/todo">
							<ButtonWithTask>To Do</ButtonWithTask>
						</StyledLink>
						<StyledLink to="/pokemon">
							<ButtonWithTask>Pokemon</ButtonWithTask>
						</StyledLink>
					</>
				)}
				{tasks.length === 0 && (
					<>
						<StyledLink to="/todo">
							<ButtonWithoutTask>To Do</ButtonWithoutTask>
						</StyledLink>
						<StyledLink to="/pokemon">
							<ButtonWithoutTask>Pokemon</ButtonWithoutTask>
						</StyledLink>
					</>
				)}
			</ButtonContainer>
		</HomeContainer>
	);
}

export default Home;
