import React, { useContext, useRef, useState } from "react";
import { Error, Form, Input, InputContainer, SendButton } from "../FormStyles";
import { FiArrowRight } from "react-icons/fi";
import { PokemonContext } from "../../Context/PokeContext";
import { useQuery } from "react-query";
import axios from "axios";

function PokeForm() {
	const pokeRef = useRef("charmander");
	const { setPokemon } = useContext(PokemonContext);
	const [error, setError] = useState(false);
	const [textError, setTextError] = useState("Pokemon inválido");

	const fetchPokemon = (pokemon = "Charmander") => {
		if (!pokemon) {
			pokemon = "Charmander";
		}
		pokemon = pokemon.toLowerCase();
		return axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (pokeRef.current.value === "0") {
			setError(true);
			setTextError("Pokemon inválido");
			return;
		}
		if (!pokeRef.current.value) {
			setError(true);
			setTextError("El campo no puede quedar vacío");
			return;
		}
		setError(false);
		refetch();
		pokeRef.current.value = "";
	};

	const onSuccess = (data) => {
		if (!data.data.name) {
			setError(true);
			setTextError("Pokemon inválido");
			setTimeout(() => {
				setError(false);
			}, 2000);
			return;
		}
		setPokemon(data);
	};
	const onError = () => {
		setError(true);
		setTextError("Pokemon inválido");
		setTimeout(() => {
			setError(false);
		}, 2000);
	};

	const { data, refetch } = useQuery(
		"pokemon",
		() => fetchPokemon(pokeRef.current.value),
		{
			onSuccess,
			onError,
		}
	);

	return (
		<Form onSubmit={handleSubmit}>
			<InputContainer>
				<Input
					type="text"
					placeholder="Charmander"
					name="pokemon"
					ref={pokeRef}
				/>
				<SendButton type="submit">
					<FiArrowRight />
				</SendButton>
			</InputContainer>
			{error && <Error>{textError}</Error>}
		</Form>
	);
}

export default PokeForm;
