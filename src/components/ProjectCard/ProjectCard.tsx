import Image, { StaticImageData } from "next/image";
import styles from './ProjectCard.module.css';
import Link from "next/link";

interface ProjectCardProps {
  link: string
  imgSrc: StaticImageData
  imgAlt: string
  title: string
  details: string
};

export const ProjectCard = ({ link, imgSrc, imgAlt, title, details }: ProjectCardProps) => {
  return (
    <div className={styles['project-card-wrapper']}>
      <Link href={link} style={{ width: '100%' }}>
        <Image src={imgSrc} alt={imgAlt} className={styles.image} />
      </Link>
      <div className={styles['text-wrapper']}>
        <Link className={styles['title-link']} href={link}>{title}</Link>
        <p className={styles['details']}>{details}</p>
      </div>
    </div>
  );
};
