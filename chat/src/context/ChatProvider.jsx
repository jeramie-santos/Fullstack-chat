import { useEffect, useState } from "react";
import { ChatContext } from "./chatContext";

export const ChatProvider = ({children}) => {
    
    
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

    return(
        <ChatContext.Provider value={{chats, setChats}}>
            {children}
        </ChatContext.Provider>
    )
}