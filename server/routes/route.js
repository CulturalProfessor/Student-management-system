import express from "express";
import { getStudents,postStudents } from "../controllers/controller.js";

const router=express.Router();

router.get('/getStudents',getStudents)
router.post("/postStudents", postStudents);

export default router;