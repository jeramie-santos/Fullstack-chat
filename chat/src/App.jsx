import ChatBox from "./components/chatbox";
import ChatForm from "./components/ChatForm";
import { ChatProvider } from "./context/ChatProvider";

const App = () => {
  return (
    <ChatProvider>
      <main>
        <ChatBox />
        <ChatForm />
      </main>
    </ChatProvider>
  )
}

export default App;