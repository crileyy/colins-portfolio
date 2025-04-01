import Link from 'next/link';
import styles from './FooterStyles.module.css';

export const Footer = () => {
  return (
    <div className={styles['footer-wrapper']}>
      <Link href="/">GitHub</Link>
      <Link href="/">LinkedIn</Link>
      <Link href="/">Email</Link>
    </div>
  );
};
