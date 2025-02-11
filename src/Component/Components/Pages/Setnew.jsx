import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";

const Setnew = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Handle password update logic here (e.g., API call)
    alert("Password successfully updated!");
  };

  return (
    <div className="h-screen">
      <section className="bg-[#FFFDFA] dark:bg-gray-900 h-full w-full">
        <div className="container px-6 py-10 mx-auto h-full w-full">
          <div className="h-full lg:flex justify-around lg:items-center w-full">
            <div className="w-1/2">
              <img
                className="w-full h-96 rounded-lg lg:h-[36rem]"
                src="https://res.cloudinary.com/dhlgk023u/image/upload/v1739099836/Path_7_f5ajmx.png"
                alt="Illustration"
              />
            </div>

            <div className="w-[481px]">
              {/* Content */}
              <div>
                {/* Logo */}
                <div className="flex justify-center mb-6">
                  
                </div>

                {/* Heading */}
                <h2 className="text-center font-medium text-[20px] text-[#364636] mb-2 montserrat mt-7">
                  Create a new password
                </h2>
                <p className="text-center font-medium text-[20px] text-[#364636] montserrat mb-6">
                  Ensure it differs from the previous one.
                </p>
                <h1 className="mt-20 text-center text-[30px] font-medium text-[#364636] leading-[64px] montserrat mb-9">
                  Set New Password
                </h1>

                {/* New Password Input */}
                <div className="mb-4">
                  <label className="block text-[#151515] font-medium text-base mb-2">
                    New Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter new password"
                      className="w-full p-2 border border-gray-300 rounded-lg h-[50px] focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-4 text-[#575757]"
                    >
                      {showPassword ? (
                        <FaRegEyeSlash className="w-[24px] h-[24px]" />
                      ) : (
                        <IoEyeOutline className="w-[24px] h-[24px]" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Confirm Password Input */}
                <div className="mb-6 mt-6">
                  <label className="block text-[#515151] font-medium text-base mb-2">
                    Confirm New Password
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Re-enter new password"
                      className="w-full p-2 border border-gray-300 rounded-lg h-[50px] focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-4 text-[#575757]"
                    >
                      {showConfirmPassword ? (
                        <FaRegEyeSlash className="w-[24px] h-[24px]" />
                      ) : (
                        <IoEyeOutline className="w-[24px] h-[24px]" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Confirm Password Button */}
                <button
                  onClick={handleSubmit}
                  className="w-full py-2 bg-[#8CAB91] text-white font-semibold rounded-full hover:opacity-90 transition h-[51px]"
                >
                  CONFIRM PASSWORD
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Setnew;
