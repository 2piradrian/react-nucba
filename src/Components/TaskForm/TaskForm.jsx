import React, { useContext, useReducer, useRef, useState } from "react";
import { Context } from "../../Context/TaskContext";
import { FiArrowRight } from "react-icons/fi";
import { saveLocalStorage } from "../../utils/localStorage";
import {
	Error,
	Form,
	Input,
	InputContainer,
	SendButton,
	Trash,
	TrashButton,
} from "../FormStyles";

function TaskForm() {
	const keys = new Date();
	const taskRef = useRef();
	const { tasks, setTasks } = useContext(Context);

	const reducer = (state, action) => {
		switch (action.type) {
			case "addTask":
				state = [...tasks, { id: keys.getTime(), title: action.title }];
				saveLocalStorage(state);
				setTasks(state);
				return state;
			default:
				return state;
		}
	};

	const [task, dispatch] = useReducer(reducer, tasks); //eslint-disable-line

	const [valid, setValid] = useState(true);
	const [error, setError] = useState("");

	const checkTask = () => {
		let isValid;
		const task = taskRef.current.value;
		if (task.length === 0) {
			isValid = false;
			setError("No podemos agregar tareas vacias.");
		} else if (tasks.some((tasks) => tasks.title === task)) {
			isValid = false;
			setError("Esa tarea ya existe.");
		} else {
			isValid = true;
		}
		setValid(isValid);
		setTimeout(() => {
			setValid(true);
		}, 2000);
		return isValid;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!checkTask()) return;

		dispatch({
			type: "addTask",
			title: taskRef.current.value,
		});

		taskRef.current.value = "";
	};

	const removeAll = () => {
		if (!window.confirm("¿Seguro que desea eliminar todas las tareas?"))
			return;
		saveLocalStorage([]);
		setTasks([]);
	};

	return (
		<Form onSubmit={handleSubmit}>
			<InputContainer>
				<Input
					type="text"
					placeholder="Hacer la tarea..."
					name="task"
					ref={taskRef}
				/>
				<SendButton type="submit">
					<FiArrowRight />
				</SendButton>
				<TrashButton type="button" onClick={removeAll}>
					<Trash />
				</TrashButton>
			</InputContainer>
			{!valid && <Error>{error}</Error>}
		</Form>
	);
}

export default TaskForm;
