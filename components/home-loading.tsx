import styles from '../styles/Home.module.css';
import commonStyles from '../styles/Common.module.css';
import LoadingSpinner from "./loading-spinner";

export default function HomeLoadingSpinner() {
  return (
    <main className={styles['card-container']}>
      <div className={commonStyles['fetchmore-container']}>
        <LoadingSpinner />
      </div>
    </main>
  );
}
