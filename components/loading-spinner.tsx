import styles from '../styles/Common.module.css';

export default function LoadingSpinner() {
  return (
    <img
      className={styles['loading-img']}
      src='/pokeball.svg' 
      alt='Pokeball' 
    />
  );
}