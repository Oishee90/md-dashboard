import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Root = () => {
  return (
    <div className="flex h-screen bg-white dark:bg-[#1F2937]">
      {/* Sidebar - Fixed Position */}
      <div className="w-[280px] fixed left-0 top-0 h-screen">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col ml-[280px]">
        {/* Header */}
        <Header />

        {/* Dynamically Render Child Components */}
        <main className="flex-1 bg-[#F9FAFC] dark:bg-[#1F2937] p-4 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Root;
