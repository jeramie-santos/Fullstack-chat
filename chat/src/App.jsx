import ChatBox from "./components/ChatBox";
import ChatForm from "./components/ChatForm";
import { ChatProvider } from "./context/ChatProvider";

const App = () => {
  return (
    <ChatProvider>
      <main className="flex flex-col p-4 h-screen min-h-0">
        <ChatBox />
        <ChatForm />
      </main>
    </ChatProvider>
  )
}

export default App;