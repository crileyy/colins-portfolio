import styles from "./HomePageTopStyles.module.css";
import { MePicture } from "../MePicture";
import Link from "next/link";

export const HomePageTop = () => {

  // fade in the text
  return (
    <div className={styles['about-me-wrapper']}>
      <div className={styles['about-me-text-container']}>
        <h1 className={styles['title-text']}>{'Hey! I\'m Colin Riley.'}</h1>
        <p className={styles['about-me-text']}>{'I\'m a Computer Science graduate from Northeastern University, living in Boston, MA and originally from San Francisco, CA.'}</p>
        <p className={styles['about-me-text']}>{'I have over 5 years of experiecnce as a frontend engineer and I currently work as a Senior Frontend Engineer at ASICS Digital.'}</p>
        <p className={styles['about-me-text']}>
          {'Click on the projects below to see what I\'ve been working! Head to About to learn more about me.'}
          <span>
            {'Click on the projects below to see what I\'ve been working! Head to '}
          </span>
          <Link href="/about">About</Link>
          <span>
            {' to learn more about me.'}
          </span>
        </p>
      </div>
      <MePicture />
    </div>
  );
};
