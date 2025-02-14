import React from 'react'
import { useState } from 'react'
import axios from "axios"
const Signup = () => {
    const [fname,setFname]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [data,setData]=useState([])
    const handleSubmit=async(e)=>
        {
             e.preventDefault()
            const response=await axios.post("http://localhost:3000/api/v1/auth/register",
            {
                name:fname,
                email:email,
                password:password
            })
            
        }
  return (
    <>
     <form onSubmit={handleSubmit}>
        <div>
        <div>
            <label htmlFor="name">Name</label>
            <input type="name" id='name' value={fname} onChange={(e)=>setFname(e.target.value)}/>
            </div>
            <div>
            <label htmlFor="email">Email</label>
            <input type="email" id='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div>
            <label htmlFor="password">Password</label>
            <input type="password" id='password'  value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div>
            <input type="submit" value="submit" className='cursor-pointer' />
            </div>
          
        </div>
        </form> 
    </>
  )
}

export default Signup
