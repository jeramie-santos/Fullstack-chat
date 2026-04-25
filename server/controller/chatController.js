const Chat = require('../model/chatModel');
const mongoose = require('mongoose');

const getChats = async (req, res) => {
    try{
        const chat = await Chat.find();

        res.json(chat);

    } catch (err) {
        res.status(500).json({ message: err.message || "Something went wrong" })
    }
}

const addChat = async (req, res) => {
    try {
        const {name, message} = req.body;

        const newChat = new Chat({name, message});
        await newChat.save();

        res.status(201).json(newChat);
    } catch (err) {
        return res.status(500).json({ message: err.message || "Something went wrong" })
    }
}

module.exports = {
    getChats,
    addChat,
}