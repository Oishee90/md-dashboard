import { useState } from "react";

 // Assuming Register is another component

const Verification = () => {
  // State for the verification code
  const [code, setCode] = useState(["", "", "", ""]);
  const [isModalOpen, setIsModalOpen] = useState(false); // For modal handling

  // Handle input change
  const handleInputChange = (value, index) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    
    if (value && index < 3) {
      document.getElementById(`input-${index + 1}`).focus(); // Automatically focus next input
    }
  };

  // Handle keydown for navigating between inputs
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0 && !code[index]) {
      document.getElementById(`input-${index - 1}`).focus(); // Focus previous input on backspace
    }
  };

  // Handle paste event (only numeric values are allowed)
  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("Text").split("");
    if (pastedData.length === 4) {
      setCode(pastedData);
    }
  };

  // Handle submit
  const handleSubmit = () => {
    // Logic to handle verification (e.g., API call)
    console.log("Code Submitted:", code.join(""));
    // You can manage modal visibility here, for example:
    setIsModalOpen(true); // Assuming you want to show a modal after submission
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
                alt=""
              />
            </div>

            <div className="w-[481px]">
              {/* Content */}
              <div>
                {/* Logo */}
             

                {/* Heading */}
                <h2 className="text-center font-medium text-[20px] text-[#364636] mb-2 montserrat mt-7">
                  Congratulations!
                </h2>
                <p className="text-center font-medium text-[20px] text-[#364636] montserrat mb-6">
                  Please enter your 4 digit code
                </p>
                <h1 className="mt-20 text-center text-5xl font-medium text-[#364636] leading-[64px] montserrat mb-9">
                  Verification Code
                </h1>

                {/* Verification Code Input */}
                <div
                  className="flex justify-center space-x-3 mb-9"
                  onPaste={handlePaste}
                >
                  {code.map((digit, index) => (
                    <input
                      key={index}
                      id={`input-${index}`}
                      type="text"
                      maxLength="1"
                      value={digit}
                      onChange={(e) => handleInputChange(e.target.value, index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      className="w-12 h-12 border border-[#8CAB91] bg-[#E2E9E3] rounded-xl text-center text-lg placeholder:text-[#313131] focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  ))}
                </div>

                {/* Verify Button */}
                <button
                  onClick={handleSubmit}
                  className="w-full py-2 bg-[#8CAB91] text-white font-semibold rounded-full hover:opacity-90 transition h-[51px]"
                >
                  VERIFY
                </button>

                {/* Footer Text */}
                <p className="text-center text-[#364636] font-regular text-base mt-9">
                  You have not received the email?{" "}
                  <a
                    href="#"
                    className="text-red-500 font-regular text-base hover:underline"
                  >
                    Resend
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Component */}
      {isModalOpen && <Register isOpen={isModalOpen} />}
    </div>
  );
};

export default Verification;
