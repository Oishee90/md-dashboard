import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import AddSection from "./AddSection";
import EditSection from "./EditSection";
import Delete from "../MakeAdmin/Delete";

const Question = () => {
  const [openModal, setOpenModal] = useState("");
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const navigate = useNavigate(); // ✅ Initialize navigation

  // 🔹 Dummy Data (API theke ashte pare)
  const sections = [
    { id: 1, name: "Childhood", totalQuestions: 10, addedQuestions: 5 },
    { id: 2, name: "School Life", totalQuestions: 15, addedQuestions: 7 },
    { id: 3, name: "Career", totalQuestions: 20, addedQuestions: 12 },
  ];

  const toggleModal = (modalName, section, id = null) => {
    setOpenModal(openModal === modalName ? "" : modalName);
    setSelectedSection(section);
    setSelectedId(id)
  };

  return (
    <div className="container mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between pt-2 mb-3">
        <h1 className="text-2xl font-bold mb-4">Questionnaire</h1>
        <button
          className="text-white bg-[#8CAB91] rounded-xl px-6 py-2 flex items-center gap-3 cursor-pointer"
          onClick={() => toggleModal("add")}
        >
          <AiOutlinePlus className="text-[#FAF1E6]" />
          <h2 className="text-[#FAF1E6]">Add new Section</h2>
        </button>
      </div>

      {/* 🔹 Dynamic Section List */}
      <div className="px-6 py-12 bg-white rounded-lg shadow-2xl dark:bg-gray-800">
        {sections.map((section) => (
          <div
            key={section.id}
            className="flex py-3 items-center border-[#8CAB91] bg-[#FFFDFA] border rounded-2xl justify-between px-6 mb-3"
          >
            <div>
              <h1 className="text-[#364636] leading-[36px] font-bold font-2xl">{section.name}</h1>
              <p className="text-[#8CAB91] leading-[24px] font-semibold font-lg">
                {section.addedQuestions}/{section.totalQuestions} Questions Added
              </p>
            </div>
            <div className="flex flex-row items-center gap-3">
              {/* ✅ Dynamic Navigation Based on ID */}
              <MdOutlineRemoveRedEye
                onClick={() => navigate(`/question/${section.id}`)} 
                className="w-[24px] h-[24px] font-normal text-[#8CAB91] cursor-pointer"
              />
              <AiOutlineDelete onClick={() => toggleModal("delete", section.id)} className="w-[24px] h-[24px] font-normal cursor-pointer text-[#8CAB91]" />
              <FaRegEdit
                onClick={() => toggleModal("edit", section)}
                className="w-[24px] h-[24px] font-normal text-[#8CAB91] cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Modal Logic */}
      {openModal && (
        <>
          {openModal === "add" && <AddSection onClose={() => setOpenModal("")} />}
          {openModal === "edit" && <EditSection section={selectedSection} onClose={() => setOpenModal("")} />}
          {openModal === "delete" &&  <Delete id={selectedId} onClose={() => setOpenModal("")}></Delete> }
        </>
      )}
  
    </div>
  );
};

export default Question;
