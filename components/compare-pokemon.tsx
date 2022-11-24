import styles from '../styles/Compare.module.css';
import { useQuery, gql } from '@apollo/client';
import DetailPokemon from '../components/detail-pokemon';
import DetailLoading from '../components/detail-loading';
import type { GetPokemon } from '../types/detail';

const GET_POKEMON = gql`
  query GetPokemon($name: [String!]) {
    species: pokemon_v2_pokemonspecies(where: {name: {_in: $name}}) {
      id
      name
      has_gender_differences
      gender_rate
      description: pokemon_v2_pokemonspeciesflavortexts(limit: 1) {
        flavor_text
      }
      pokemon: pokemon_v2_pokemons {
        id
        name
        height
        weight
        types: pokemon_v2_pokemontypes {
          type: pokemon_v2_type {
            name
            id
          }
        }
        abilities: pokemon_v2_pokemonabilities {
          ability: pokemon_v2_ability {
            name
          }
        }
        stats: pokemon_v2_pokemonstats {
          id
          stat: pokemon_v2_stat {
            name
          }
          base_stat
        }
      }
      evolution: pokemon_v2_evolutionchain {
        species: pokemon_v2_pokemonspecies {
          name
          id
          evolves_from_species_id
        }
      }
    }
  }
`;

type Props = {
  pokemons: Array<string>,
}

export default function ComparePokemon(props: Props) {
  const { loading, data } = useQuery<GetPokemon>(GET_POKEMON, { variables: { name: props.pokemons } });
  return (
    <div>
      {loading
        ? <DetailLoading />
        : <>
            {data
              ? <div className={styles['pokemons-container']}>
                  <DetailPokemon data={data.species[0]} />
                  <DetailPokemon data={data.species[1]} />
                </div>
              : null
            }
          </>
      }
    </div>
  )
}
