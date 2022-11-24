import styles from '../styles/Detail.module.css';
import { toSentenceCase } from '../utils/utils';
import type { Stat } from '../types/detail';

type Props = {
  stats: Array<Stat>,
};

export default function DetailPokemonStats(props: Props) {
  const { stats } = props;
  return (
    <div className={styles['stat-container']}>
      <h2 className={styles['stat-title']}>Stats</h2>
      {stats.map((stat, index) => 
        <div className={styles['stat-list']} key={index}>
          <div className={styles['stat-item']}>
            <div className={styles['stat-header']}>
              <p className={styles['stat-name']}>{toSentenceCase(stat.stat.name)}</p>
              <p className={styles['stat-name']}>{stat.base_stat}</p>
            </div>
            <div className={styles['stat-bar-container']}>
              <div className={styles['stat-bar']} style={{width: `${stat.base_stat}%`}} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
