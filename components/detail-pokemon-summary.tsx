import styles from '../styles/Detail.module.css';
import commonStyles from '../styles/Common.module.css';
import Image from 'next/image';
import config from '../config.json';
import { toSentenceCase } from '../utils/utils';
import PokemonTypeTag from './pokemon-type-tag';
import type { Type, Ability } from '../types/detail';

type Props = {
  id: number,
  name: string,
  types: Array<Type>,
  description: string,
  height: number,
  weight: number,
  abilities: Array<Ability>,
};

export default function DetailPokemonSummary(props: Props) {
  const { id, name, description, types, abilities } = props;
  const pokemonName = toSentenceCase(name);
  const imageSrc = `${config.imageUrl}/${id}.png`;
  return (
    <div className={styles['summary-container']}>
      <div className={styles['image-container']}>
        <Image 
          src={imageSrc}
          alt={pokemonName}
          loading='lazy'
          className={styles.image}
          width={100}
          height={100}
        />
      </div>
      <div className={styles['summary-description-container']}>
        <div>
          {types.map((pokemonType, index) => <PokemonTypeTag key={index} name={pokemonType.type.name} />)}
        </div>
        <p className={styles['summary-title']}>{pokemonName}</p>
        <p className={styles['summary-description']}>{description}</p>
        <div>
          <p className={styles['ability-title']}>Ability:</p>
          {abilities.map((ability, index) => 
            <div key={index} className={[commonStyles['pokemon-type-tag'], styles['ability-item']].join(' ')}>
              <p className={commonStyles['pokemon-type-tag-name']}>{toSentenceCase(ability.ability.name)}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
