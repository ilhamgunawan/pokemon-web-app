import styles from '../styles/Detail.module.css';
import LoadingSpinner from './loading-spinner';

export default function DetailLoading() {
  return (
    <main className={styles['loading-container']}>
      <LoadingSpinner />
    </main>
  );
};
