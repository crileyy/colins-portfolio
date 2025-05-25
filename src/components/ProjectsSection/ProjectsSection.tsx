import { ProjectCard } from '../ProjectCard';
import styles from './ProjectsSection.module.css';
import plpImage from '../../../public/images/plp/plp-main.png';
import aiChatbotImage from '../../../public/images/chatbot/ai-chatbot.png';
import codeChatbotImage from '../../../public/images/code-chatbot/code-chatbot.png';

export const ProjetsSection = () => {
  return (
    <div className={styles['projects-container']}>
      <ProjectCard
        link="/asics-plp"
        imgSrc={plpImage}
        imgAlt="PLP project image"
        title="Next.js Product Listing Page"
        details="A composable version of ASICS' e-commerce product listing page."
      />
      <ProjectCard
        link="/ai-chatbot"
        imgSrc={aiChatbotImage}
        imgAlt="AI Chatbot project image"
        title="AI Shoe Recommender Chatbot"
        details="A generative AI chatbot for recommending shoes and chatting with customers."
      />
      <ProjectCard
        link="/code-chatbot"
        imgSrc={codeChatbotImage}
        imgAlt="Code Chatbot project image"
        title="Code Generating Chatbot"
        details="A generative AI chatbot for producing code and answering coding related questions, with knowledge of ASICS' code base."
      />
    </div>
  );
};