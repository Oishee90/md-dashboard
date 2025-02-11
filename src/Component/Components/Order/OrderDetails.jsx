import { MdArrowBack } from "react-icons/md";
import { NavLink } from "react-router-dom";

const OrderDetails = () => {

  const user = {
    name: "Dindiniya",
    img: "https://res.cloudinary.com/dhlgk023u/image/upload/v1738496016/9334243_puz7m4.jpg" ,
    email: "mahmud@gmail.com",
    contactNumber: "+919355574544",
    dob: "17 Dec, 2024",
    subscriptionType: "Premium subscription",
    address: "68/ Joker Vila, Gotham City",
    collection: [
      {
        title: "My Life",
        orderDate: "05/12/2024",
        image:
          "https://res.cloudinary.com/dhlgk023u/image/upload/v1739246667/Group_1000004213_txfpvv.png",
      },
      {
        title: "My Life",
        orderDate: "05/12/2024",
        image:
          "https://res.cloudinary.com/dhlgk023u/image/upload/v1739246667/Group_1000004213_txfpvv.png",
      },
    ],
  };

  return (
    <div className="">
        <div className="flex items-center gap-4 mb-4">
       <NavLink to="/odermanagement"><div className="text-white bg-[#8CAB91] rounded-xl px-6 py-2"><MdArrowBack className="text-xl" /></div></NavLink> 
         <h1 className="text-2xl font-bold ">Order List</h1>
         </div>
      <div className=" bg-white rounded-lg p-4 container mx-auto  w-1/2">
    

        {/* User Header */}
        <div className="flex flex-col items-center justify-center bg-[#8CAB91] py-10">
          <img
            src={user.img}
            className="w-28 h-28 rounded-full"
            alt="User"
          />
          <h1 className="mt-2 text-[#FAF1E6] text-xl font-semibold leading-[24px]">
            {user.name}
          </h1>
          <p className="mt-2 text-[#FAF1E6] text-[12px] font-normal">User</p>
        </div>

        {/* User Info */}
        <div className="space-y-4 overflow-y-auto max-h-[500px] mt-5 mb-7">
          <div>
            <label className="block text-base font-semibold text-[#364636]">
              Name
            </label>
            <p className="mt-1 text-[#555555] text-[12px] font-normal">
              {user.name}
            </p>
          </div>
          <div>
            <label className="block text-base font-semibold text-[#364636]">
              Email
            </label>
            <p className="mt-1 text-[#555555] text-[12px] font-normal">
              {user.email}
            </p>
          </div>
          <div>
            <label className="block text-base font-semibold text-[#364636]">
              Contact No
            </label>
            <p className="mt-1 text-[#555555] text-[12px] font-normal">
              {user.contactNumber}
            </p>
          </div>
          <div>
            <label className="block text-base font-semibold text-[#364636]">
              Date of Birth
            </label>
            <p className="mt-1 text-[#555555] text-[12px] font-normal">
              {user.dob}
            </p>
          </div>
          <div>
            <label className="block text-base font-semibold text-[#364636]">
              Subscription Type
            </label>
            <p className="mt-1 text-[#555555] text-[12px] font-normal">
              {user.subscriptionType}
            </p>
          </div>
          <div>
            <label className="block text-base font-semibold text-[#364636]">
              Address
            </label>
            <p className="mt-1 text-[#555555] text-[12px] font-normal">
              {user.address}
            </p>
          </div>

          {/* Book Collection Section */}
          <div>
            <label className="block text-base font-semibold whitespace-nowrap  text-[#364636]">
              Dindiya’s Book Collection
            </label>
            <div className="grid grid-cols-2 gap-4 mt-3 w-1/2">
              {user.collection.map((book, index) => (
                <div
                  key={index}
                  className=" p-2 h-[164.89px] text-center"
                >
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full rounded-md object-cover"
                  />
             
                  <p className="text-xs font-semibold whitespace-nowrap  text-[#364636] text-left mt-2">
                    Order Date: <span className="text-[#707070]">{book.orderDate}</span>
                  </p>
                  <div className="mt-2 flex flex-col gap-1">
                    <button className="bg-[#8CAB91] whitespace-nowrap  text-[#FAF1E6] px-3 py-1 rounded-full text-xs">
                      VIEW BOOK
                    </button>
                    <button className="border border-[#8CAB91] text-[#8CAB91] whitespace-nowrap  font-bold px-3 py-1 rounded-full text-xs">
                      PDF DOWNLOAD
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
