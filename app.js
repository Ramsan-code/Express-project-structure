// Basic server setup
import express, { Router } from "express";

const app = express();
const router = express.Router();
const PORT = 3000;

// HTTP method handling

app.get("/", (req, res) => {
  res.send("hello express");
});

router.get("/users", (req, res) => {
  res.send("this is get user");
});
router.get("/users/:id", (req, res) => {
  res.send("this is get one user");
});
router.post("/users", (req, res) => {
  res.send("this is get  user");
});
router.put("/users/:id", (req, res) => {
  res.send("this is put user");
});
router.delete("/users/:id", (req, res) => {
  res.send("this is delete user");
});

app.use(router);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
