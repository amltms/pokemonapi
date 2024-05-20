import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	padding: 2rem;
`;

export const BackBtn = styled(Link)`
	margin: 2rem;
	font-size: 2rem;
	position: absolute;
	top: 0;
	left: 0;
	:hover {
		cursor: pointer;
		color: #82ffa3;
	}
`;

export const Title = styled.h1`
	margin: 2rem;
	text-transform: capitalize;
	font-size: 4rem;
	width: fit-content;
`;

export const ImgContainer = styled.div`
	position: relative;
	margin: 1rem;
	display: flex;
	justify-content: center;
	padding: 3rem;
	align-items: center;

	&::after {
		content: '';
		position: absolute;
		z-index: -1;
		inset: 0;
		background-image: url('/pokeball.svg');
		background-position: center;
		background-size: contain;
		opacity: 0.12;
		transform: rotate(10deg);
	}
`;

export const PokemonImage = styled(Image)`
	width: 400px;
	height: auto;
`;

export const TypesList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	list-style: none;
	padding: 0;
	margin: 0;
`;

export const TypeListItem = styled.li`
	margin: 0.5rem;
	padding: 0.5rem 1rem;
	border-width: 1px;
	border-style: solid;
	border-radius: 0.5rem;
	font-size: 1.2rem;
	text-transform: capitalize;
`;

export const AbilityList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	list-style: none;
	padding: 0;
	margin: 0;
`;

export const AbilityListItem = styled.li`
	margin: 0.5rem;
	padding: 0.5rem 1rem;
	border-width: 1px;
	border-style: solid;
	border-radius: 0.5rem;
	font-size: 1.2rem;
	text-transform: capitalize;
`;

export const StatsList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

export const StatRow = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	label {
		color: #7e7e7e;
	}

	p {
		text-transform: uppercase;
		margin-bottom: 1rem;
		color: #7e7e7e;
	}

	div {
		display: flex;
		align-items: center;
	}
`;

export const StatBar = styled.progress`
	border-radius: 20px;
	height: 2rem;
	width: 30rem;
`;
