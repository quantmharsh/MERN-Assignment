import express from "express";
import { createUser, getbyemail } from "../controllers/userController.js";
const router=express.Router();
router.post("/getbyemail" ,getbyemail)
router.post('/create' ,createUser);
export default router;