import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
import config from '../config.json';
import { toSentenceCase } from '../utils/utils';
import PokemonTypeTag from './pokemon-type-tag';

import type { Pokemon } from '../types/home';

type Props = {
  pokemon: Pokemon
}

export default function HomePokemonCard(props: Props) {
  const { pokemon } = props;
  const href = `/detail/${pokemon.name}`;
  const imageSrc = `${config.imageUrl}/${pokemon.id}.png`;
  const title = toSentenceCase(pokemon.name);
  const pokemonTypes = pokemon.types;
  const primaryTypeName = pokemon.types[0].type.name;

  return (
    <Link href={href} className={[styles.card, styles[`card-${primaryTypeName}`]].join(' ')}>
      <div className={styles['card-content']}>
        <div className={styles['thumbnail-container']}>
          <Image 
            src={imageSrc}
            alt={title}
            loading='lazy'
            className={styles.thumbnail}
            width={100}
            height={100}
          />
        </div>
        <div className={styles['card-detail']} >
          <p className={styles['card-detail-title']}>{title}</p>
          <div>
            {pokemonTypes.map((pokemonType, index) => <PokemonTypeTag key={index} name={pokemonType.type.name} />)}
          </div>
        </div>
      </div>
    </Link>
  );
}
