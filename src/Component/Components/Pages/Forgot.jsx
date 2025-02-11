import { useState } from "react";


const Forgot = () => {
    const [name, setName] = useState("");
  
    return (
        <div className="h-screen">
        <section className="bg-[#FFFDFA] dark:bg-gray-900 h-full w-full">
          <div className="container px-6 py-10 mx-auto h-full w-full">
            <div className="h-full lg:flex justify-around lg:items-center w-full">
              <div className="w-1/2">
                <img
                  className="w-full h-96 rounded-lg lg:h-[36rem]"
                  src="https://res.cloudinary.com/dhlgk023u/image/upload/v1739099836/Path_7_f5ajmx.png"
                  alt=""
                />
              </div>
  
              <div className="w-[481px]">
                {/* Content */}
                <h2 className="text-center text-[#2F2F2F] text-5xl font-semibold montserrat leading-[30px]" aria-label="Password update message">
          Forgot Password
        </h2>

        {/* Form */}
        <form  className="mt-8 space-y-4">
          <div>
            <label htmlFor="name" className="block text-base font-normal text-[#364636]">
              Email
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Your Email"
              className="mt-1 w-full rounded-md border h-[50px] border-gray-300 px-4 py-2 text-sm shadow-sm focus:ring-[#000000] focus:border-[#000000]"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full mt-7 bg-[#8CAB91] text-white rounded-full py-3 hover:opacity-90 text-[20px]"
          >
            Send OTP
          </button>
        </form>
              </div>
            </div>
          </div>
        </section>
  
        {/* Modal Component */}
       
      </div>
    );
}

export default Forgot;
