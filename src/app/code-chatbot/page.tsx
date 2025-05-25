export default function CodeChatbot() {
  return (
    <>
      <div>
        <h1>Code Generating Chatbot</h1>
        <p>This was made in a couple hours during the ASICS Digital Hackathon in 2024. I built the frontend for the chatbot in React in an existing ASICS internal tool. I chose to build it in an internal tool as it already has a build and deploy process set up as well as authentication. With the help of a backend engineer on my team, we added RAG to the backend to allow the AI model (Claude 3.5) to search proprietary ASICS code in its responses.</p>
        <p>The following video shows a demo of the chat functionality, but this was before it was set up with code generating copy and prompts.</p>
        <video src="/videos/code-chatbot-vid.webm" controls>
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
}
