import { useContext } from "react";
import { ChatContext } from "../context/chatContext";

const ChatForm = () => {
    const {setChats} = useContext(ChatContext);

    const sendChat = async (formData) => {
        
        try {

            const newChat = { 
                name: "sample",
                message: formData.get("message")
            }; 

            const res = await fetch("http://localhost:3000/chats", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newChat)
            })

            const data = await res.json();

            setChats(prev => [...prev, data])
        } catch (error) {
            console.log("Error sending message:", error);
        }
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