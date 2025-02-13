/* eslint-disable react/no-unknown-property */
import { LuUsersRound } from "react-icons/lu";
import { BiTrendingUp } from "react-icons/bi";
import { CiBag1 } from "react-icons/ci";
import { BarChart, Bar, XAxis, YAxis, Tooltip, AreaChart, Area, ResponsiveContainer } from "recharts";
import SubscriberTable from "./SubscriberTable";
import { CiSearch } from "react-icons/ci";
import { useEffect, useRef, useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { userData } from "../../../data";
const Dashboards = () => {
  const [query, setQuery] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [open, setOpen] = useState(false);
  const pickerRef = useRef(null);
  const [subscribers, setSubscribers] = useState(userData);
  const [selectedYear, setSelectedYear] = useState("2022");
  const [selectedYearGrowth, setSelectedYearGrowth] = useState("2022");
  const [selectedYearIncome, setSelectedYearIncome] = useState("2022");
  const [originalSubscribers] = useState(subscribers);

  const filterSubscribers = (query) => {
    if (query === "") {
      setSubscribers(originalSubscribers); // Reset to original list if query is empty
    } else {
      const filteredData = originalSubscribers.filter((subscriber) =>
        subscriber.name.toLowerCase().includes(query.toLowerCase())
      );
      setSubscribers(filteredData);
    }
  };

  const [filter, setFilter] = useState("All");

  // Filter subscribers based on selected filter
  const filteredSubscribers = filter === "All"
    ? subscribers
    : subscribers.filter(subscriber => subscriber.subscriptionType === filter);

  // Handle filter change
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  // Close date picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const subscriberDataByYear = {
    2022: [
      { month: "Jan", value: 90 },
      { month: "Feb", value: 70 },
      { month: "Mar", value: 30 },
      { month: "Apr", value: 60 },
      { month: "May", value: 40 },
      { month: "Jun", value: 20 },
      { month: "Jul", value: 75 },
      { month: "Aug", value: 50 },
      { month: "Sep", value: 80 },
      { month: "Oct", value: 85 },
      { month: "Nov", value: 80 },
      { month: "Dec", value: 40 }
    ],
    2023: [
      { month: "Jan", value: 120 },
      { month: "Feb", value: 110 },
      { month: "Mar", value: 95 },
      { month: "Apr", value: 140 },
      { month: "May", value: 130 },
      { month: "Jun", value: 100 },
      { month: "Jul", value: 150 },
      { month: "Aug", value: 140 },
      { month: "Sep", value: 110 },
      { month: "Oct", value: 135 },
      { month: "Nov", value: 125 },
      { month: "Dec", value: 145 }
    ],
    2024: [
      { month: "Jan", value: 80 },
      { month: "Feb", value: 100 },
      { month: "Mar", value: 105 },
      { month: "Apr", value: 90 },
      { month: "May", value: 120 },
      { month: "Jun", value: 130 },
      { month: "Jul", value: 115 },
      { month: "Aug", value: 125 },
      { month: "Sep", value: 110 },
      { month: "Oct", value: 105 },
      { month: "Nov", value: 140 },
      { month: "Dec", value: 150 }
    ]
  };
  const userGrowthData = {
    2022: [
      { month: "Jan", value: 10 },
    { month: "Feb", value: 60 },
    { month: "Mar", value: 30 },
    { month: "Apr", value: 80 },
    { month: "May", value: 50 },
    { month: "Jun", value: 100 },
    { month: "Jul", value: 60 },
    { month: "Aug", value: 90 },
    { month: "Sep", value: 50 },
    { month: "Oct", value: 70 },
    { month: "Nov", value: 65 },
    { month: "Dec", value: 55 }
    ],
    2023: [
      { month: "Jan", value: 120 },
      { month: "Feb", value: 110 },
      { month: "Mar", value: 95 },
      { month: "Apr", value: 140 },
      { month: "May", value: 130 },
      { month: "Jun", value: 100 },
      { month: "Jul", value: 150 },
      { month: "Aug", value: 140 },
      { month: "Sep", value: 110 },
      { month: "Oct", value: 135 },
      { month: "Nov", value: 125 },
      { month: "Dec", value: 145 }
    ],
    2024: [
      { month: "Jan", value: 80 },
      { month: "Feb", value: 100 },
      { month: "Mar", value: 105 },
      { month: "Apr", value: 90 },
      { month: "May", value: 120 },
      { month: "Jun", value: 130 },
      { month: "Jul", value: 115 },
      { month: "Aug", value: 125 },
      { month: "Sep", value: 110 },
      { month: "Oct", value: 105 },
      { month: "Nov", value: 140 },
      { month: "Dec", value: 150 }
    ]
  };
  
  const incomeData = {
    2022: [
      { month: "Jan", value: 12000 },
    { month: "Feb", value: 13000 },
    { month: "Mar", value: 14000 },
    { month: "Apr", value: 18000 },
    { month: "May", value: 22000 },
    { month: "Jun", value: 25000 },
    { month: "Jul", value: 35000 },
    { month: "Aug", value: 30000 },
    { month: "Sep", value: 27000 },
    { month: "Oct", value: 26000 },
    { month: "Nov", value: 24000 },
    { month: "Dec", value: 20000 }
    ],
    2023: [
      { month: "Jan", value: 120 },
      { month: "Feb", value: 110 },
      { month: "Mar", value: 95 },
      { month: "Apr", value: 140 },
      { month: "May", value: 130 },
      { month: "Jun", value: 100 },
      { month: "Jul", value: 150 },
      { month: "Aug", value: 140 },
      { month: "Sep", value: 110 },
      { month: "Oct", value: 135 },
      { month: "Nov", value: 125 },
      { month: "Dec", value: 145 }
    ],
    2024: [
      { month: "Jan", value: 80 },
      { month: "Feb", value: 100 },
      { month: "Mar", value: 105 },
      { month: "Apr", value: 90 },
      { month: "May", value: 120 },
      { month: "Jun", value: 130 },
      { month: "Jul", value: 115 },
      { month: "Aug", value: 125 },
      { month: "Sep", value: 110 },
      { month: "Oct", value: 105 },
      { month: "Nov", value: 140 },
      { month: "Dec", value: 150 }
    ]
  };
  

 


  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };
  const handleYearGrowChange = (event) => {
    setSelectedYearGrowth(event.target.value);
  };
  const handleYearIncomeChange= (event) => {
    setSelectedYearIncome(event.target.value);
  };



  

  return (
    <div className="flex min-h-screen container mx-auto  flex-col  ">
      {/* chartsss */}
      <div className=" bg-white">
        <div className="px-7 py-7">
          <div className="grid grid-cols-3 gap-4">
            {/* card-1 */}
            <div className=" px-6 py-12 bg-white rounded-lg shadow-2xl dark:bg-gray-800">
              <div className="flex items-center justify-around">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <path d="M26.8315 16.3456C28.924 16.0516 30.535 14.2576 30.5395 12.0841C30.5395 9.94208 28.978 8.16608 26.9305 7.83008" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M29.5928 21.376C31.6193 21.679 33.0338 22.3885 33.0338 23.851C33.0338 24.8575 32.3678 25.5115 31.2908 25.9225" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M17.8299 21.9961C13.0089 21.9961 8.89136 22.7266 8.89136 25.6441C8.89136 28.5601 12.9834 29.3116 17.8299 29.3116C22.6509 29.3116 26.7669 28.5886 26.7669 25.6696C26.7669 22.7506 22.6764 21.9961 17.8299 21.9961Z" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M17.8299 17.832C20.9934 17.832 23.5584 15.2685 23.5584 12.1035C23.5584 8.94 20.9934 6.375 17.8299 6.375C14.6664 6.375 12.1014 8.94 12.1014 12.1035C12.0894 15.2565 14.6349 17.8215 17.7879 17.832H17.8299Z" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M8.82714 16.3456C6.73314 16.0516 5.12364 14.2576 5.11914 12.0841C5.11914 9.94208 6.68064 8.16608 8.72814 7.83008" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M6.06576 21.376C4.03926 21.679 2.62476 22.3885 2.62476 23.851C2.62476 24.8575 3.29076 25.5115 4.36776 25.9225" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <div className="flex flex-col items-center gap-3">
                  <h1 className="text-xl open-sns font-bold">10</h1>
                  <p className="text-base open-sns text-[#8CAB91] ">Total user</p>
                </div>

              </div>

            </div>

            {/* card-2 */}
            <div className=" px-6 py-12 bg-white rounded-lg shadow-2xl dark:bg-gray-800">
              <div className="flex items-center justify-around">
                <LuUsersRound className="w-8 h-7" />

                <div className="flex flex-col items-center gap-3">
                  <h1 className="text-[14px] open-sns font-regular text-[#8CAB91] "><span className="text-2xl text-[#364636] font-bold">$1k </span>  70%</h1>

                  <p className="text-base open-sns text-[#8CAB91] ">Total  subscriber</p>
                </div>

              </div>

            </div>
            {/* card-3 */}
            <div className=" px-6 py-12 bg-white rounded-lg shadow-2xl dark:bg-gray-800">
              <div className="flex items-center justify-around">
                <CiBag1 className="w-8 h-7" />

                <div className="flex flex-col items-center gap-3">

                  <div className="relative"><h1 className="text-[14px] open-sns font-regular text-[#8CAB91] "><span className="text-2xl text-[#364636] font-bold">$1k </span> 70%</h1>
                    <BiTrendingUp className="absolute top-[-14%] right-[-5%] w-[43px] h-[22px] text-[#34C759]" /></div>
                  <p className="text-base open-sns text-[#8CAB91] ">Total  subscriber</p>
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* rechart */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          {/* Subscriber Growth Chart */}
          <div className="bg-white p-4 rounded-xl shadow-xl shadow-gray-300">
      <div className="mb-7 px-3 py-3">
        <div className="flex justify-between items-center gap-5">
          <h2 className="text-lg font-bold text-[#0B1826]">Subscriber Growth</h2>
          <div className="relative w-fit bg-[#F8F8F8] rounded-lg flex items-center px-4 py-2 border border-[#E2E2E2]">
            <select
              value={selectedYear}
              onChange={handleYearChange}
              className="bg-[#F8F8F8] text-[#595D62] text-sm pl-2 pr-6 py-1 cursor-pointer outline-none appearance-none"
            >
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
            </select>
            <IoChevronDownOutline className="absolute right-2 text-[#000000] w-4 h-4 pointer-events-none" />
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={subscriberDataByYear[selectedYear]}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#6b8e72" />
        </BarChart>
      </ResponsiveContainer>
    </div>
          {/* User Growth Chart */}
          <div className="bg-white p-4 rounded-xl shadow-xl shadow-gray-300 ">
            <div className="mb-7  px-3 py-3">

              <div className="flex justify-between items-center gap-5">
                <h2 className="text-lg font-bold  text-[#0B1826] ">User Growth</h2>
                <div className="relative w-fit bg-[#F8F8F8] rounded-lg flex items-center px-4 py-2 border border-[#E2E2E2]">
                  <select 
                   value={selectedYearGrowth}
                   onChange={handleYearGrowChange}
                  className="bg-[#F8F8F8] text-[#595D62] text-sm pl-2 pr-6 py-1 cursor-pointer outline-none appearance-none">
                    <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
                  </select>
                  <IoChevronDownOutline className="absolute right-2 text-[#000000] w-4 h-4 pointer-events-none" />
                </div>
              </div>
            </div>

            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={userGrowthData[selectedYearGrowth]}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="value" fill="#6b8e72" stroke="#6b8e72" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Income Report Chart */}
          <div className="col-span-1 md:col-span-2 bg-white p-4 rounded-xl shadow-md">
            <div className="flex justify-between items-center gap-5 px-3 py-3">
              <h2 className="text-lg font-semibold mb-2">Income Report</h2>
              <div className="relative w-fit bg-[#F8F8F8] rounded-lg flex items-center px-4 py-2 border border-[#E2E2E2]">
                <select    value={selectedYearIncome}
                   onChange={handleYearIncomeChange}
                className="bg-[#F8F8F8] text-[#595D62] text-sm pl-2 pr-6 py-1 cursor-pointer outline-none appearance-none">
                   <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
                </select>
                <IoChevronDownOutline className="absolute right-2 text-[#000000] w-4 h-4 pointer-events-none" />
              </div>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={incomeData [selectedYearIncome]}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="value" fill="#6b8e72" stroke="#6b8e72" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      {/* user information */}
      <div className="p-4 mt-7 bg-white">
        <div className="flex items-center justify-between px-3 py-3"> <h1 className="text-2xl font-bold mb-4">Subscriber List</h1>
          <div className="p-4  ">
            <div className="flex gap-6 items-center">
              {/* Search Bar */}
              <div className="relative w-full max-w-md bg-[#F8F8F8] text-[#595D62]">
                <input
                  type="text"
                  placeholder="Search..."
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    filterSubscribers(e.target.value); // This will now filter the subscribers based on `name`
                  }}
                  className="w-full px-10 py-2 border border-[#E2E2E2] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {!query && (
                  <div className="absolute inset-y-0 left-3 flex items-center text-[#595D62]">
                    <CiSearch className="w-5 h-5" />
                  </div>
                )}
              </div>


              {/* Date Range Picker */}
              <div className="flex items-center space-x-4">
                <div className="relative w-fit bg-[#F8F8F8] rounded-lg flex items-center px-4 py-2 border border-[#E2E2E2]">
                  <select
                    value={filter}
                    onChange={handleFilterChange}
                    className="bg-[#F8F8F8] text-[#595D62] text-sm pl-2 pr-6 py-1 cursor-pointer outline-none appearance-none">
                    <option value="All">Subscriber</option>
                    <option value="Premium">Premium</option>
                    <option value="Free">Free</option>
                  </select>
                  <IoChevronDownOutline className="absolute right-2 text-[#000000] w-4 h-4 pointer-events-none" />
                </div>
                {/* calender */}
                <div className="relative" ref={pickerRef}>
                  {/* Clickable Div */}
                  <div
                    onClick={() => setOpen(!open)}
                    className="w-fit bg-[#F8F8F8] rounded-lg flex items-center gap-3 px-4 py-2 border border-[#E2E2E2] cursor-pointer"
                  >
                    <FaRegCalendarAlt className="text-[#595D62] w-4 h-4 pointer-events-none" />
                    <h1 className="whitespace-nowrap text-[#595D62] py-1 text-sm">
                      {startDate && endDate
                        ? `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`
                        : "Starting - Ending"}
                    </h1>
                    <IoChevronDownOutline className="text-[#000000] w-4 h-4 pointer-events-none" />
                  </div>

                  {/* Date Picker (Only shows when `open === true`) */}
                  {open && (
                    <div className="absolute calender right-[50%] mt-2 z-50 bg-white shadow-lg border border-gray-300 rounded-lg">
                      <DatePicker
                        showIcon
                        selected={startDate}
                        onChange={(dates) => {
                          const [start, end] = dates;
                          setStartDate(start);
                          setEndDate(end);
                          if (end) setOpen(false);
                        }}
                        startDate={startDate}
                        endDate={endDate}
                        selectsRange
                        monthsShown={1} // Show 2 months
                        inline
                        className="p-2"
                        calendarClassName="gap-4 p-4 "

                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div> </div>
        <SubscriberTable subscribers={filteredSubscribers}></SubscriberTable>
      </div>
      <div>

      </div>
    </div>
  );
}

export default Dashboards;
