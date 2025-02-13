

import { AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";



const Notification = () => {
    return (
        <div className="container mx-auto">
        {/* Header */}
        <div className="flex items-center justify-end pt-2 mb-3">
       
          <button
            className="text-white border border-[#8CAB91] rounded-xl px-6 py-2 flex items-center gap-3 cursor-pointer"
            // onClick={() => toggleModal("add")}
          >
   
            <h2 className="text-[#8CAB91]">Read All</h2>
          </button>
        </div>
  
        {/* Section List */}
        <div className="px-6 py-12 bg-white rounded-lg shadow-2xl dark:bg-gray-800">
          <div className="flex py-3 items-center border-[#8CAB91] bg-[#FAF1E6] border rounded-xl justify-between px-6">
            <div className="flex  flex-col  ">
              <h1 className="text-[#364636] font-bold leading-[36px]  font-xl flex items-center gap-9">A new Order has arrived
              <span className="text-[#919191] font-normal leading-[24px]">8:00am, today</span></h1>
              <p className="text-[#919191] leading-[24px] font-bold font-2xl">A new student has subscribed in car study</p>
            </div>
            <div className="flex flex-row items-center gap-3 cursor-pointer">
        <h1 className="text-[#8CAB91] font-normal text-xl">View</h1>
            </div>
          </div>
        </div>
  
        {/* Modal Logic */}
        {/* {openModal && (
          <>
            {openModal === "add" && <Addquestion onClose={() => setOpenModal("")}></Addquestion>}
            {openModal === "edit" &&  <EditQuestion section={selectedSection} onClose={() => setOpenModal("")}></EditQuestion>}
          </>
        )} */}
      </div>
    );
}

export default Notification;
