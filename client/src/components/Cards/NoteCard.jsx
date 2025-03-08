import React from "react";
import {MdCreate, MdDelete, MdOutlinePushPin} from "react-icons/md"
const NoteCard = ({title, date,isPinned,onPinNote,content,tags,onEdit,onDelete}) => {
  return (
    <div className="border border-slate-300 rounded p-4 bg-white hover:shadow-xl transition-all ease-in-out ">
        <div className="flex items-center justify-between">
                <div >
                    <h6 className="text-sm font-medium">{title}</h6>
                    <span className="text-sm text-green-700">{date}</span>
                </div>
                <MdOutlinePushPin size={22} onClick={onPinNote} className={`cursor-pointer ${isPinned ? "text-green-500":"text-slate-500"}`}/>
        </div>
        <p className="text-xs text-slate-600 mt-2 ">{content?.slice(0,60)}
        </p>
        <div className="flex items-center justify-between mt-2">
            <div className="text-xs text-slate-500">#tags{tags}</div>
            <div className="flex items-center gap-2">
                <MdCreate size={22}  className="hover:text-green-500 cursor-pointer" onClick={onEdit}/>
                <MdDelete size={22} className="hover:text-red-500 cursor-pointer" onClick={onDelete}/>
            </div>
        </div>
    </div>
  );
};

export default NoteCard;
