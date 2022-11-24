import { ReactNode } from 'react';
import styles from '../styles/Common.module.css';

export default function Container(props: { children: ReactNode }) {
  return (
    <div className={styles.container}>{props.children}</div>
  );
}
