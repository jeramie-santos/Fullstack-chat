import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

const ChatForm = () => {
    const { chats } = useContext(ChatContext);

    const sendChat = async (formData) => {
        const API_URL = import.meta.env.VITE_API_URL;


        try {

            const newChat = { 
                name: "User",
                message: formData.get("message")
            }; 

            await fetch(`${API_URL}/chats`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newChat)
            })         
        } catch (error) {
            console.log("Error sending message:", error);
        }
    }

    return (
        <div className="p-5 rounded-b-2xl bg-(--color-surface) shadow-2xl">
            <form action={sendChat} className="flex justify-between gap-2">
                <input type="text" name="message" className="flex-1 px-2 bg-(--color-bg) rounded-2xl" placeholder="Message..." required/>
                <button type="submit" className={`bg-blue-500 p-2 md:px-4 md:py-2 rounded-lg text-white hover:bg-blue-700 ${chats.length === 0 && "cursor-not-allowed"}`} disabled={chats.length === 0}>Send</button>
            </form>
        </div>
    )
}

export default ChatForm;