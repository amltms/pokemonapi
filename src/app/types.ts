export interface Pokemon {
	id: number;
	name: string;
	url: string;
	types: Type[];
	sprites: { other: { 'official-artwork': { front_default: string } } };
	abilities: Ability[];
	stats: Stat[];
}

export interface Type {
	type: { name: string };
}

export interface Ability {
	ability: { name: string };
}

export interface Stat {
	stat: { name: string };
	base_stat: number;
}
