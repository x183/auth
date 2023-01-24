import { Router } from "express";

const loginRouter = Router();
loginRouter.get("/login/:uName/:pass", (req, res) => {
  const { uName, pass } = req.params;
  if (uName === "admin" && pass === "admin") {
    res.send("Welcome to the admin page");
  } else {
    res.send("Welcome, pleb");
  }
  console.log("Oopsie woopsie, someone made a fucky wucky");
});

export default loginRouter;
