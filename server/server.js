const express = require("express");

const http = require("http");
const { Server } = require("socket.io")

const app = express();
const connectDB = require("./config/db");
const chatRoutes = require("./routes/chatRoutes");
const cors = require("cors")
require("dotenv").config();

app.use(express.json());
app.use(cors());

connectDB();

app.use("/", chatRoutes);

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
    },
})

app.set("io", io);

io.on("connection", (socket) => {
        console.log("User connected: ", socket.id);

    socket.on("disconnect", () => {
        console.log("User connected: ", socket.id);
    });
})

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is runnin in port ${PORT}`);
})