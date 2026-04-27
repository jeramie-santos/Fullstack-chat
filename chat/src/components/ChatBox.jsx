import { useContext, useRef, useEffect } from "react";
import { ChatContext } from "../context/chatContext";

const ChatBox = () => {
    const {chats} = useContext(ChatContext);
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [chats]);  

    return (
        <div className="flex-1 flex flex-col min-h-0 rounded-t-2xl bg-(--color-surface)/40">
            <div className="p-4">
                <h2 className="text-xl font-bold">Simple Chat</h2>
            </div>
            <div className="flex-1 flex flex-col items-end min-h-0 gap-4 p-4 overflow-y-auto">
                {chats.map((chat, index) => 
                    <div key={index}>
                        <p className="text-end text-sm">{chat.name}</p>
                        <div className="w-fit bg-blue-500 text-white px-6 py-2 rounded-xl">
                            <p>{chat.message}</p>
                        </div>
                    </div>
                )}
                <div ref={bottomRef} />
            </div>
        </div>
    )
}

export default ChatBox;