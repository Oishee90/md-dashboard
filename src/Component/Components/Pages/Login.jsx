import  { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";

const Login = () => {  
    const [name, setName] = useState("john_doe");
    const [password, setPassword] = useState("password123");
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const applyFilters = (filterValue, event) => {
        console.log('Filter Value:', filterValue);
        console.log('Checked:', event.target.checked);
      };
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission
      console.log("Login submitted with", { name, password });
    };
    return (
        <div className="h-screen"> 
          <section className="bg-[#FFFDFA] dark:bg-gray-900 h-full w-full">
  <div className="container px-6 py-10 mx-auto h-full w-full">
    <div className=" h-full lg:flex justify-around  lg:items-center w-full ">
     <div className="w-1/2"> <img
        className=" w-full h-96 rounded-lg lg:h-[36rem]"
        src="https://res.cloudinary.com/dhlgk023u/image/upload/v1739099836/Path_7_f5ajmx.png"
        alt=""
      /></div>


      <div className="w-[481px]">
        {/* Content */}
        <div className="text-center montserrat">
      
          <h1 className="text-[48px] text-[#364636] font-medium mt-10">
            Login to Account
          </h1>
          <p className="text-base text-[#364636] mt-6">
            Sign in below to access your account
          </p>
        </div>

        {errorMessage && (
          <div className="text-red-500 text-center mt-4">{errorMessage}</div>
        )}

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label
              htmlFor="text"
              className="block text-base font-normal text-[#364636]"
            >
              Username
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Your Username"
          className="w-full p-2 border border-gray-300 rounded-lg h-[50px] focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div className="relative">
            <label
              htmlFor="password"
              className="block text-base font-normal text-[#364636]"
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

          <div className="flex justify-between items-center text-sm">
          <label className="inline-flex items-center cursor-pointer">
  <input
    type="checkbox"
    className="form-checkbox h-5 w-5 text-green-500 focus:ring-green-500 checked:bg-green-500 rounded border-gray-300"
    onChange={(e) => applyFilters(filter.value, e)} // Event handler
  />
  <span className="ml-2 text-[#BBBBBB]">Remember Password</span>
</label>


            <NavLink to="/forgot" className="text-[#FF0000] hover:underline">
              Forgot Password?
            </NavLink>
          </div>
            <button
            type="submit"
            className="w-full cursor-pointer mt-7 bg-[#8CAB91] text-white rounded-full py-3 hover:opacity-90 text-[20px]"
          >
           SIGN IN
          </button>
        </form>
      </div>

      {isModalOpen && <Register isOpen={isModalOpen} />}
    </div>
    </div>

</section>

        </div>
    );
}

export default Login;
