import express from "express";
import {getUsersForSidebars, getMessages} from "../controllers/message.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { sendMessage } from "../controllers/message.controller.js";



const router= express.Router();

router.get("/users", protectRoute, getUsersForSidebars);
router.get("/:id",protectRoute,getMessages);
router.post("/:id",protectRoute,sendMessage);

export default router;