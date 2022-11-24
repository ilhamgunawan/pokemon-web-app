import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';

type Props = {
  showModal: () => void,
};

export default function HomeHeader(props: Props) {
  const router = useRouter();
  return (
    <header className={styles.header}>
      <img className={styles['header-logo']} src='/pokemon.svg' alt='Pokemon' />
      <div className={styles['header-buttons']}>
        <button className={styles['header-button']} onClick={() => props.showModal()}>Advanced Search</button>
        <button className={styles['header-button']} onClick={() => router.push('/compare')}>Compare</button>
      </div>
    </header>
  );
}
