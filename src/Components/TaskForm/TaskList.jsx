import { React, useContext } from "react";
import { Context } from "../../Context/TaskContext";
import { ListContainer } from "./TaskListStyles";
import Task from "./Task";

function TaskList() {
	const { tasks } = useContext(Context);

	return (
		<ListContainer>
			{tasks.map((task) => {
				return <Task title={task.title} id={task.id} key={task.id} />;
			})}
		</ListContainer>
	);
}

export default TaskList;
