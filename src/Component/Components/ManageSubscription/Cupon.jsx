import { useState } from "react";
import { AiOutlineDelete, AiOutlinePlus} from "react-icons/ai";
// import Admindetail from "./Admindetail";
// import Delete from "./Delete";
import { FiEdit } from "react-icons/fi";
import Delete from "../MakeAdmin/Delete";
import { NavLink } from "react-router-dom";

const Cupon = () => {
    const [openModal, setOpenModal] = useState("");
    const [selectedId, setSelectedId] = useState(null);
    const toggleModal = (modalName, id = null) => {
        setOpenModal(openModal === modalName ? "" : modalName);
        setSelectedId(id);
      }
      const subscribers = [
        {
          id: "12333",
          cupon_code: "Give50",
          cuponname: "Standard",
         
        },
        {
          id: "12334",
          cupon_code: "Give50",
         cuponname: "Standard",
         
        },
        {
          id: "12335",
          cupon_code: "Give50",
          cuponname: "Standard",
         
        },
      ];
    return (
        <div className="container mx-auto">
        {/* Header */}
           <div className="flex items-center justify-between pt-2 mb-3">
             <h1 className="text-2xl font-bold mb-4">Manage Cupon </h1>
             <NavLink to="/cuponAdd"><button
               className="text-white bg-[#8CAB91] rounded-xl px-6 py-2 flex items-center gap-3 cursor-pointer"
         
             >
               <AiOutlinePlus className="text-[#FAF1E6]" />
               <h2 className="text-[#FAF1E6]">ADD</h2>
             </button></NavLink>
           </div> 
                <div className="overflow-x-auto overflow-y-auto bg-white mt-7 ">
                <table className="min-w-full text-center">
  <thead>
    <tr className="">
      <th className="py-4 px-6 text-lg font-bold open-sns text-[#575757] whitespace-nowrap">S ID.</th>
      <th className="py-4 px-6 text-lg font-bold open-sns text-[#575757] whitespace-nowrap">Cupon Code</th>
      <th className="py-4 px-6 text-lg font-bold open-sns text-[#575757] whitespace-nowrap">Cupon Name</th>
      <th className="py-4 px-6 text-lg font-bold open-sns text-[#575757] whitespace-nowrap">Action</th>
      <th className="py-4 px-6 text-lg font-bold open-sns text-[#575757] whitespace-nowrap">Action</th>
    </tr>
  </thead>
  <tbody>
    {subscribers.map((subscriber, index) => (
      <tr key={index} className="hover:bg-gray-50">
        <td className="py-2 px-4 text-[#707070]">{subscriber.id}</td>
        <td className="py-2 px-4 text-[#707070]">{subscriber.cupon_code}</td>
        <td className="py-2 px-4 text-[#707070]">{subscriber.cuponname}</td>
         <td className="py-2 px-6 text-[#8CAB91]">
         <NavLink to="/cuponEdit"> <FiEdit className="mx-auto w-[20px] h-[20px]" /></NavLink>
        </td>
        <td className="py-2 px-6 text-[#FF2D55]">
          <AiOutlineDelete onClick={() => toggleModal("delete", subscriber.id)} className="mx-auto w-[24px] h-[24px] text-red-500 cursor-pointer" />
        </td>
      </tr>
    ))}
  </tbody>
</table>

 
</div>
{openModal && (
<>
{/* {openModal === "admin" &&  <Admindetail onClose={() => setOpenModal("")}></Admindetail>} */}

 {openModal === "delete" && <Delete id={selectedId} onClose={() => setOpenModal("")}></Delete>}
</>
)}
    </div>
    );
}

export default Cupon;
