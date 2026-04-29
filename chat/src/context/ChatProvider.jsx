import { useEffect, useState, useMemo } from "react";
import { ChatContext } from "./ChatContext";
import { io } from "socket.io-client";

export const ChatProvider = ({children}) => {

    const API_URL = import.meta.env.VITE_API_URL;

    const socket = useMemo(() => io(API_URL), []);
    
    const [chats, setChats] = useState([]);
    
    useEffect(() => {
        const fetchChats = async () => {
            try {
                const res = await fetch(`${API_URL}/chats`)
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