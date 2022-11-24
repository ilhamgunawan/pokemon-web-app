import styles from '../../styles/Compare.module.css';
import commonStyles from '../../styles/Common.module.css';
import Head from 'next/head';
import React from "react";
import { useQuery, gql } from '@apollo/client';
import LoadingSpinner from "../../components/loading-spinner";
import ComparePokemon from '../../components/compare-pokemon';
import BackButton from '../../components/back-button';

const GET_ALL_POKEMONS = gql`
  query GetAllPokemons {
    species: pokemon_v2_pokemonspecies(order_by: {id: asc}) {
      id
      name
    }
  }
`;

export default function Compare() {
  const [pokemonsToCompare, setPokemonsToCompare] = React.useState<Array<string>>([]);
  const [triggerFetchPokemon, setTriggerFetchPokemon] = React.useState(false);
  const { loading, data } = useQuery(GET_ALL_POKEMONS);

  const onSelectOption = (name: string) => {
    if (pokemonsToCompare.length < 2 && name !== '') {
      setPokemonsToCompare((currentPokemons) => {
        const isExist = Boolean(currentPokemons.find(current => current === name));
        return isExist
          ? currentPokemons.filter(current => current !== name)
          : [...currentPokemons, name];
      });
    } 
  };

  const onClickSelectedPokemon = (name: string) => {
    if (!triggerFetchPokemon) {
      setPokemonsToCompare((currentPokemons) => {
        const isExist = Boolean(currentPokemons.find(current => current === name));
        return isExist
          ? currentPokemons.filter(current => current !== name)
          : currentPokemons;
      });
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon - Compare</title>
      </Head>
      {loading
        ? <LoadingSpinner />
        : 
          <div className={styles['select-form']}>
            <p>Select Pokemon</p>
            <select 
              className={styles.select} 
              onChange={(e) => onSelectOption(e.target.value)}
              disabled={pokemonsToCompare.length === 2}
            >
              <option value=''>Select Pokemon</option>
              {data.species.map((pokemon: any, index: number) => 
                <option key={index} value={pokemon.name}>{pokemon.name}</option>
              )}
            </select>
            <div style={{ marginTop: '10px' }}>
              {pokemonsToCompare.map((pokemon, index) => 
                <div 
                  key={index} 
                  className={[commonStyles['pokemon-type-tag'], styles['pokemon-compare-item']].join(' ')}
                  onClick={() => onClickSelectedPokemon(pokemon)}
                >
                  <p className={commonStyles['pokemon-type-tag-name']}>{pokemon}</p>
                </div>
              )}
            </div>
            <button 
              className={styles['compare-button']}
              disabled={pokemonsToCompare.length < 2 || triggerFetchPokemon}
              onClick={() => setTriggerFetchPokemon(true)}
            >
              Compare!
            </button>
            <button
              className={styles['compare-button']}
              // disabled={!triggerFetchPokemon}
              onClick={() => {
                setTriggerFetchPokemon(false);
                setPokemonsToCompare([]);
              }}
            >
              Reset
            </button>
            <BackButton />
          </div>
      }
      {triggerFetchPokemon ? <ComparePokemon pokemons={pokemonsToCompare} /> : null}
    </div>
  );
}
