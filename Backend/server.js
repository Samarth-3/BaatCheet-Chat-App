const express = require("express");
const chats = require("./data/data");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
connectDB();
const app = express();
app.use(express.json());

const { notFound, errorHandler } = require("./middleware/errorMiddleware");

app.get("/", (req, res) => {
  res.send("API is running gg");
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT= process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on post ${PORT}`));