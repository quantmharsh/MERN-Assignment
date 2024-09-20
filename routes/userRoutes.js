import express from "express";
import { getbyemail } from "../controllers/userController.js";
const router=express.Router();
router.post("/getbyemail" ,getbyemail)
export default router;