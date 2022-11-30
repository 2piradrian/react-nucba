import React, { useContext, useEffect } from "react";
import { PokemonContext } from "../../Context/PokeContext";

function PokeCard() {
	const { pokemon } = useContext(PokemonContext);

	useEffect(() => {
		console.log(pokemon);
	}, [pokemon]);

	return <div>{pokemon?.data?.name}</div>;
}

export default PokeCard;
