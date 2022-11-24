export interface EvolutionSpecies {
  id: number;
  name: string;
  evolves_from_species_id: number | null;
};

export interface Description {
  flavor_text: string;
};

export interface Type {
  type: {
    id: number;
    name: string;
  };
};

export interface Ability {
  ability: {
    name: string;
  };
};

export interface Stat {
  id: number;
  base_stat: number;
  stat: { name: string; };
}

export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: Array<Type>;
  abilities: Array<Ability>;
  stats: Array<Stat>;
};

export interface PokemonSpecies {
  id: number;
  name: string;
  gender_rate: number;
  description: Array<Description>;
  has_gender_differences: boolean;
  pokemon: Array<Pokemon>;
  evolution: { species: Array<EvolutionSpecies> };
};

export interface GetPokemon {
  species: Array<PokemonSpecies>;
};
