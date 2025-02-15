import express from "express"
import "dotenv/config"
import cors from "cors"
import cookieParser from "cookie-parser"
import { connectDb } from "./db/db.js"
const port =process.env.PORT || 5000
const app=express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({origin:true, 
    credentials:true}))
//import routes
import authRoutes from "./routes/authRoutes.js"
import noteRoutes from "./routes/noteRoutes.js"
//using routes
app.use("/api/v1/auth",authRoutes)
app.use("/api/v1/note",noteRoutes)
app.listen(port,()=>
    {
        console.log(`server is runing on http://localhost:${port}`)
        connectDb()
    })
