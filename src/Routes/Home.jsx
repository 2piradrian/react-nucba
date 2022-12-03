import React, { useContext } from "react";
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
						<ButtonWithTask>To Do</ButtonWithTask>
						<ButtonWithTask>Pokemon</ButtonWithTask>
					</>
				)}
				{tasks.length === 0 && (
					<>
						<ButtonWithoutTask>To Do</ButtonWithoutTask>
						<ButtonWithoutTask>Pokemon</ButtonWithoutTask>
					</>
				)}
			</ButtonContainer>
		</HomeContainer>
	);
}

export default Home;
