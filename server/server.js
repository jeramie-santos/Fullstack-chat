const express = require("express");

const http = require("http");
const { Server } = require("socket.io")

const app = express();
const connectDB = require("./config/db");
const chatRoutes = require("./routes/chatRoutes");
const cors = require("cors")
require("dotenv").config();

app.use(express.json());
app.use(cors({
    origin: process.env.CLIENT_URL,
}));

app.get("/pring", (req, res) => {
    res.status(200).send("Server is awake");
})

connectDB();

app.use("/", chatRoutes);

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: process.env.CLIENT_URL,
        methods: ["GET", "POST"],
    },
})

app.set("io", io);

io.on("connection", (socket) => {
    console.log("User connected", socket.id);
})

const PORT = process.env.PORT;

server.listen(PORT, () => {
    console.log(`Server is runnin in port ${PORT}`);
})