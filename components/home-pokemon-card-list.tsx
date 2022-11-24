import styles from '../styles/Home.module.css';
import commonStyles from '../styles/Common.module.css';
import HomePokemonCard from './home-pokemon-card';
import LoadingSpinner from './loading-spinner';
import { debounce } from '../utils/utils';
import type { GetPokemons } from '../types/home';

type Props = {
  data: GetPokemons,
  isFetchingMorePokemons: boolean,
  shouldFetchMorePokemons: boolean,
  fetchMorePokemons: () => void,
}

export default function HomePokemonCardList(props: Props) {
  const { data, isFetchingMorePokemons, fetchMorePokemons } = props;

  const onScroll = (e: any) => {
    const clientHeight = e.target.clientHeight;
    const scrollTop = e.target.scrollTop;
    const scrollHeight = e.target.scrollHeight;
    const offset = 1;
    const hasReachBottom = (scrollTop + clientHeight + offset) >= scrollHeight;
    if (hasReachBottom) {
      fetchMorePokemons();
    }
  };

  return (
    <main className={styles['card-container']} onScroll={debounce(onScroll, 500)}>
      {data.pokemons.map((pokemon, index) => 
        <HomePokemonCard key={pokemon.name + `${index}`} pokemon={pokemon} /> 
        )}
      {isFetchingMorePokemons
        ? <div className={commonStyles['fetchmore-container']}><LoadingSpinner /></div>
        : null
      }
    </main>
  );
}
