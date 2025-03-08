import axios from "axios";
import React, { useEffect, useState } from "react";
import NoteCard from "../components/Cards/NoteCard";
import { MdAdd } from "react-icons/md";
import Modal from "react-modal";
import AddEditNotes from "./AddEditNotes";
const Home = () => {
  const [addNoteModal, setaddNoteModal] = useState({
    isShown: true,
    type: "add",
    data: null,
  });
  const [data, setData] = useState(null);
  const fetchData = async () => {
    const response = await axios.get("http://localhost:3000/api/v1/note/all", {
      withCredentials: true,
    });
    setData(response.data);
    console.log(response.data);
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mt-8 max-md:m-5">
          <NoteCard
            title={"Wake Up at 6 a.m."}
            date={"5th June,2021"}
            content={"Early Day Everday"}
            tags={"#early"}
            isPinned={false}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
          <NoteCard
            title={"Wake Up at 6 a.m."}
            date={"5th June,2021"}
            content={"Early Day Everday"}
            tags={"#early"}
            isPinned={false}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
          <NoteCard
            title={"Wake Up at 6 a.m."}
            date={"5th June,2021"}
            content={"Early Day Everday"}
            tags={"#early"}
            isPinned={false}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
          <NoteCard
            title={"Wake Up at 6 a.m."}
            date={"5th June,2021"}
            content={"Early Day Everday"}
            tags={"#early"}
            isPinned={false}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
          <NoteCard
            title={"Wake Up at 6 a.m."}
            date={"5th June,2021"}
            content={"Early Day Everday"}
            tags={"#early"}
            isPinned={false}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
        </div>
      </div>
      <button
        className="w-16 h-16 flex items-center justify-center rounded-2xl bg-blue-500 hover:bg-blue-200 absolute right-10 bottom-10 "
        onClick={() => setaddNote({ isShown: true, type: "add", data: null })}
      >
        <MdAdd
          className="text-3xl text-white"
          onClick={() => {
            setaddNoteModal({
              isShown: true,
              type: add,
              data: null,
            });
          }}
        ></MdAdd>
      </button>
      <Modal
        isOpen={addNoteModal.isShown}
        onRequestClose={() => {}}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.2)",
          },
        }}
        contentLabel=""
        className="w-[40%] max-md:w-[60%] max-sm:w-[70%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 overflow-scroll"
        
      ><AddEditNotes/></Modal>
    </>
  );
};

export default Home;
