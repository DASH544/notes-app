import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NoteCard from '../components/Cards/NoteCard'

const Home = () => {
  const [addNote,setaddNote]=useState(false)
    const [data,setData]=useState(null)
            const fetchData=async()=>
                {
                    const response=await axios.get("http://localhost:3000/api/v1/note/all",
                     {
                        withCredentials:true
                    })
                    setData(response.data)
                    console.log(response.data)
                }
    
  return (
    <>
    <div className="container mx-auto">
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mt-8 max-md:m-5">
      <NoteCard />
      <NoteCard/>
      <NoteCard/>
      <NoteCard/>
    </div>
  </div>
  <button className='w-16 h-16 flex items-center justify-center rounded-2xl bg-blue-500 hover:bg-blue-200 absolute right-10 bottom-10 'onClick={()=>setaddNote((e)=>!e)}>
    <MdAdd className="text-3xl text-white"></MdAdd>
  </button>
  </>
  )
}

export default Home
