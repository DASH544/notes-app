import express from "express";
import { isAuth } from "../middlewares/isAuth.js";
import { addNote, deleteNote, editNote } from "../controllers/notesControllers.js";
const router = express.Router();
router.post("/addnote", isAuth, addNote);
router.put("/editnote/:id",isAuth,editNote)
router.delete("/deletenote/:id",isAuth,deleteNote)
export default router;
