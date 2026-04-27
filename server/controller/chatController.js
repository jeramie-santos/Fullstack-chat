const Chat = require('../model/chatModel');
const mongoose = require('mongoose');

const getChats = async (req, res) => {
    try{
        const chat = await Chat.find()
        .sort({ _id: -1})
        .limit(10);

        res.json(chat.reverse());

    } catch (err) {
        res.status(500).json({ message: err.message || "Something went wrong" })
    }
}

const addChat = async (req, res) => {
    try {
        const {name, message} = req.body;

        const newChat = new Chat({name, message});
        await newChat.save();

        const io = req.app.get("io");
        io.emit("newMessage", newChat);

        res.status(201).json(newChat);
    } catch (err) {
        return res.status(500).json({ message: err.message || "Something went wrong" })
    }
}

module.exports = {
    getChats,
    addChat,
}