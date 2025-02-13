import { useState } from "react";
import { GoPlus } from "react-icons/go";
const Addquestion = ( {onClose}) => {
      const [name, setName] = useState("");
      const [questions, setQuestions] = useState("");
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
          <h2 className="text-xl  mb-4 text-[#000000] font-semibold">Add New Question</h2>
  
          {/* Input Field */}
          <div className="mt-6">
              <label className="font-semibold  text-[#000000] text-base " htmlFor="">Add Question</label>
          <input
            type="text"
            placeholder="Type Here"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded-lg mb-4 mt-3 border-[#E2E2E2] placeholder:text-[#E2E2E2]"
          />
  </div>
  
  <div className="relative">
         
          <input
            type="text"
            placeholder="Add more questions"
            value={questions}
            onChange={(e) => setQuestions(e.target.value)}
            className="w-full p-2 border rounded-lg mb-4 mt-3 border-[#E2E2E2] placeholder:text-[#E2E2E2]"
          />
          <GoPlus className="absolute top-[35%] right-[3%] w-[35px] h-[24px] text-[#8CAB91]" />
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

export default Addquestion;


