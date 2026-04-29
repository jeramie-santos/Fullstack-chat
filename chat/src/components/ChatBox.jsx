import { useContext, useRef, useEffect } from "react";
import { ChatContext } from "../context/ChatContext";

const ChatBox = () => {
    const {chats} = useContext(ChatContext);
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [chats]);  

    return (
        <div className="flex-1 flex flex-col min-h-0 rounded-t-2xl bg-(--color-surface)/40">
            <div className="p-4">
                <h2 className="text-xl font-bold">Chat Room</h2>
            </div>
            <div className={`flex-1 flex flex-col ${chats.length === 0 ? "" : "items-end" } min-h-0 gap-4 p-4 overflow-y-auto`}>
                {chats.length === 0  && <p className="bg-red-500 py-1 animate-pulse text-center">Connecting to Server...</p>}
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