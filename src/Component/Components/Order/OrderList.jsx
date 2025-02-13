import { CiSearch } from "react-icons/ci";
import { PiEye } from "react-icons/pi";
import { IoChevronDownOutline } from "react-icons/io5";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userData } from "../../../data";

const OrderList = () => {
  const navigate = useNavigate(); // Initialize navigate

  const [query, setQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All"); // State to track selected status
  const [subscribers, setSubscribers] = useState(userData);
  const [originalSubscribers] = useState(subscribers); // Save the original list

  const filterSubscribers = (query, status) => {
    let filteredData = originalSubscribers;

    // Filter by name if query is not empty
    if (query) {
      filteredData = filteredData.filter((subscriber) =>
        subscriber.name.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Filter by status if it's not "All"
    if (status !== "All") {
      filteredData = filteredData.filter((subscriber) => subscriber.status.toLowerCase() === status.toLowerCase());
    }

    setSubscribers(filteredData);
  };

  const handleStatusChange = (e) => {
    const selectedStatus = e.target.value;
    setSelectedStatus(selectedStatus);
    filterSubscribers(query, selectedStatus); // Filter based on both query and status
  };

  const handleActionClick = (user) => {
    navigate(`/order-details`, { state: { user } }); // Navigate to OrderDetails
  };
    // Function to return color based on status
    const getStatusColor = (status) => {
      switch (status) {
        case 'pending':
          return 'text-[#A19618]'; // Pending color
        case 'cancel':
          return 'text-[#FF0000]'; // Cancel color
        case 'confirm':
          return 'text-[#00FF26]'; // Confirm color
        default:
          return 'text-[#000000]'; // Default color (black)
      }
    }

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between pt-2">
        <h1 className="text-2xl font-bold mb-4">Order List</h1>
        <div className="p-4">
          <div className="flex gap-6 items-center">
            {/* Search Bar */}
            <div className="relative w-full max-w-md bg-[#F8F8F8] text-[#595D62]">
              <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  filterSubscribers(e.target.value, selectedStatus); // Filter based on name and selected status
                }}
                className="w-full px-10 py-2 border border-[#E2E2E2] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {!query && (
                <div className="absolute inset-y-0 left-3 flex items-center text-[#595D62]">
                  <CiSearch className="w-5 h-5" />
                </div>
              )}
            </div>

            {/* Status Dropdown */}
            <div className="relative w-fit bg-[#F8F8F8] rounded-lg flex items-center px-4 py-2 border border-[#E2E2E2]">
              <select
                className="bg-[#F8F8F8] text-[#595D62] text-sm pl-2 pr-6 py-1 cursor-pointer outline-none appearance-none"
                value={selectedStatus}
                onChange={handleStatusChange}
              >
                <option value="All">All</option>
                <option value="confirm">Confirm</option>
                <option value="pending">Pending</option>
                <option value="cancel">Cancel</option>
              </select>
              <IoChevronDownOutline className="absolute right-2 text-[#000000] w-4 h-4 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto overflow-y-auto bg-white mt-7">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="py-4 px-6 text-lg font-bold open-sns text-[#364636] text-left whitespace-nowrap">S no.</th>
              <th className="py-4 px-6 text-lg font-bold open-sns text-[#364636] text-left whitespace-nowrap">Name</th>
              <th className="py-4 px-6 text-lg font-bold open-sns text-[#364636] text-left whitespace-nowrap">Email</th>
              <th className="py-4 px-6 text-lg font-bold open-sns text-[#364636] text-left whitespace-nowrap">Contact Number</th>
              <th className="py-4 px-6 text-lg font-bold open-sns text-[#364636] text-left whitespace-nowrap">Status</th>
              <th className="py-4 px-6 text-lg font-bold open-sns text-[#364636] text-left whitespace-nowrap">Location</th>
              <th className="py-4 px-6 text-lg font-bold open-sns text-[#364636] text-left whitespace-nowrap">Action</th>
            </tr>
          </thead>
          <tbody>
            {subscribers.map((subscriber, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="py-2 px-4 text-left text-[#707070]">{subscriber.sno}</td>
                <td className="py-2 px-4 flex items-center text-left text-[#707070]">
                  <img src={subscriber.img} alt={subscriber.name} className="w-10 h-10 rounded-xl mr-2" />
                  {subscriber.name}
                </td>
                <td className="py-2 px-6 text-left text-[#707070]">{subscriber.email}</td>
                <td className="py-2 px-6 text-left text-[#707070]">{subscriber.contactNumber}</td>
                <td className={`py-2 px-6 text-left ${getStatusColor(subscriber.status)}`}>{subscriber.status}</td>
                <td className="py-2 px-6 text-left text-[#707070]">{subscriber.location}</td>
                <td className="py-2 px-6 text-left text-[#707070]">
                  <button onClick={() => handleActionClick(subscriber)} className="text-[#555555] hover:text-[#424242] cursor-pointer">
                    <PiEye className="h-6 w-6" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;
