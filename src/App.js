import { Route, Routes, Navigate } from "react-router-dom";
import ToDo from "./Routes/ToDo";
import Home from "./Routes/Home";
import Pokemon from "./Routes/Pokemon";
import Nav from "./Components/Nav/Nav";
import { TaskContext } from "./Context/TaskContext";

function App() {
	return (
		<TaskContext>
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="home" element={<Navigate to="/" />} />
				<Route path="todo" element={<ToDo />} />
				<Route path="pokemon" element={<Pokemon />} />
			</Routes>
		</TaskContext>
	);
}

export default App;
