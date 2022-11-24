import Head from 'next/head';
import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Container from '../components/container';
import HomeHeader from '../components/home-header';
import HomePokemonCardList from '../components/home-pokemon-card-list';
import HomeLoadingSpinner from '../components/home-loading';
import HomeSearchModal from '../components/home-search-modal';
import type { GetPokemons } from '../types/home';
import type { GetServerSideProps } from 'next';

const GET_POKEMONS = gql`
  query GetPokemons($limit: Int!, $offset: Int!, ) {
    pokemons: pokemon_v2_pokemon(limit: $limit, offset: $offset, order_by: {id: asc}) {
      name
      id
      types: pokemon_v2_pokemontypes {
        type: pokemon_v2_type {
          id
          name
          generation: pokemon_v2_generation {
            name
            id
          }
        }
      }
    }
    aggregate: pokemon_v2_pokemon_aggregate {
      aggregate {
        count
      }
    }
  }
`;

type Props = {
  types: string | string[] | null,
}

export default function Home(props: Props) {
  const limit = 36;
  const [isfetchMore, setIsFetchMore] = React.useState(false);
  const { loading, data, fetchMore } = useQuery<GetPokemons>(GET_POKEMONS, { 
    variables: { 
      limit, 
      offset: 0,
    }
  });
  const totalAvailablePokemons = data?.aggregate.aggregate.count ?? 0;
  const totalFetchedPokemons = data?.pokemons.length ?? 0;

  const [isShowModal, setIsShowModal] = React.useState(false);

  const onLoadMore = async () => {
    if (totalFetchedPokemons < totalAvailablePokemons) {
      setIsFetchMore(true);
      await fetchMore({ variables: { limit, offset: totalFetchedPokemons } });
      setIsFetchMore(false);
    }
  };

  return (
    <Container>
      <Head>
        <title>Pokemon - Home</title>
      </Head>
      <HomeHeader showModal={() => setIsShowModal(true)} />
      {loading
        ? <HomeLoadingSpinner />
        : <>
            {data
              ? <HomePokemonCardList 
                  data={data}
                  fetchMorePokemons={onLoadMore}
                  isFetchingMorePokemons={isfetchMore}
                  shouldFetchMorePokemons={true}
                />
              : null
            }
          </>
      }
      {isShowModal 
        ? <HomeSearchModal hideModal={() => setIsShowModal(false)} types={props.types} />
        : null
      }
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      types: context.query.types ? context.query.types : null
    }
  }
}
