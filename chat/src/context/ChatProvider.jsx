import { useState } from "react";
import { ChatContext } from "./chatContext";

export const ChatProvider = ({children}) => {
    
    const sampleChat = [
        {
            name: "Jeramie",
            message: "1st Chat",
            time: "3:20"
        },
        {
            name: "Max",
            message: "2st Chat",
            time: "3:20"
        }
    ]
    
    const [chats, setChats] = useState(sampleChat);

    return(
        <ChatContext.Provider value={{chats, setChats}}>
            {children}
        </ChatContext.Provider>
    )
}