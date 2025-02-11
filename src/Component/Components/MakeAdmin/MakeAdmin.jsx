import { useState } from "react";
import { AiOutlineDelete, AiOutlinePlus} from "react-icons/ai";
import Admindetail from "./Admindetail";
import Delete from "./Delete";

const MakeAdmin = () => {
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
                        <h1 className="text-2xl font-bold mb-4">Make Admin</h1>
                        <button
                          className="text-white bg-[#8CAB91] rounded-xl px-6 py-2 flex items-center gap-3 cursor-pointer"
                          onClick={() => toggleModal("admin")}
                        >
                          <AiOutlinePlus className="text-[#FAF1E6]" />
                          <h2 className="text-[#FAF1E6]">Make Admin</h2>
                        </button>
                      </div> 
                           <div className="overflow-x-auto overflow-y-auto bg-white mt-7">
             <table className="min-w-full ">
               <thead>
                 <tr className="">
                   <th className="py-4 px-6  text-lg font-bold  open-sns text-[#364636] text-left whitespace-nowrap">S ID.</th>
                   <th className="py-4 px-6 text-lg font-bold  open-sns text-[#364636] text-left whitespace-nowrap">Name</th>
                   <th className="py-4 px-6 text-lg font-bold  open-sns text-[#364636] text-left whitespace-nowrap">Email</th>
                   <th className="py-4 px-6  text-lg font-bold  open-sns text-[#364636] text-left whitespace-nowrap">User Type</th>
                   <th className="py-4 px-6  text-lg font-bold  open-sns text-[#364636] text-left whitespace-nowrap">Action</th>
         
                 </tr>
               </thead>
               <tbody>
                 {subscribers.map((subscriber, index) => (
                   <tr key={index} className="hover:bg-gray-50">
                     <td className="py-2 px-4 text-left text-[#707070]">{subscriber.id}</td>
                     <td className="py-2 px-4  flex items-center text-left text-[#707070]">
                       <img src={subscriber.img} alt={subscriber.name} className="w-10 h-10 rounded-xl mr-2" />
                       {subscriber.name}
                     </td>
                     <td className="py-2 px-6  text-left text-[#707070]">{subscriber.email}</td>
                     <td className="py-2 px-6  text-left text-[#707070]">{subscriber. userType}</td>
                  
                
                     <td className="py-2 px-6  text-left text-[#707070]">
                          <AiOutlineDelete  onClick={() => toggleModal("delete", subscriber.id)}  className="w-[24px] h-[24px] font-normal text-red-500" />
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
            
           </div>
           {openModal && (
        <>
          {openModal === "admin" &&  <Admindetail onClose={() => setOpenModal("")}></Admindetail>}
          {openModal === "delete" && <Delete id={selectedId} onClose={() => setOpenModal("")} />}
        </>
      )}
               </div>
    );
}

export default MakeAdmin;
