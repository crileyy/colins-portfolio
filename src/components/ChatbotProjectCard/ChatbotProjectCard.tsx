import Image, { StaticImageData } from "next/image";
import styles from './ChatbotProjectCard.module.css';
import Link from "next/link";
import ChatHoverImg from '../../../public/images/ai-chatbot-hover.png';

interface ChatbotProjectCardProps {
  link: string
  imgSrc: StaticImageData
  imgAlt: string
  title: string
  details: string
};

export const ChatbotProjectCard = ({ link, imgSrc, imgAlt, title, details }: ChatbotProjectCardProps) => {
  return (
    <div className={styles['project-card-wrapper']}>
      <Link href={link}>
        <Image src={imgSrc} alt={imgAlt} className={styles.image} />
      </Link>
      <Image src={ChatHoverImg} alt="Picture of chatbot window" className={styles['chatbot-hover-image']} />
      <div className={styles['text-wrapper']}>
        <Link className={styles['title-link']} href={link}>{title}</Link>
        <p className={styles['details']}>{details}</p>
      </div>
    </div>
  );
};
