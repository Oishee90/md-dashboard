import { FaSignOutAlt } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FiUserPlus } from "react-icons/fi";
import { MdElectricBolt } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import { PiShoppingBagOpen } from "react-icons/pi";
import { TbCalendarQuestion } from "react-icons/tb";
const Sidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSeetingsDropdownOpen, setSeetingsDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);
  const location = useLocation();
  const isActiveDashboard = location.pathname.startsWith("/dashboards");
  const isActiveO =
    location.pathname.startsWith("/odermanagement") ||
    location.pathname.startsWith("/order-details");
  const isActiveA =
    location.pathname.startsWith("/addquestions") ||
    location.pathname.startsWith("/question");
  const isActiveMakeAdmin = location.pathname.startsWith("/makeAdmin");
  const isActiveManage =
    location.pathname.startsWith("/managesubscription") ||
    location.pathname.startsWith("/subscription") ||
    location.pathname.startsWith("/subsAdd") ||
    location.pathname.startsWith("/subsEdit") ||
    location.pathname.startsWith("/cupon") ||
    location.pathname.startsWith("/cuponadd");
  const isActiveSettings =
    location.pathname.startsWith("/terms") ||
    location.pathname.startsWith("/profile") ||
    location.pathname.startsWith("/privacy");
  const isActiveSubs =
    location.pathname.startsWith("/managesubscription") ||
    location.pathname.startsWith("/subsAdd") ||
    location.pathname.startsWith("/subsEdit");
  const isActiveCupon =
    location.pathname.startsWith("/cupon") ||
    location.pathname.startsWith("/cuponadd") ||
    location.pathname.startsWith("/cuponEdit");
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
  const toggleDropdownSettings = () => setSeetingsDropdownOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    // Add event listener for click outside
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-[#FAF1E6]   min-h-screen flex flex-col justify-between  open-sns">
      {/* Logo Section */}
      <div className="flex flex-col  py-4">
        <div className="flex px-6 items-center gap-4 pb-4">
          <img
            src="https://res.cloudinary.com/dhlgk023u/image/upload/v1739004543/Group_1000004237_vskv4o.png"
            alt="Logo"
            className="h-[63.28px] w-[53.99px] mb-2"
          />
          <span className="text-sm text-[#8CAB91] text-[14px]  font-semibold whitespace-nowrap">
            una historia para siempre
          </span>
        </div>
        {/* Menu Items */}
        <nav className="flex flex-col space-y-2 text-[#364636]">
          <NavLink
            to="/dashboards"
            className="flex items-center justify-between w-[280px]"
          >
            <div className="flex items-center justify-between w-[280px] font-semibold">
              {/* Left Indicator Bar */}
              <div
                className={`p-[3px] h-[60px] rounded-r-2xl ${
                  isActiveDashboard ? "bg-[#8CAB91]" : ""
                }`}
              ></div>

              {/* Main Button Area */}
              <div
                className={`flex items-center space-x-2 justify-start w-[250px] h-[60px] pl-[30px] 
                    ${isActiveDashboard ? "bg-[#8CAB91] text-[#FAF1E6]" : ""}`}
              >
                <MdDashboard className="w-[18px] h-[18px]" />{" "}
                <h1 className="text-[16px] font-[500]">Dashboard</h1>
              </div>
            </div>
          </NavLink>

          <NavLink
            to="/odermanagement"
            className="flex items-center justify-between w-[280px]"
          >
            <div className="flex items-center justify-between w-[280px] font-semibold">
              {/* Left Indicator Bar */}
              <div
                className={`p-[3px] h-[60px] rounded-r-2xl ${
                  isActiveO ? "bg-[#8CAB91]" : ""
                }`}
              ></div>

              {/* Main Button Area */}
              <div
                className={`flex items-center space-x-2 justify-start w-[250px] h-[60px] pl-[30px] 
                    ${isActiveO ? "bg-[#8CAB91] text-[#FAF1E6]" : ""}`}
              >
                <PiShoppingBagOpen className="w-[18px] h-[18px]" />
                <h1 className="text-[16px] font-[500]">Order Management</h1>
              </div>
            </div>
          </NavLink>
          <NavLink
            to="/addquestions"
            className="flex items-center justify-between w-[280px]"
          >
            <div className="flex items-center justify-between w-[280px] font-semibold">
              {/* Left Indicator Bar */}
              <div
                className={`p-[3px] h-[60px] rounded-r-2xl ${
                  isActiveA ? "bg-[#8CAB91]" : ""
                }`}
              ></div>

              {/* Main Button Area */}
              <div
                className={`flex items-center space-x-2 justify-start w-[250px] h-[60px] pl-[30px] 
                    ${isActiveA ? "bg-[#8CAB91] text-[#FAF1E6]" : ""}`}
              >
                <TbCalendarQuestion className="w-[18px] h-[18px]" />
                <h1 className="text-[16px] font-[500]">Add questionnaire</h1>
              </div>
            </div>
          </NavLink>
          <NavLink
            to="/makeAdmin"
            className="flex items-center justify-between w-[280px]"
          >
            <div className="flex items-center justify-between w-[280px] font-semibold">
              {/* Left Indicator Bar */}
              <div
                className={`p-[3px] h-[60px] rounded-r-2xl ${
                  isActiveMakeAdmin ? "bg-[#8CAB91]" : ""
                }`}
              ></div>

              {/* Main Button Area */}
              <div
                className={`flex items-center space-x-2 justify-start w-[250px] h-[60px] pl-[30px] 
                    ${isActiveMakeAdmin ? "bg-[#8CAB91] text-[#FAF1E6]" : ""}`}
              >
                <FiUserPlus className="w-[18px] h-[18px]" />
                <h1 className="text-[16px] font-[500]">Make Admin </h1>
              </div>
            </div>
          </NavLink>

          <div className="flex items-center justify-between w-[280px] font-semibold cursor-pointer">
            {/* Left Indicator Bar */}
            <div
              className={`p-[3px] h-[60px] rounded-r-2xl ${
                isActiveManage ? "bg-[#8CAB91]" : ""
              }`}
            ></div>

            {/* Main Button Area */}
            <div
              onClick={toggleDropdown}
              className={`flex  relative items-center space-x-2 justify-start w-[250px] h-[60px] pl-[30px] 
                    ${isActiveManage ? "bg-[#8CAB91] text-[#FAF1E6]" : ""}`}
            >
              <MdElectricBolt className="w-[18px] h-[18px] " />
              <h1 className="text-[16px] font-[500] whitespace-nowrap">
                Manage Subscription
              </h1>
              {isDropdownOpen ? (
                <FaChevronUp
                  className={` dark:text-white w-[20px] h-[15px]   ${
                    isActiveManage
                      ? "bg-[#8CAB91] text-[#FAF1E6]"
                      : "text-black"
                  } `}
                />
              ) : (
                <FaChevronDown
                  className={` dark:text-white w-[20px] h-[15px]   ${
                    isActiveManage
                      ? "bg-[#8CAB91] text-[#FAF1E6]"
                      : "text-black"
                  } `}
                />
              )}
              {isDropdownOpen && (
                <ul className="absolute left-[0%] top-[94%]  mt-1 w-full bg-[#FAF1E6] border border-gray-300 shadow-lg z-10 text-center">
                  <li>
                    <NavLink
                      to="/managesubscription"
                      className={`block py-2 text-gray-700 ${
                        isActiveSubs
                          ? "bg-[#CBD9CC] "
                          : "hover:bg-[#8CAB91] bg-white text-black hover:text-[#FAF1E6]"
                      }`}
                    >
                      Subscription
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/cupon"
                      className={`block py-2 text-gray-700 ${
                        isActiveCupon
                          ? "bg-[#CBD9CC] "
                          : "hover:bg-[#8CAB91] bg-white text-black hover:text-[#FAF1E6]"
                      }`}
                    >
                      Coupon Code
                    </NavLink>
                  </li>
                </ul>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between w-[280px] font-semibold cursor-pointer">
            {/* Left Indicator Bar */}
            <div
              className={`p-[3px] h-[60px] rounded-r-2xl ${
                isActiveSettings ? "bg-[#8CAB91]" : ""
              }`}
            ></div>

            {/* Main Button Area */}
            <div
              onClick={toggleDropdownSettings}
              className={`flex  relative items-center space-x-2 justify-start w-[250px] h-[60px] pl-[30px] 
                    ${isActiveSettings ? "bg-[#8CAB91] text-[#FAF1E6]" : ""}`}
            >
              <IoSettingsOutline className="w-[18px] h-[18px] " />
              <h1 className="text-[16px] font-[500] whitespace-nowrap">
                Settings
              </h1>
              {isSeetingsDropdownOpen ? (
                <FaChevronUp
                  className={` dark:text-white w-[20px] h-[15px]   ${
                    isActiveSettings
                      ? "bg-[#8CAB91] text-[#FAF1E6]"
                      : "text-black"
                  } `}
                />
              ) : (
                <FaChevronDown
                  className={` dark:text-white w-[20px] h-[15px]   ${
                    isActiveSettings
                      ? "bg-[#8CAB91] text-[#FAF1E6]"
                      : "text-black"
                  } `}
                />
              )}
              {isSeetingsDropdownOpen && (
                <ul className="absolute left-[0%] top-[94%]  mt-1 w-full bg-[#FAF1E6] border border-gray-300 shadow-lg z-10 text-center">
                  <li>
                    <NavLink
                      to="/profile"
                      className={({ isActiveo }) =>
                        `block py-2 text-gray-700 ${
                          isActiveo
                            ? "bg-[#CBD9CC] "
                            : "hover:bg-[#8CAB91] bg-white text-black hover:text-[#FAF1E6]"
                        }`
                      }
                    >
                      Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/privacy"
                      className={({ isActiveo }) =>
                        `block py-2 text-gray-700 ${
                          isActiveo
                            ? "bg-[#CBD9CC] "
                            : "hover:bg-[#8CAB91] bg-white text-black hover:text-[#FAF1E6]"
                        }`
                      }
                    >
                      Privacy And Policy
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/terms"
                      className={({ isActiveo }) =>
                        `block py-2 text-gray-700 ${
                          isActiveo
                            ? "bg-[#CBD9CC] "
                            : "hover:bg-[#8CAB91] bg-white text-black hover:text-[#FAF1E6]"
                        }`
                      }
                    >
                      Terms And Condition
                    </NavLink>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </nav>
      </div>

      {/* Logout */}
      <div className="flex items-center space-x-3 p-2 text-red-600 cursor-pointer rounded-lg pb-10 pl-10">
        <FaSignOutAlt />
        <span>Log Out</span>
      </div>
    </div>
  );
};

export default Sidebar;
