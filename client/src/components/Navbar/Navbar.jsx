import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ProfileInfo from '../Cards/ProfileInfo';
import {useNavigate} from "react-router-dom"
const Navbar = () => {
  const navigate = useNavigate()
  const [searchQuery,setSearchQuery]=useState()
  const handleSearch=()=>{}
  const onClearSearch=()=>
    {
      setSearchQuery("")
    }
  const onLogout=()=>
    {
      navigate("/signin");
    }
  return (
    <nav className=" px-4 py-2 flex flex-wrap items-center justify-between">
        <h2 className='text-xl font-medium text-black py-2'>Quill</h2>
        <SearchBar value={searchQuery}
        onChange={(e)=>setSearchQuery(e.target.value)}
        handleSearch={handleSearch}
        onClearSearch={onClearSearch}/>
        <ProfileInfo onLogout={onLogout}/>
    </nav>
  );
};

export default Navbar;
