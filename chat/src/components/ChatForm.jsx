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
        <div className="p-5 border-2">
            <form action={sendChat} className="flex justify-between gap-2">
                <input type="text" name="message" className="border flex-1 px-2"/>
                <button type="submit" className="bg-blue-500 px-4 py-2 rounded-lg text-white">Send</button>
            </form>
        </div>
    )
}

export default ChatForm;