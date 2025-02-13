import { useState } from "react";

import { AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";

import { NavLink, useParams } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import Addquestion from "./Addquestion";
import EditQuestion from "./EditQuestion";
import Delete from "../MakeAdmin/Delete";

const QuestionsDetails = () => {
    const { id } = useParams(); 

    const [selectedId, setSelectedId] = useState(null);
    const [openModal, setOpenModal] = useState("");
    const [selectedSection, setSelectedSection] = useState(null);
  
    const toggleModal = (modalName, section, id = null) => {
      setOpenModal(openModal === modalName ? "" : modalName);
      setSelectedSection(section);
      setSelectedId( id)
    };
  
    return (
        <div className="container mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between pt-2 mb-3">
            <div className="flex items-center gap-3"> 

        <NavLink to="/addquestions"><div className="text-white bg-[#8CAB91] rounded-xl px-6 py-2"><MdArrowBack className="text-xl" /></div></NavLink> 
        <h1 className="text-2xl font-bold text-[#2D3748] ">Childhood</h1>
          {/* <p className="mt-4 text-lg">Showing details for question ID: {id}</p>  */}
          </div>
          <button
            className="text-white bg-[#8CAB91] rounded-xl px-6 py-2 flex items-center gap-3 cursor-pointer"
            onClick={() => toggleModal("add")}
          >
            <AiOutlinePlus className="text-[#FAF1E6]" />
            <h2 className="text-[#FAF1E6]">Add new Section</h2>
          </button>
        </div>
  
        {/* Section List */}
        <div className="px-6 py-12 bg-white rounded-lg shadow-2xl dark:bg-gray-800">
          <div className="flex py-3 items-center border-[#8CAB91] bg-[#FAF1E6] border rounded-2xl justify-between px-6">
            <div className="flex  items-center gap-3">
              <h1 className="text-[#364636] leading-[36px] font-bold font-2xl">{id}.</h1>
              <p className="text-[#364636] leading-[24px] font-bold font-2xl">5/10 Questions Added</p>
            </div>
            <div className="flex flex-row items-center gap-3">
            
              
              <FaRegEdit
                onClick={() => toggleModal("edit", { id: 1, name: "Childhood" })}
                className="w-[24px] h-[24px] font-normal text-[#212121] cursor-pointer"
              />
              <AiOutlineDelete  onClick={() => toggleModal("delete", id)}  className="w-[24px] h-[24px] font-normal text-[#212121] cursor-pointer" />
            </div>
          </div>
        </div>
  
        {/* Modal Logic */}
        {openModal && (
          <>
            {openModal === "add" && <Addquestion onClose={() => setOpenModal("")}></Addquestion>}
            {openModal === "edit" &&  <EditQuestion section={selectedSection} onClose={() => setOpenModal("")}></EditQuestion>}
            {openModal === "delete" &&  <Delete id={selectedId} onClose={() => setOpenModal("")}></Delete>}
          </>
        )}
      </div>
    );
}

export default QuestionsDetails;
