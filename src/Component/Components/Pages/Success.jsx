

const Success = () => {
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


        {/* Heading */}
        <h2
          className="text-center text-[#2F2F2F] mt-20 text-[20px] montserrat leading-[30px]"
          aria-label="Password update message"
        >
          Your password has been updated. Please <br /> change your password regularly.
        </h2>

        {/* Congratulations */}
        <h1
          className="text-center text-[#2F2F2F] mt-20 text-5xl montserrat leading-[30px]"
          aria-label="Congratulations message"
        >
          Congratulations
        </h1>

        {/* Login Button */}
        <button
        //   onClick={handleLoginClick}
          className="w-full py-2 cursor-pointer bg-[#8CAB91] text-white font-semibold rounded-full hover:opacity-90 transition h-[51px] mt-20"
          aria-label="Log in after updating password"
        >
          Continuee
        </button>
    </div>

  
  </div>
  </div>

</section>

      </div>
    );
}

export default Success;
