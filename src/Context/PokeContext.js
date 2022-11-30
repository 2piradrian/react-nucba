import { createContext, useState } from "react";

export const PokemonContext = createContext();

export const PokeContext = ({ children }) => {
	const [pokemon, setPokemon] = useState("Charmander");
	return (
		<PokemonContext.Provider value={{ pokemon, setPokemon }}>
			{children}
		</PokemonContext.Provider>
	);
};
