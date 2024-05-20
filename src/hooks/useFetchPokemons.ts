import { useState, useEffect, useCallback } from 'react';
import { Pokemon } from '@/app/types';

interface State {
	pokemon: Pokemon | null;
	pokemons: Pokemon[];
	isLoading: boolean;
	error: string | null;
}

const initialState: State = {
	pokemon: null,
	pokemons: [],
	isLoading: true,
	error: null,
};

const useFetchPokemons = (url: string, isSinglePokemon: boolean = false) => {
	const [state, setState] = useState<State>(initialState);

	const fetchPokemons = useCallback(async () => {
		setState((prevState) => ({ ...prevState, isLoading: true, error: null }));

		try {
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error(`Failed to fetch Pokémon data: ${response.statusText}`);
			}
			const data = await response.json();

			setState({
				pokemon: isSinglePokemon ? data : null,
				pokemons: isSinglePokemon ? [] : data.results,
				isLoading: false,
				error: null,
			});
		} catch (error) {
			setState({
				pokemon: null,
				pokemons: [],
				isLoading: false,
				error: (error as Error).message,
			});
		}
	}, [url, isSinglePokemon]);

	useEffect(() => {
		fetchPokemons();
	}, [fetchPokemons]);

	return state;
};

export default useFetchPokemons;
