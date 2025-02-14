import {z} from "zod"
import { notesModel } from "../models/noteModel.js"
const requiredBody=z.object(
    {
        title:z.string().min(3).max(64),
        contentNote:z.string().min(8),
    })
export const addNote=async(req,res)=>
    {
        try {
            const {title,contentNote,tags}=req.body
            console.log(title,contentNote,tags)
            const parsedBody=requiredBody.safeParse(req.body)
            if(!parsedBody.success) return res.status(400).json(parsedBody.error)
            const note=await notesModel.create(
        {
            title,
            contentNote,
            tags,
            creatorId:req.user
        })
        res.status(201).json({message:"Note Added",note})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
export const editNote=async(req,res)=>
    {
        try {
            const noteId=req.params.id
            const userId=req.user
            const filter={
                _id:noteId,
                creatorId:userId
            }
            const updateDoc={
              $set:req.body
            }
            const note=await notesModel.updateOne(filter,updateDoc)
            if(!note) return res.status(404).json({message:"Note not Found"})
                res.status(201).json({message:"Note Updated Successfully"})
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
    export const deleteNote=async(req,res)=>{
        try {
            const noteId=req.params.id
            const userId=req.user
            const note=await notesModel.findOneAndDelete({_id:noteId,creatorId:userId})
            if(!note) return res.status(404).json({message:"Not found"})
            res.status(200).json({message:"Note Deleted"})
        } catch (error) {
            res.status(500).json(error.message)
        }

    }