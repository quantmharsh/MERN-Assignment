import express from "express";
import { createUser, getAllUsers, getbyemail } from "../controllers/userController.js";
const router=express.Router();
router.post("/getbyemail" ,getbyemail)
router.post('/create' ,createUser);
router.post("/getallusers" , getAllUsers)
export default router;