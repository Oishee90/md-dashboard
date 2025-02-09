

const UserDetails = ({ onClose }) => {
    const user = {
        name: 'Dincliniya',
        email: 'mohmuo@gmail.com',
        contactNumber: '+99355574544',
        dob: '17 Dec, 2024',
        subscriptionType: 'Premium subscription',
        address: '68/Joker Vita, Gotham City'
      };
    
            
    return (
        <div className="fixed inset-0 bg-black/10 backdrop-blur-sm bg-opacity-50 flex items-center justify-center ">
        <div className="relative bg-white rounded-lg p-2 w-full max-w-md">
        <button
            onClick={onClose}
            className=" cursor-pointer text-[#FAF1E6] px-4 py-2 rounded  absolute top-[0%] right-[0%] text-lg"
          >
         X
          </button>
        <div className="flex flex-col items-center justify-center bg-[#8CAB91] py-10">
            <div className=""><img src="https://res.cloudinary.com/dhlgk023u/image/upload/v1738496016/9334243_puz7m4.jpg" className="w-28 h-28 rounded-full mr-2" alt="" /></div>
            <h1 className="mt-2 text-[#FAF1E6]  text-xl font-semibold leading-[24px]"> {user.name}</h1>
            <p className="mt-2 text-[#FAF1E6] text-[12px] font-normal">User</p>
        </div>
          <div className="space-y-4 px-6 mt-5 mb-7">
            <div>
              <label className="block text-base font-semibold text-[#364636]">Name</label>
              <p className="mt-1  text-[#555555] text-[12px] font-normal">{user.name}</p>
            </div>
            <div>
              <label className="block text-base font-semibold text-[#364636]">Email</label>
              <p className="mt-1 text-[#555555] text-[12px] font-normal">{user.email}</p>
            </div>
            <div>
              <label className="block text-base font-semibold text-[#364636]">Contact No</label>
              <p className="mt-1 text-[#555555] text-[12px] font-normal">{user.contactNumber}</p>
            </div>
            <div>
              <label className="block text-base font-semibold text-[#364636]">Date of Birth</label>
              <p className="mt-1 text-[#555555] text-[12px] font-normal">{user.dob}</p>
            </div>
            <div>
              <label className="block ttext-base font-semibold text-[#364636]">Subscription Type</label>
              <p className="mt-1 text-[#555555] text-[12px] font-normal">{user.subscriptionType}</p>
            </div>
            <div>
              <label className="block text-base font-semibold text-[#364636]">Address</label>
              <p className="mt-1 text-[#555555] text-[12px] font-normal">{user.address}</p>
            </div>
          </div>
        
        </div>
      </div>
    );
}

export default UserDetails;
