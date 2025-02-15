import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
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
    <div>
      <button onClick={fetchData}>fetch</button>
    </div>
  )
}

export default Home
