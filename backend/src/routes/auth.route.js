import express from "express"
import { Login, Logout, Signup, updateProfile, checkAuth } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router()

<<<<<<< HEAD
router.post("/signup", Signup);
router.post("/login", Login);
router.post("/logout", Logout);
=======
router.post("/Signup", Signup);
router.post("/Login", Login);
router.post("/Logout", Logout);
>>>>>>> 1cd6977db022cba0cb00637bb2aafa1e5639a0cf

router.put("/update-profile", protectRoute, updateProfile);

router.get("/check",  protectRoute, checkAuth);

export default router;