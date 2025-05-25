import Link from 'next/link';
import styles from './HeaderStyles.module.css';

export const Header = () => {
  // fade in header
  // use a hamburger menu to include: home, about, projects
  return (
    <header className={styles['header-wrapper']}>
      <Link href="/">Colin Riley</Link>
      <Link href="/about">About</Link>
    </header>
  );
};
