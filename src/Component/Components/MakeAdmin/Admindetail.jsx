import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";

const Admindetail = ({onClose}) => {
      const [name, setName] = useState("");
      const [showPassword, setShowPassword] = useState(false);
      const [password, setPassword] = useState("password123");
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
  
            <h2 className="text-xl  mb-4 text-[#000000] font-semibold">Make Admin</h2>

          {/* Input Field */}
          <div className="mt-2">
              <label className="font-semibold  text-[#000000] text-base " htmlFor="">Name</label>
          <input
            type="text"
            placeholder="Type Here"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded-lg mt-3 border-[#E2E2E2] placeholder:text-[#E2E2E2]"
          />
  </div>
      {/* Input Field */}
      <div className="mt-2">
              <label className="font-semibold  text-[#000000] text-base " htmlFor="">Email</label>
          <input
            type="email"
            placeholder="Type Here"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded-lg  mt-3 border-[#E2E2E2] placeholder:text-[#E2E2E2]"
          />
  </div>
      {/* Input Field */}
        <div className="relative">
                  <label
                    htmlFor="password"
                    className="font-semibold  text-[#000000] text-base"
                  >
                    Password
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter new password"
                    className="w-full p-2 border border-gray-300 rounded-lg h-[50px] focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-9 text-[#575757]"
                  >
                    {showPassword ? (
                      <FaRegEyeSlash className="w-[24px] h-[24px]" />
                    ) : (
                      <IoEyeOutline className="w-[24px] h-[24px]" />
                    )}
                  </button>
                </div>
 
  <div className="mt-2">
              <label className="font-semibold  text-[#000000] text-base " htmlFor="">User Type </label>
          <input
            type="text"
            placeholder="Admin"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded-lg  mt-3 border-[#E2E2E2] placeholder:text-[#E2E2E2]"
     
          />
  </div>
          {/* Action Buttons */}
          <div className="flex justify-start space-x-2 mt-3">
          
            <button className="bg-[#8CAB91] text-white px-4 py-2 rounded-3xl">
            Publish
            </button>
          </div>
        </div>
      </div>
    );
}

export default Admindetail;
