import { React, useContext } from "react";
import { Context } from "../../Context/TaskContext";
import { saveLocalStorage } from "../../utils/localStorage";
import { SubContainer, TaskContainer, TaskText } from "./TaskStyles";
import { Trash } from "../FormStyles";

function Task(props) {
	const { tasks, setTasks } = useContext(Context);

	const handleRemove = () => {
		const filteredTask = tasks.filter((task) => props.id !== task.id);
		setTasks(filteredTask);
		saveLocalStorage(filteredTask);
	};

	return (
		<TaskContainer>
			<SubContainer>
				<Trash onClick={handleRemove} />
				<TaskText>{props.title}</TaskText>
			</SubContainer>
		</TaskContainer>
	);
}

export default Task;
