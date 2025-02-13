import { useRef, useState } from "react";
import Swal from "sweetalert2"; // Import SweetAlert
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarAlt } from "react-icons/fa";

const CuponEdit = () => {
      const [packageName, setPackageName] = useState("Order Hard Copy");
          const [packagePrice, setPackagePrice] = useState("$30");
          const [discount, setDiscount] = useState("20%");
          const [startDate, setStartDate] = useState("08/11/24");
          const [endDate, setEndDate] = useState("08/11/24");
          const startDateRef = useRef(null);
          const endDateRef = useRef(null);
           const handleEdit= () => {
                      Swal.fire({
                        title: 'Success!',
                        text: 'Your action has been published successfully.',
                        icon: 'success',
                        confirmButtonText: 'OK',
                        timer: 3000 // Auto-close after 3 seconds
                      });
                    };
    return (
              <div className="flex flex-col items-center px-4 w-1/2 container mx-auto bg-white py-4">
                   {/* Logo & Header */}
                   <div className="w-full h-[200px] bg-[#FAF1E6] py-10 flex justify-center items-center mb-6 pt-6 pb-6 gap-4">
                     <img src="https://res.cloudinary.com/dhlgk023u/image/upload/v1739004543/Group_1000004237_vskv4o.png" alt="Logo" className=" " />
                     <h2 className="text-[#6C8B74] text-lg font-semibold">
                       una historia para siempre
                     </h2>
                   </div>
             
                   {/* Form Container */}
                   <div className=" p-6 w-full ">
                     {/* Package Name & Price */}
                     <div className="grid grid-cols-2 gap-6  w-1/2">
                       <div className="">
                         <label className="block roboto text-[#364636] font-semibold mb-1 text-base">
                           Package Name
                         </label>
                         <select
                           value={packageName}
                           onChange={(e) => setPackageName(e.target.value)}
                           className="w-full form-select border border-[#8CAB91] p-2 bg-white text-[#364636]"
                         >
                           <option>Order Hard Copy</option>
                           <option>Soft Copy</option>
                           <option>Premium Package</option>
                         </select>
                       </div>
                       <div>
                         <label className="block roboto text-[#364636] font-semibold mb-1 text-base">
                           Package Price
                         </label>
                         <select
                           value={packagePrice}
                           onChange={(e) => setPackagePrice(e.target.value)}
                           className="w-full border form-select border-[#8CAB91] p-2 bg-white text-[#364636]"
                         >
                           <option>$30</option>
                           <option>$50</option>
                           <option>$100</option>
                         </select>
                       </div>
                     </div>
             
                     {/* Discount Section */}
                     <div className="mt-4">
                         <h1 className="block text-[#364636] roboto font-semibold mb-4"> Discount</h1>
                       <label className="block text-[#000000] text-[14px] roboto font-normal mb-1">
                       Amount
                       </label>
                       <div className="gap-4">
                         <select
                           value={discount}
                           onChange={(e) => setDiscount(e.target.value)}
                           className=" w-1/2 border border-[#8CAB91] p-2 bg-white text-[#364636]"
                         >
                           <option>20%</option>
                           <option>30%</option>
                           <option>50%</option>
                         </select>
                         </div>
                         <div className="grid grid-cols-2 gap-4 mt-6 w-1/2">
                   {/* Start Date with Calendar Icon */}
                   <div>
                     <label className="block text-[#000000] text-[14px] roboto font-normal mb-1">
                       Start Date
                     </label>
                     <div className="relative">
                     <div className="calender">
                       <DatePicker
                         selected={startDate}
                         onChange={(date) => setStartDate(date)}
                         className="w-full  border border-[#8CAB91] p-2 bg-white rounded-2xl text-[#364636] pl-10"
                         dateFormat="dd/MM/yyyy"
                         placeholderText="Select end date"
                         ref={endDateRef} // Attach ref to input
                       /></div>
                     <FaRegCalendarAlt
                      selected={startDate}
                         className="absolute top-1/2 transform -translate-y-1/2 right-[5%] text-[#8CAB91] cursor-pointer"
                         onClick={() => startDateRef.current.setFocus()} // Proper way to open DatePicker
                       />
               
                     </div>
                   </div>
             
                   {/* End Date with Calendar Icon */}
                   <div>
                     <label className="block text-[#000000] text-[14px] roboto font-normal mb-1">
                       End Date
                     </label>
                     <div className="relative  ">
                     <div className="calender">
                       <DatePicker
                         selected={endDate}
                         onChange={(date) => setEndDate(date)}
                         className="w-full  border border-[#8CAB91] p-2 bg-white rounded-2xl text-[#364636] pl-10"
                         dateFormat="dd/MM/yyyy"
                         placeholderText="Select end date"
                         ref={endDateRef} // Attach ref to input
                       /></div>
                     <FaRegCalendarAlt
                          selected={endDate}s
                         className="absolute top-1/2 transform -translate-y-1/2 right-[5%] text-[#8CAB91] cursor-pointer"
                         onClick={() => endDateRef.current.setFocus()} // Proper way to open DatePicker
                       />
               
                     
                     </div>
                   </div>
                 </div>
                         
                       </div>
                   
             
             
             
                     {/* Submit Button */}
                     <div className="mt-6 flex justify-center w-full">
               <div className="w-1/2">
                 <button onClick={handleEdit} className="bg-[#8CAB91] w-full text-center text-white px-9 py-3 rounded-full text-lg font-semibold hover:bg-[#6C8B74] cursor-pointer transition">
                 Update
                 </button>
               </div>
             </div>
             
             
                   </div>
                 </div>
    );
}

export default CuponEdit;
