import { useState } from "react";
import { AiOutlineDelete, AiOutlinePlus} from "react-icons/ai";
// import Admindetail from "./Admindetail";
// import Delete from "./Delete";
import { FiEdit } from "react-icons/fi";
import Delete from "../MakeAdmin/Delete";
import { NavLink } from "react-router-dom";

const ManageSubscription = () => {
         const [openModal, setOpenModal] = useState("");
          const [selectedId, setSelectedId] = useState(null);
        const toggleModal = (modalName, id = null) => {
            setOpenModal(openModal === modalName ? "" : modalName);
            setSelectedId(id);
          }
          const subscribers = [
            {
              id: "12333",
              name: "Dindiniya",
              img: "https://res.cloudinary.com/dhlgk023u/image/upload/v1738496016/9334243_puz7m4.jpg",
              email: "bockelboy@att.com",
              userType: "Admin",
            },
            {
              id: "12334",
              name: "Hollima",
              img: "https://res.cloudinary.com/dhlgk023u/image/upload/v1738496016/9334243_puz7m4.jpg",
              email: "csilvers@verizon.com",
              userType: "Admin",
            },
            {
              id: "12335",
              name: "Salman",
              img: "https://res.cloudinary.com/dhlgk023u/image/upload/v1738496016/9334243_puz7m4.jpg",
              email: "salman@gmail.com",
              userType: "Admin",
            },
          ];
    return (
        <div className="container mx-auto">
        {/* Header */}
           <div className="flex items-center justify-between pt-2 mb-3">
             <h1 className="text-2xl font-bold mb-4">Manage Subscription</h1>
             <NavLink to="/subsAdd"><button
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
      <th className="py-4 px-6 text-lg font-bold open-sns text-[#364636] whitespace-nowrap">S ID.</th>
      <th className="py-4 px-6 text-lg font-bold open-sns text-[#364636] whitespace-nowrap">Name</th>
      <th className="py-4 px-6 text-lg font-bold open-sns text-[#364636] whitespace-nowrap">Action</th>
      <th className="py-4 px-6 text-lg font-bold open-sns text-[#364636] whitespace-nowrap">Action</th>
    </tr>
  </thead>
  <tbody>
    {subscribers.map((subscriber, index) => (
      <tr key={index} className="hover:bg-gray-50">
        <td className="py-2 px-4 text-[#707070]">{subscriber.id}</td>
        <td className="py-2 px-4 flex justify-center items-center text-[#707070]">
          <img src={subscriber.img} alt={subscriber.name} className="w-10 h-10 rounded-xl mr-2" />
          {subscriber.name}
        </td>
         <td className="py-2 px-6 text-[#8CAB91]">
         <NavLink to="/subsEdit"> <FiEdit className="mx-auto w-[20px] h-[20px]" /></NavLink>
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

export default ManageSubscription;
