'use client';

import React from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import Loading from '@/components/Loading';
import useFetchPokemons from '@/hooks/useFetchPokemons';
import { AbilityList, AbilityListItem, BackBtn, Container, ImgContainer, PokemonImage, StatBar, StatRow, StatsList, Title, TypeListItem, TypesList } from './PokemonDetails.styled';
import { Ability, Stat, Type } from '@/app/types';

interface PokemonDetailProps {
	params: { slug: string };
}

const PokemonDetails = ({ params }: PokemonDetailProps) => {
	const POKEMON_API_URL = `https://pokeapi.co/api/v2/pokemon/${params.slug}/`;
	const { pokemon, isLoading, error } = useFetchPokemons(POKEMON_API_URL, true);

	if (isLoading) return <Loading />;
	if (error) return <p>Error: {error}</p>;
	if (!pokemon) return <p>No data available</p>;

	const { id, name, types, sprites, abilities, stats } = pokemon;

	return (
		<Container>
			<BackBtn href="/">
				<IoMdArrowBack />
			</BackBtn>
			<Title>
				{name} (#{id})
			</Title>
			<ImgContainer>
				<PokemonImage src={sprites?.other['official-artwork'].front_default} alt={name} width={400} height={400} layout="fixed" />
			</ImgContainer>
			<Types types={types} />
			<Abilities abilities={abilities} />
			<Stats stats={stats} />
		</Container>
	);
};

const Types = ({ types }: { types: Type[] }) => (
	<TypesList>
		{types.map(({ type }) => (
			<TypeListItem key={type.name} className={type.name}>
				{type.name}
			</TypeListItem>
		))}
	</TypesList>
);

const Abilities = ({ abilities }: { abilities: Ability[] }) => (
	<>
		<h2>Abilities</h2>
		<AbilityList>
			{abilities.map(({ ability }) => (
				<AbilityListItem key={ability.name}>{ability.name}</AbilityListItem>
			))}
		</AbilityList>
	</>
);

const Stats = ({ stats }: { stats: Stat[] }) => (
	<>
		<h2>Stats</h2>
		<StatsList>
			{stats.map(({ stat, base_stat }) => (
				<StatRow key={stat.name}>
					<p>{stat.name}</p>
					<div>
						<label htmlFor={stat.name}>{base_stat}</label>
						<StatBar id={stat.name} value={base_stat} max="255">
							{base_stat}%
						</StatBar>
					</div>
				</StatRow>
			))}
		</StatsList>
	</>
);

export default PokemonDetails;
