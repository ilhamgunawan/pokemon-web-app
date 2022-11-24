import styles from '../../styles/Detail.module.css';
import Head from 'next/head';
import { useQuery, gql } from '@apollo/client';
import { toSentenceCase } from '../../utils/utils';
import DetailPokemon from '../../components/detail-pokemon';
import DetailLoading from '../../components/detail-loading';
import BackButton from '../../components/back-button';
import type { GetServerSideProps } from 'next';
import type { GetPokemon } from '../../types/detail';

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      name: context.query.name,
    }
  }
}

type Props = {
  name: string,
}

const GET_POKEMON = gql`
  query GetPokemon($name: String!) {
    species: pokemon_v2_pokemonspecies(where: {name: {_eq: $name}}, limit: 1) {
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

export default function Detail(props: Props) {
  const pageTitle = `Pokemon - ${toSentenceCase(props.name)}`;
  const { loading, data } = useQuery<GetPokemon>(GET_POKEMON, { variables: { name: props.name } });
  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <div className={styles.container}>
        <BackButton />
      </div>
      {loading
        ? <DetailLoading />
        : <>
            {data
              ? <>{data.species[0] ? <DetailPokemon data={data.species[0]} /> : null}</>
              : null
            }
          </>
      }
    </div>
  )
}
