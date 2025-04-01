import Image from "next/image";
import meNewPic from '../../../public/images/me.gif';
import styles from "./HomePageTopStyles.module.css";

export const HomePageTop = () => {
  return (
    <div className={styles['about-me-wrapper']}>
      <div className={styles['about-me-text-container']}>
        <h1 className={styles['title-text']}>{'Hey! I\'m Colin Riley.'}</h1>
        <p className={styles['about-me-text']}>{'I\'m a Computer Science graduate from Northeastern University from San Francisco, CA currently living in Boston, MA.'}</p>
        <p className={styles['about-me-text']}>{'I currently work as a Senior Frontend Engineer at ASICS Digital.'}</p>
        <p className={styles['about-me-text']}>{'Check out the projects below to see what I\'ve been working! Head to About to learn more about me.'}</p>
      </div>
      <div className={styles['picture-container']}>
      <Image className={styles['me-picture']} src={meNewPic} alt="Picture of Colin Riley" />
      </div>
    </div>
  );
};
