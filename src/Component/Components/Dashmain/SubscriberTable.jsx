import { useState } from "react";
import { PiEye } from "react-icons/pi";
import UserDetails from "./UserDetails";

const SubscriberTable = ({ subscribers }) => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleActionClick = (user) => {
    setSelectedUser(user);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
  };

  return (
    <div className="overflow-x-auto overflow-y-auto bg-white">
      <table className="min-w-full">
        <thead>
          <tr className="">
            <th className="py-4 px-6 text-lg font-bold open-sns text-[#364636] text-left whitespace-nowrap">S no.</th>
            <th className="py-4 px-6 text-lg font-bold open-sns text-[#364636] text-left whitespace-nowrap">Name</th>
            <th className="py-4 px-6 text-lg font-bold open-sns text-[#364636] text-left whitespace-nowrap">Email</th>
            <th className="py-4 px-6 text-lg font-bold open-sns text-[#364636] text-left whitespace-nowrap">Contact Number</th>
            <th className="py-4 px-6 text-lg font-bold open-sns text-[#364636] text-left whitespace-nowrap">Location</th>
            <th className="py-4 px-6 text-lg font-bold open-sns text-[#364636] text-left whitespace-nowrap">Subscription Type</th>
            <th className="py-4 px-6 text-lg font-bold open-sns text-[#364636] text-left whitespace-nowrap">Income</th>
            <th className="py-4 px-6 text-lg font-bold open-sns text-[#364636] text-left whitespace-nowrap">Action</th>
          </tr>
        </thead>
        <tbody>
          {subscribers.map((subscriber) => (
            <tr key={subscriber.sno} className="hover:bg-gray-50">
              <td className="py-2 px-4 text-left text-[#707070]">{subscriber.sno}</td>
              <td className="py-2 px-4 flex items-center text-left text-[#707070]">
                <img src={subscriber.img} alt={subscriber.name} className="w-10 h-10 rounded-xl mr-2" />
                {subscriber.name}
              </td>
              <td className="py-2 px-6 text-left text-[#707070]">{subscriber.email}</td>
              <td className="py-2 px-6 text-left text-[#707070]">{subscriber.contactNumber}</td>
              <td className="py-2 px-6 text-left text-[#707070]">{subscriber.location}</td>
              <td className="py-2 px-6 text-left text-[#707070]">{subscriber.subscriptionType}</td>
              <td className="py-2 px-6 text-left text-[#707070]">{subscriber.income}</td>
              <td className="py-2 px-6 text-left text-[#707070]">
                <button
                  onClick={() => handleActionClick(subscriber)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  <PiEye className="h-6 w-6" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedUser && <UserDetails user={selectedUser} onClose={handleCloseModal} />}
    </div>
  );
};

export default SubscriberTable;
