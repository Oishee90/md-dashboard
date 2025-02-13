import { useState } from "react";
import { FiCamera } from "react-icons/fi";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import Swal from "sweetalert2"; // Import SweetAlert2
const Profile = () => {
       const [password, setPassword] = useState("password123");
       const [newpassword, setNewPassword] = useState("password123");
       const [confirmpassword, setConfirmPassword] = useState("password123");
    const [currentshowPassword, setCurrentShowPassword] = useState(false);
    const [newshowPassword, setNewShowPassword] = useState(false);
    const [confirmshowPassword, setConfirmShowPassword] = useState(false);
   
    const [selectedImage, setSelectedImage] = useState(null);
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [contact, setContact] = useState(null);
    const [address, setaddress] = useState(null);
    const [activeTab, setActiveTab] = useState('edit'); // State to track active tab
    const [profile, setProfile] = useState({})
    const user = {
        name: 'Mr.Alejandro mateu',
        email: 'mohmuo@gmail.com',
        contactNumber: '+99355574544',
        dob: '17 Dec, 2024',
        subscriptionType: 'Premium subscription',
        address: '68/Joker Vita, Gotham City',
        usertype:"admin",
      };
      const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          setSelectedImage(file);
          setProfile({ ...profile, image: URL.createObjectURL(file) }); // Show preview
        }
      };
      const handleSave = () => {
          Swal.fire({
            title: 'Success!',
            text: 'Successfuly Save User Information.',
            icon: 'success',
            confirmButtonText: 'OK',
            timer: 3000 // Auto-close after 3 seconds
          });
        };
        const handleChange = () => {
          Swal.fire({
            title: 'Success!',
            text: 'Successfuly Save User Information.',
            icon: 'success',
            confirmButtonText: 'OK',
            timer: 3000 // Auto-close after 3 seconds
          });
        };
    return (
        <div className="w-1/2 container mx-auto ">
              <div className="flex flex-row items-center justify-center gap-6 bg-[#8CAB91]  rounded-lg py-10">
            <div className=" relative"><img src="https://res.cloudinary.com/dhlgk023u/image/upload/v1738496016/9334243_puz7m4.jpg" className="w-28 h-28 rounded-full border-2 border-[#FAF1E6] mr-2" alt="" />
            <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            id="imageUpload"
            className="hidden"
          />
            <label
              htmlFor="imageUpload"
              className="absolute top-[75%] right-[15%] rounded-full p-2 bg-white z-20  cursor-pointer"
              style={{ transform: "translate(50%, -50%)" }}
            >
              <FiCamera  className="text-[#CCA700] w-[20px] h-[20px]" />
            </label></div>
     
            <div className="flex flex-col  gap-2">
            <h1 className=" text-[#FAF1E6]  text-xl font-semibold leading-[24px]"> {user.name}</h1>
            <p className=" text-[#FAF1E6]  text-xl font-semibold leading-[24px]">{user.usertype}</p>
            </div>
          
     
        </div>
        <div className="flex justify-center items-center gap-8 mt-4 py-8">
      {/* edit */}
      <div
        onClick={() => setActiveTab('edit')}
        className="cursor-pointer"
      
      >
        <h1  className={` font-semibold text-xl leading-[24px] mb-2 ${activeTab === 'edit' ? ' text-[#8CAB91]' : 'text-black'}`}>Edit Profile</h1>
        <div   className={`cursor-pointer w-full ${activeTab === 'edit' ? 'border-b-2 border-[#8CAB91] text-[#8CAB91]' : 'text-black'}`}></div>
      </div>

      {/* change password */}
      <div
        onClick={() => setActiveTab('changePassword')}
       className="cursor-pointer"
      >
        <h1  className={` font-semibold text-xl leading-[24px] mb-2 ${activeTab === 'changePassword' ? ' text-[#8CAB91]' : 'text-black'}`} >Change Password</h1>
        <div   className={`cursor-pointer w-full  ${activeTab === 'changePassword' ? 'border-b-2 border-[#8CAB91] text-[#8CAB91] ' : 'text-black'}`}></div>
      </div>
    </div>
    {activeTab === 'edit' && (
          <div className="space-y-4 px-10 py-10 mt-5 mb-7 bg-white">
         
        <form
        //  onSubmit={handleSubmit}
          className="mt-8 space-y-4">
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
          className="w-full mt-2 p-2 border border-gray-300 rounded-lg h-[50px] focus:outline-none focus:ring-2 focus:ring-[#364636]"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-base font-normal text-[#364636]"
            >
             Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Username"
          className="w-full mt-2 p-2 border border-gray-300 rounded-lg h-[50px] focus:outline-none focus:ring-2 focus:ring-[#364636]"
              required
            />
          </div>
          <div>
            <label
              htmlFor="number"
              className="block text-base font-normal text-[#364636]"
            >
             Contact Numnber
            </label>
            <input
              type="text"
              id="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="+99007007007"
          className="w-full  mt-2 p-2 border border-gray-300 rounded-lg h-[50px] focus:outline-none focus:ring-2 focus:ring-[#364636]"
              required
            />
          </div>
          <div>
            <label
              htmlFor="number"
              className="block text-base font-normal text-[#364636]"
            >
            Address
            </label>
            <input
              type="text"
              id="text"
              value={address}
              onChange={(e) => setaddress(e.target.value)}
              placeholder="79/A Joker Vila, Gotham City"
          className="w-full p-2 mt-2 border border-gray-300 rounded-lg h-[50px] focus:outline-none focus:ring-2 focus:ring-[#364636]"
              required
            />
          </div>

          {/* <div className="relative">
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
          </div> */}
        <div className="mt-6 flex justify-center w-full">
  <div className="w-1/2">
  <button onClick={handleSave}
            type="submit"
            className="w-full cursor-pointer mt-7 bg-[#8CAB91] text-white rounded-full py-3 hover:opacity-90 text-[20px]"
          >
           Save And Changes 
          </button>
  </div>
</div>
        
           
        </form>
          </div>) }
          
          
          
          
          
          
          
          {activeTab === 'changePassword' &&    
          
          (
            <div className="space-y-4 px-10 py-10 mt-5 mb-7 bg-white">
         
         <form
         //  onSubmit={handleSubmit}
           className="mt-8 space-y-4">
           <div className="relative">
             <label
               htmlFor="password"
               className="block text-base font-normal text-[#364636]"
             >
              Current  Password
             </label>
             <input
               type={currentshowPassword ? "text" : "password"}
               id="password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               placeholder="Enter new password"
               className="w-full p-2 border border-gray-300 rounded-lg h-[50px] focus:outline-none focus:ring-2 focus:ring-purple-500"
               required
             />
             <button
               type="button"
               onClick={() => setCurrentShowPassword(!currentshowPassword)}
               className="absolute right-3 top-9 text-[#575757]"
             >
               {currentshowPassword  ? (
                 <FaRegEyeSlash className="cursor-pointer w-[24px] h-[24px]" />
               ) : (
                 <IoEyeOutline className="cursor-pointer w-[24px] h-[24px]" />
               )}
             </button>
           </div> 
           {/* new password */}
           <div className="relative">
             <label
               htmlFor="password"
               className="block text-base font-normal text-[#364636]"
             >
              New Password 
             </label>
             <input
               type={newshowPassword ? "text" : "password"}
               id="password"
               value={newpassword}
               onChange={(e) => setNewPassword(e.target.value)}
               placeholder="Enter new password"
               className="w-full p-2 border border-gray-300 rounded-lg h-[50px] focus:outline-none focus:ring-2 focus:ring-purple-500"
               required
             />
             <button
               type="button"
               onClick={() => setNewShowPassword(!newshowPassword)}
               className="absolute right-3 top-9 text-[#575757]"
             >
               {newshowPassword  ? (
                 <FaRegEyeSlash className="cursor-pointer w-[24px] h-[24px]" />
               ) : (
                 <IoEyeOutline className="cursor-pointer w-[24px] h-[24px]" />
               )}
             </button>
           </div> 
    
           <div className="relative">
             <label
               htmlFor="password"
               className="block text-base font-normal text-[#364636]"
             >
              Confirm Password  
             </label>
             <input
               type={confirmshowPassword ? "text" : "password"}
               id="password"
               value={confirmpassword}
               onChange={(e) => setConfirmPassword(e.target.value)}
               placeholder="Enter new password"
               className="w-full p-2 border border-gray-300 rounded-lg h-[50px] focus:outline-none focus:ring-2 focus:ring-purple-500"
               required
             />
             <button
               type="button"
               onClick={() => setConfirmShowPassword(!confirmshowPassword)}
               className="absolute right-3 top-9 text-[#575757]"
             >
               {confirmpassword  ? (
                 <FaRegEyeSlash className="cursor-pointer w-[24px] h-[24px]" />
               ) : (
                 <IoEyeOutline className=" cursor-pointer w-[24px] h-[24px]" />
               )}
             </button>
           </div> 
 
           {/* <div className="relative">
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
           </div> */}
         <div className="mt-6 flex justify-center w-full">
   <div className="w-1/2">
   <button
   onClick={handleChange}
             type="submit"
             className="w-full cursor-pointer mt-7 bg-[#8CAB91] text-white rounded-full py-3 hover:opacity-90 text-[20px]"
           >
            Save And Changes 
           </button>
   </div>
 </div>
         
            
         </form>
           </div>

          ) }
        </div>
    );
}

export default Profile;
