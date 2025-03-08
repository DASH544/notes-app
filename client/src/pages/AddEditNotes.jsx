import React, { useState } from "react";
import { MdClose } from "react-icons/md";

const AddEditNotes = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const [error, setError] = useState([]);

  const handleAddNote=async()=>
    {
      if(!title)
        {
          setError()
        }
    }
  return (
    <div className="relative">
      <button
        onClick={onClose}
        className="w-10 h-10 rounded-full flex items-center justify-center absolute  -top-4 -right-3 hover:bg-slate-50"
      >
        <MdClose className="text-xl text-slate-400"  />
      </button>
      <div>
        <label htmlFor="" className="text-sm  text-slate-400 uppercase">
          Title
        </label>
        <input
          type="text"
          name=" "
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          id=""
          className="w-full text-sm bg-transparent border-[1.5px] px-5 py-3 rounded mb-4 outline-none"
        />
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <label htmlFor="" className="text-sm  text-slate-400 uppercase">
          Content
        </label>
        <textarea type="text" className="text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded" rows={10} value={content} onChange={(e)=>setContent(e.target.value)}></textarea>
      </div>
      <button className="bg-blue-600 px-8 py-2 text-white" onClick={handleAddNote}>Add</button>
    </div>
  );
};

export default AddEditNotes;
