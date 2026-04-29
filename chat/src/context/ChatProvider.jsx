import { useEffect, useState, useMemo } from "react";
import { ChatContext } from "./ChatContext";
import { io } from "socket.io-client";

export const ChatProvider = ({children}) => {
    const socket = useMemo(() => io("https://fullstack-chat-api-chum.onrender.com/"), []);
    
    const [chats, setChats] = useState([]);
    
    useEffect(() => {
        const fetchChats = async () => {
            try {
                const res = await fetch("https://fullstack-chat-api-chum.onrender.com/chats")
                const data = await res.json();

                setChats(data.slice(-10));
            } catch (error) {
                console.error("Error fetching chats:", error);
            }
        }
        fetchChats();
    }, [])

    useEffect(() => {
        socket.on("newMessage", (newMessage) => {
            console.log(newMessage);
            
            setChats(prev => {
                const updated = [...prev, newMessage]
                return updated.slice(-10);
            });
        })
        return () => socket.off("newMessage")
    }, [socket])

    return(
        <ChatContext.Provider value={{chats, setChats}}>
            {children}
        </ChatContext.Provider>
    )
}