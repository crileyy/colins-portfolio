import Image from 'next/image';
import aiChatbotMiro from '../../../public/images/chatbot/ai-chatbot-architecture.jpg';

export default function AiChatbot() {
  return (
    <>
      <div>
        <h1>AI Shoe Recommender Chatbot</h1>
        <h2>Project Description</h2>
        <p>ASICS wanted to see if customers would be interested in interacting with an AI product. They decided to do this with a shoe recommendation chatbot, as shoes are the main products on the e-commerce website. To start, an AWS engineer made a proof of concept that was only able to run locally. I took over this POC and turned it into a production ready product that real users interacted with on asics.com. This project was meant to be done as fast as possible, so it does not follow optimal frontend architecture, which I will discuss more below in the learnings section.</p>
        <video src="/videos/shoe-chatbot-vid.webm" controls>
          Your browser does not support the video tag.
        </video>
        <h2>Tech Stack</h2>
        <ul>
          <li>TypeScript</li>
          <li>Claude 3.5</li>
          <li>Langchain</li>
          <li>Fastify</li>
          <li>AWS Bedrock, Lambda, and API Gateway</li>
          <li>HTML, JavaScript, CSS</li>
          <li>Dynamic Yield</li>
        </ul>
        <h2>Architecture</h2>
        <Image alt="AI Chatbot Miro architecture diagram" src={aiChatbotMiro} style={{width: '100%', height: '100%'}} />
        <h2>Functionality</h2>
        <p>At a high level, the shoe recommender chatbot works by applying filters on the product listing page based on the messages from the user.</p>
        <p>For more details, the backend gets a post with JSON of the conversation and the locale. The JSON contains the entire chat history and the locale since different locales require different filters. The conversation gets sent to the decision chain, which decides what type of response to give to the customer: explanation, recommendation, or error. The conversation then gets sent to the corresponding chain. Throughout this process, Langchain is used to handle calling the AI model and creating the chains where this decision flow is set up.</p>
        <p>if explanation or error is chosen: tell Claude 3.5 to respond with an explanation or a reason for why it cannot give an answer (with proper ASICS tone and guardrails applied)</p>
        <p>if recommendation: pass the conversation and a JSON schema of the filters to Claude and tell Claude it has to respond in JSON following the filter schema.</p>
        <p>The backend responds to the frontend with JSON of the message to display and the filters to apply.</p>
        <p>The frontend displays the customer explanation from the response JSON.</p>
        <p>If the response type is recommendation, the frontend needs to apply filters to the page. It does so by building a URL with query and path params of the filters. The frontend then fetches the HTML content at that url with the filters applied. The frontend then replaces the contents of the current page (tiles, filters, filter bubbles) with the new filtered content.</p>
        <h2>Key Features I added:</h2>
        <ul>
          <li>
            Upgrade the AI model to Claude 3.5
          </li>
          <li>
            Further prompt refinement to fit the ASICS tone and an error chain to handle off topic chats
          </li>
          <li>
            Chat window UI updates
          </li>
          <li>
            A tab design for the chatbot to be opened from
          </li>
          <li>
            Disclaimer page with AI terms of use
          </li>
          <li>
            Minimize and close buttons
          </li>
          <li>
            Exit page
          </li>
          <li>
            Logging with Datadog
          </li>
          <li>
            Production A/B tesitng with Dynamic Yield
          </li>
        </ul>
        <h2>Results</h2>
        <ul>
          <li>The test had 1.88 million visitors in it as of July 18th, of which half had been exposed to the chatbot.</li>
          <li>Conversion rate and revenue were up significantly (1-2%) for OneASICS members and mobile visitors who used the chatbot.</li>
          <li>Add-to-cart rate was up significantly (+1%) overall with users who interacted with the chatbot.</li>
        </ul>
        <h2>Learnings</h2>
        <p>As a result of the speed at which ASICS wanted to test the chatbot, I had to keep using the vanilla JavaScript and HTML architecture from the POC. The frontend should be rebuilt in React as that would make it easier to maintain and work in. Additionally, I think the chat should implement a streaming feature, that way the user can get realtime messages word by word from the chatbot, instead of having to wait for the entire message to be complete before it is sent. The chatbot is also currently opened through a tab on the sidebar, which is a part of the screen that users do not typically interact with. Because of this, it would be better to have the chat window open from a bubble in the bottom right corner. Lastly, I would implement retrieval augmented generation in order to recommend specific shoes, as the chatbot can currently only apply recommended filters. A combination of applying filters and specific shoe recommendations would give users a better result.</p>
      </div>
    </>
  );
}