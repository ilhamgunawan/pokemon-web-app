import styles from '../styles/Common.module.css';
import { toSentenceCase } from '../utils/utils';

type Props = {
  name: string
}

export default function PokemonTypeTag(props: Props) {
  return (
    <div className={[styles['pokemon-type-tag'], styles[`bg-${props.name}`]].join(' ')}>
      <p className={styles['pokemon-type-tag-name']}>{toSentenceCase(props.name)}</p>
    </div>
  );
}