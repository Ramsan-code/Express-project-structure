import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("this is get user");
});
router.get("/:id", (req, res) => {
  res.send("this is get one user");
});
router.post("/", (req, res) => {
  res.send("this is post  user");
});
router.put("/:id", (req, res) => {
  res.send("this is put user");
});
router.delete("/:id", (req, res) => {
  res.send("this is delete user");
});
export default router;
