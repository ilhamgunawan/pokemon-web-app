export interface Type {
  type: {
    id: number;
    name: string;
  }
};

export interface Pokemon {
  id: number;
  name: string;
  types: Array<Type>;
}

export interface GetPokemons {
  pokemons: Array<Pokemon>;
  aggregate: { aggregate: { count: number } };
}
