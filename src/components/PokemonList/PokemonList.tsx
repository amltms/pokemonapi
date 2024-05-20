'use client';

import styled from 'styled-components';

import PokemonCard from '@/components/PokemonCard';
import Loading from '@/components/Loading';
import useFetchPokemons from '@/hooks/useFetchPokemons';

const Container = styled.div`
	display: flex;
	gap: 1rem;
	justify-content: center;
	flex-wrap: wrap;
`;

const Title = styled.h1`
	text-align: center;
	margin: 2rem;
	font-size: 4rem;
`;

const POKEMON_LIMIT = 151;
const POKEMON_API_URL = `https://pokeapi.co/api/v2/pokemon?limit=${POKEMON_LIMIT}`;

const Pokemons = () => {
	const { pokemons, isLoading, error } = useFetchPokemons(POKEMON_API_URL);

	if (isLoading) return <Loading />;
	if (error) return <p>Error: {error}</p>;
	if (pokemons.length === 0) return <p>No data available</p>;

	return (
		<>
			<Title>Pokédex (First {POKEMON_LIMIT})</Title>
			<Container>
				{pokemons.map((pokemon, index) => (
					<PokemonCard key={index} pokemon={pokemon} />
				))}
			</Container>
		</>
	);
};

export default Pokemons;
