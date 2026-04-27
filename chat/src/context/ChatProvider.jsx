import { useEffect, useState } from "react";
import { ChatContext } from "./chatContext";
import { io } from "socket.io-client";

export const ChatProvider = ({children}) => {
    
    
    const [chats, setChats] = useState([]);
    
    useEffect(() => {
        const socket = io("http://localhost:3000");
        const fetchChats = async () => {
            try {
                const res = await fetch("http://localhost:3000/chats")
                const data = await res.json();

                setChats(data);
            } catch (error) {
                console.error("Error fetching chats:", error);
            }
        }

        fetchChats();

        socket.off();

        socket.on("newMessage", (newMessage) => {
            setChats(prev => [...prev, newMessage]);
        });

        return () => {
            socket.disconnect();
        }

    }, [])

    return(
        <ChatContext.Provider value={{chats, setChats}}>
            {children}
        </ChatContext.Provider>
    )
}