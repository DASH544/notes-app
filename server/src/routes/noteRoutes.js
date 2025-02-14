import express from "express";
import { isAuth } from "../middlewares/isAuth.js";
import { addNote, deleteNote, editNote, getAllNotes, pinnedNote } from "../controllers/notesControllers.js";
const router = express.Router();
router.post("/addnote", isAuth, addNote);
router.put("/editnote/:id",isAuth,editNote)
router.delete("/deletenote/:id",isAuth,deleteNote)
router.put("/pinnote/:id",isAuth,pinnedNote)
router.get("/all",isAuth,getAllNotes)
export default router;
