import { ProjectCard } from '../ProjectCard';
import styles from './ProjectsSection.module.css';
import plpImage from '../../../public/images/plp-main.png';
import aiChatbotImage from '../../../public/images/ai-chatbot.png';

export const ProjetsSection = () => {
  return (
    <div className={styles['projects-container']}>
      <ProjectCard
        link="/"
        imgSrc={plpImage}
        imgAlt="PLP project image"
        title="Next.js Product Listing Page"
        details="A composable version of ASICS' e-commerce product listing page."
      />
      <ProjectCard
        link="/"
        imgSrc={aiChatbotImage}
        imgAlt="AI Chatbot project image"
        title="AI Shoe Recommender Chatbot"
        details="A generative AI chatbot for recommending shoes and chatting with customers."
      />
    </div>
  );
};