import dotenv from "dotenv";
import express from "express";
import loginRouter from "./router/loginRouter";

dotenv.config();
const app = express();

app.use(loginRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
