import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import { Pokemon } from '@/app/types';

interface PokemonCardProps {
	pokemon: Pokemon;
}

const CardContainer = styled.div`
	background-color: #2d2d2d;
	border-radius: 8px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	padding: 2rem;
	text-align: center;
	transition: transform 0.2s ease-in-out;
	cursor: pointer;

	&:hover {
		transform: scale(1.1);
	}
`;

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
	const { url, name } = pokemon;
	const pokemonId = url.split('/')[6]; // Extract ID from URL
	const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;

	return (
		<CardContainer as={Link} href={`/pokemon/${pokemonId}`}>
			<Image src={imageUrl} alt={name} width={128} height={128} layout="fixed" />
			<h3>{name}</h3>
		</CardContainer>
	);
};

export default PokemonCard;
