import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-white dark:bg-[#1F2937]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />

        {/* Dynamically Render Child Components */}
        <main className="flex-1 bg-[#F9FAFC] dark:bg-[#1F2937] p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;



