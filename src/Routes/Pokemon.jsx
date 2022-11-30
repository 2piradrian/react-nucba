import React from "react";
import PokeCard from "../Components/PokeCard/PokeCard";
import PokeForm from "../Components/PokeForm/PokeForm";
import { PokeContext } from "../Context/PokeContext";

function Pokemon() {
	return (
		<PokeContext>
			<PokeForm />
			<PokeCard />
		</PokeContext>
	);
}

export default Pokemon;
