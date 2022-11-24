import commonStyles from '../styles/Common.module.css';
import { useRouter } from 'next/router';

export default function BackButton() {
  const router = useRouter();
  return <button className={commonStyles['back-button']} onClick={() => router.back()}>Back</button>;
};
