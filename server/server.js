const express = require("express");
const app = express();
const connectDB = require("./config/db");
const chatRoutes = require("./routes/chatRoutes");
const cors = require("cors")
require("dotenv").config();

app.use(express.json());
app.use(cors());

connectDB();

app.use("/", chatRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is runnin in port ${PORT}`);
})