import { Route, Routes, Navigate } from "react-router-dom";
import ToDo from "./Routes/ToDo";
import Home from "./Routes/Home";
import Pokemon from "./Routes/Pokemon";
import Nav from "./Components/Nav/Nav";
import { TaskContext } from "./Context/TaskContext";
import { QueryClientProvider, QueryClient } from "react-query";

function App() {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: Infinity,
				cacheTime: 5000,
			},
		},
	});

	return (
		<QueryClientProvider client={queryClient}>
			<TaskContext>
				<Nav />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="home" element={<Navigate to="/" />} />
					<Route path="todo" element={<ToDo />} />
					<Route path="pokemon" element={<Pokemon />} />
				</Routes>
			</TaskContext>
		</QueryClientProvider>
	);
}

export default App;
