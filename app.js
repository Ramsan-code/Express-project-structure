// Basic server setup
import express, { Router } from "express";

const app = express();
const router = express.Router();
const PORT = 3000;

// HTTP method handling

app.get("/", (req, res) => {
  res.send("hello express");
});
router.get("/user", (req, res) => {
  res.send("this is get user");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
