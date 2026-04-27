import { useEffect, useState, useMemo } from "react";
import { ChatContext } from "./chatContext";
import { io } from "socket.io-client";

export const ChatProvider = ({children}) => {
    const socket = useMemo(() => io("http://localhost:3000"), []);
    
    const [chats, setChats] = useState([]);
    
    useEffect(() => {
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
    }, [])

    useEffect(() => {
        socket.on("newMessage", (newMessage) => {
            console.log(newMessage);
            
            setChats(prev => [...prev, newMessage]);
        })
        return () => socket.off("newMessage")
    }, [socket])

    return(
        <ChatContext.Provider value={{chats, setChats}}>
            {children}
        </ChatContext.Provider>
    )
}