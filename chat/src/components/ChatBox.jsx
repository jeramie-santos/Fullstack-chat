import { useContext } from "react";
import { ChatContext } from "../context/chatContext";

const ChatBox = () => {
    const {chats} = useContext(ChatContext)    

    return (
        <div className="flex-1 flex flex-col border-2 min-h-0">
            <h2>hello</h2>
            <div className="flex-1 flex flex-col min-h-0 gap-4 p-4 border overflow-y-auto">
                {chats.map((chat, index) => 
                    <div key={index} className="bg-blue-500 text-white px-2 py-4 rounded-xl">
                        <p>{chat.message}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ChatBox;