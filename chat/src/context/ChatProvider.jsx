import { useState } from "react";
import { ChatContext } from "./chatContext";

export const ChatProvider = ({children}) => {
    
    const sampleChat = [
        {
            name: "Jeramie",
            message: "1st Chat",
            date: "3:20"
        },
        {
            name: "Max",
            message: "2st Chat",
            date: "3:20"
        }
    ]
    
    const [chat, setChat] = useState(sampleChat);

    return(
        <ChatContext.Provider value={{chat, setChat}}>
            {children}
        </ChatContext.Provider>
    )
}