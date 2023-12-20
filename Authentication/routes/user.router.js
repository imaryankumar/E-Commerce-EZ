import express from "express";
import register from "../controllers/register.js";
import login from "../controllers/login.js";
import forgot from "../controllers/forgot.js";
import reset from "../controllers/reset.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/forgot", forgot);
router.put("/reset", reset);

export default router;
