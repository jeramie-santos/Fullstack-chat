const ChatForm = () => {

    const sendChat = async (formData) => {
        
        try {

            const newChat = { 
                name: "sample",
                message: formData.get("message")
            }; 

            await fetch("http://localhost:3000/chats", {
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
                <button type="submit" className="bg-blue-500 px-4 py-2 rounded-lg text-white">Send</button>
            </form>
        </div>
    )
}

export default ChatForm;