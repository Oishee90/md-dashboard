

const Delete = ({ id, onClose }) => {
    return (
            <div className="fixed inset-0 bg-black/10 backdrop-blur-sm flex items-center justify-center">
               <div className="relative bg-white rounded-lg px-6  py-6 w-full max-w-md shadow-lg">
                 {/* Close Button */}
                 <button
                     onClick={onClose}
                     className=" cursor-pointer rounded-full text-[#FAF1E6] px-3 py-1  bg-[#8CAB91] absolute top-[5%] right-[5%] text-lg"
                   >
                  X
                   </button>
         
                 {/* Modal Header */}
               <div className="flex flex-col justify-center items-center">
                <h1 className="text-[#FF3B30]  text-xl font-semibold mt-5">Are you sure !! </h1>
                <p className="leading-[24px] text-2xl text-[#997D00] mt-6 ">Do you want to  delete this content ?</p>
                <div className="flex justify-start space-x-2 mt-6 mb-6">
          
            <button  onClick={() => console.log("Deleting ID:", id)} className="bg-[#8CAB91] text-white px-6 py-2 rounded-2xl cursor-pointer">
            Delete
            </button>
          </div>
              

               </div>
         
       
                 {/* Action Buttons */}
                 
                 </div>
               </div>
           
    );
}

export default Delete;
