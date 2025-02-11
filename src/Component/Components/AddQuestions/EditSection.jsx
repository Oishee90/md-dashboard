import { useState } from "react";

const EditSection = ({ onClose }) => {
      const [name, setName] = useState("");
    return (
        <div className="fixed inset-0 bg-black/10 backdrop-blur-sm flex items-center justify-center">
        <div className="relative bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
          {/* Close Button */}
          <button
              onClick={onClose}
              className=" cursor-pointer rounded-full text-[#FAF1E6] px-3 py-1  bg-[#8CAB91] absolute top-[5%] right-[5%] text-lg"
            >
           X
            </button>
  
          {/* Modal Header */}
          <h2 className="text-xl  mb-4 text-[#000000] font-semibold">Edit New Section</h2>
  
          {/* Input Field */}
          <div className="mt-6">
              <label className="font-semibold  text-[#000000] text-base " htmlFor="">Section Name</label>
          <input
            type="text"
            placeholder="Type Here"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded-lg mb-4 mt-3 border-[#E2E2E2] placeholder:text-[#E2E2E2]"
          />
  </div>
  
  <div className="mt-3">
              <label className="font-semibold  text-[#000000] text-base " htmlFor="">Number of question </label>
          <input
            type="text"
            placeholder="Type Here"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded-lg mb-4 mt-3 border-[#E2E2E2] placeholder:text-[#E2E2E2]"
          />
  </div>
          {/* Action Buttons */}
          <div className="flex justify-start space-x-2">
          
            <button className="bg-[#8CAB91] text-white px-4 py-2 rounded-3xl">
            Publish
            </button>
          </div>
        </div>
      </div>
    );
}

export default EditSection;
