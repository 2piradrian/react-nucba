import React, { useContext, useEffect } from "react";
import { PokemonContext } from "../../Context/PokeContext";
import {
	CardContainer,
	DataContainer,
	HeightIcon,
	ImgContainer,
	PokeImg,
	PokemonContainer,
	PokeTitle,
	Stats,
	StatsContainer,
	StatsP,
	WeightIcon,
} from "./PokeCardStyles";

function PokeCard() {
	const { pokemon } = useContext(PokemonContext);

	useEffect(() => {
		console.log(pokemon.data);
	}, [pokemon]);

	return (
		<PokemonContainer>
			{pokemon.data !== undefined && (
				<CardContainer>
					<DataContainer>
						<PokeTitle>{pokemon?.data?.name}</PokeTitle>
						<StatsContainer>
							<Stats>
								<WeightIcon />
								<StatsP>{pokemon?.data?.weight + "Kg."}</StatsP>
							</Stats>
							<Stats>
								<HeightIcon />
								<StatsP>
									{pokemon?.data?.height + "mts."}
								</StatsP>
							</Stats>
						</StatsContainer>
					</DataContainer>
					<ImgContainer>
						<PokeImg src={pokemon?.data?.sprites?.front_default} />
					</ImgContainer>
				</CardContainer>
			)}
		</PokemonContainer>
	);
}

export default PokeCard;
