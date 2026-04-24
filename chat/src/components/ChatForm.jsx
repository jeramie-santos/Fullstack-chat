import { useContext } from "react";
import { ChatContext } from "../context/chatContext";

const ChatForm = () => {
    const {setChats} = useContext(ChatContext);

    const sendChat = (formData) => {
        
        
        const newChat = { 
            name: "asdasd",
            message: formData.get("message"),
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", hour12: false})
        };

        console.log(newChat);
        

        setChats(prev => [...prev, newChat])
    }

    return (
        <div className="p-5">
            <form action={sendChat}>
                <input type="text" name="message" className="border"/>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default ChatForm;