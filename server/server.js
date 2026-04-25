const express = require("express");
const app = express();
const connectDB = require("./config/db");
const chatRoutes = require("./routes/chatRoutes");
require("dotenv").config();

app.use(express.json());

connectDB();

app.use("/", chatRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is runnin in port ${PORT}`);
})