import Link from 'next/link';
import styles from './HeaderStyles.module.css';

export const Header = () => {
  return (
    <header className={styles['header-wrapper']}>
      <Link href="/">Colin Riley</Link>
      <Link href="/">About</Link>
    </header>
  );
};
