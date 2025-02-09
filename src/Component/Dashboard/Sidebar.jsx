import { FaFileAlt,  FaSignOutAlt } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { RiShoppingBag3Line } from "react-icons/ri";
import { LiaAddressCardSolid } from "react-icons/lia";
import { FiUserPlus } from "react-icons/fi";
import { MdElectricBolt } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
const Sidebar = () => {
    return (
        <div className="bg-[#FAF1E6]  min-h-screen flex flex-col justify-between p-4 open-sns">
            {/* Logo Section */}
            <div className="flex flex-col  py-4">
                <div className="flex px-6 items-center gap-4 pb-4"><img src="https://res.cloudinary.com/dhlgk023u/image/upload/v1739004543/Group_1000004237_vskv4o.png" alt="Logo" className="h-[63.28px] w-[53.99px] mb-2" />
                <span className="text-sm text-[#8CAB91] text-[14px]  font-semibold whitespace-nowrap">una historia para siempre</span></div>
                  {/* Menu Items */}
            <nav className="flex flex-col space-y-4 text-[#364636]">
            <NavLink to="/dashboards" className={({ isActive }) => "flex items-center justify-between w-[280px]"}>
        {({ isActive }) => (
            <div className="flex items-center justify-between w-[280px] font-semibold">
                <div className={`p-[3px] h-[70px] rounded-r-2xl ${isActive ? "bg-[#8CAB91]" : ""}`}></div>
                <div className={`flex items-center space-x-2 justify-start w-[250px] h-[72px] pl-[30px] ${isActive ? "bg-[#8CAB91] text-[#FAF1E6]" : ""}`}>
                    {/* <MdElectricBolt className="text-[18px]" /> */}
                    <MdDashboard  className="w-[18px] h-[18px]"/> <h1 className="text-[16px] font-[500]">Dashboard</h1>
                </div>
            </div>
        )}
    </NavLink>
    <NavLink to="/addquestions" className={({ isActive }) => "flex items-center justify-between w-[280px]"}>
        {({ isActive }) => (
            <div className="flex items-center justify-between w-[280px] font-semibold">
                <div className={`p-[3px] h-[70px] rounded-r-2xl ${isActive ? "bg-[#8CAB91]" : ""}`}></div>
                <div className={`flex items-center space-x-2 justify-start w-[250px] h-[72px] pl-[30px] ${isActive ? "bg-[#8CAB91] text-[#FAF1E6]" : ""}`}>
                    {/* <MdElectricBolt className="text-[18px]" /> */}
                    <RiShoppingBag3Line  className="w-[18px] h-[18px]" /><h1 className="text-[16px] font-[500]">Add questionnaire</h1>
                </div>
            </div>
        )}
    </NavLink>
    <NavLink to="/makeadmin" className={({ isActive }) => "flex items-center justify-between w-[280px]"}>
        {({ isActive }) => (
            <div className="flex items-center justify-between w-[280px] font-semibold">
                <div className={`p-[3px] h-[70px] rounded-r-2xl ${isActive ? "bg-[#8CAB91]" : ""}`}></div>
                <div className={`flex items-center space-x-2 justify-start w-[250px] h-[72px] pl-[30px] ${isActive ? "bg-[#8CAB91] text-[#FAF1E6]" : ""}`}>
                    {/* <MdElectricBolt className="text-[18px]" /> */}
                    <FiUserPlus className="w-[18px] h-[18px]"  /><h1 className="text-[16px] font-[500]">Make Admin </h1>
                </div>
            </div>
        )}
    </NavLink>
    <NavLink to="/managesubscription" className={({ isActive }) => "flex items-center justify-between w-[280px]"}>
        {({ isActive }) => (
            <div className="flex items-center justify-between w-[280px] font-semibold">
                <div className={`p-[3px] h-[70px] rounded-r-2xl ${isActive ? "bg-[#8CAB91]" : ""}`}></div>
                <div className={`flex items-center space-x-2 justify-start w-[250px] h-[72px] pl-[30px] ${isActive ? "bg-[#8CAB91] text-[#FAF1E6]" : ""}`}>
                    {/* <MdElectricBolt className="text-[18px]" /> */}
                    <MdElectricBolt  className="w-[18px] h-[18px]"/> <h1 className="text-[16px] font-[500]">Manage Subscription</h1>
                </div>
            </div>
        )}
    </NavLink>
    <NavLink to="/settings" className={({ isActive }) => "flex items-center justify-between w-[280px]"}>
        {({ isActive }) => (
            <div className="flex items-center justify-between w-[280px] font-semibold">
                <div className={`p-[3px] h-[70px] rounded-r-2xl ${isActive ? "bg-[#8CAB91]" : ""}`}></div>
                <div className={`flex items-center space-x-2 justify-start w-[250px] h-[72px] pl-[30px] ${isActive ? "bg-[#8CAB91] text-[#FAF1E6]" : ""}`}>
                    {/* <MdElectricBolt className="text-[18px]" /> */}
                    <IoSettingsOutline className="w-[18px] h-[18px]" /> <h1 className="text-[16px] font-[500]">Settings</h1>
                </div>
            </div>
        )}
    </NavLink>

            </nav>
            </div>

          

            {/* Logout */}
            <div className="flex items-center space-x-3 p-2 text-red-600 cursor-pointer hover:bg-red-100 rounded-lg">
                <FaSignOutAlt />
                <span>Log Out</span>
            </div>
        </div>
    );
}

export default Sidebar;