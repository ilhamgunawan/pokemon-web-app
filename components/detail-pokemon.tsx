import styles from '../styles/Detail.module.css';
import DetailPokemonSummary from './detail-pokemon-summary';
import DetailPokemonStats from './detail-pokemon-stats';
import type { PokemonSpecies } from '../types/detail';

type Props = {
  data: PokemonSpecies,
};

export default function DetailPokemon(props: Props) {
  const { data } = props;
  const { id, name, types, height, weight, abilities, stats } = data.pokemon[0];
  const description = data.description[0].flavor_text;
  return (
    <main className={styles.container}>
      <DetailPokemonSummary 
        id={id}
        name={name}
        description={description}
        types={types}
        height={height}
        weight={weight}
        abilities={abilities}
      />
      <DetailPokemonStats stats={stats} />
    </main>
  );
};
