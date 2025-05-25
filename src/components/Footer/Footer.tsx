import Link from 'next/link';
import styles from './FooterStyles.module.css';

export const Footer = () => {
  return (
    <footer className={styles['footer-wrapper']}>
      <Link href="https://github.com/crileyy" target="_blank">GitHub</Link>
      <Link href="https://www.linkedin.com/in/colin-riley/" target="_blank">LinkedIn</Link>
      <Link href="mailto:criley0007@gmail.com">Email</Link>
    </footer>
  );
};
