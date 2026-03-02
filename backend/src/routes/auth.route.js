import express from "express"
import { Login, Logout, Signup, updateProfile } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router()

router.post("/Signup", Signup);
router.post("/Login", Login);
router.post("/Logout", Logout);

router.put("/update-profile", protectRoute, updateProfile)

export default router;