"use client";
import { Search, Mail, Bell, LogOut } from "lucide-react";
import Dashboard from "./dashboard/page";

export default function Home() {
  

  return (
    // <div className="max-w-full ">
    //   {/* Main Content Area start */}
    //   <div className="w-full flex-1 flex flex-col">
    //     {/* Navbar start */}
    //     <div className="flex items-center justify-between bg-lime-900 p-4">
    //       {/* Search Bar */}
    //       <div className="flex items-center bg-white rounded-full px-4 py-2 w-1/3 max-w-xs">
    //         <Search className="text-gray-600 mr-2" />
    //         <input
    //           type="text"
    //           placeholder="Search"
    //           className="bg-transparent outline-none w-full text-black placeholder-gray-400"
    //         />
    //       </div>

    //       {/* Icons */}
    //       <div className="flex items-center space-x-4 ml-auto">
    //         {/* Mail Icon */}
    //         <Mail className="text-white cursor-pointer hover:text-gray-300" />

    //         {/* Bell Icon */}
    //         <Bell className="text-white cursor-pointer hover:text-gray-300" />

    //         {/* Exit Icon */}
    //         <LogOut className="text-white cursor-pointer hover:text-gray-300" />
    //       </div>
    //     </div>
    //     {/* Navbar end */}
    //   </div>
    //   {/* Dashboard Heading */}
    //   <h1 className=" text-4xl text-gray-300 font-bold z-0">Dashboard</h1>
    //   {/* Dashboard chart */}

    //   {/* Dashboard chart */}

    //   {/* Main Content Area end */}
    // </div>
    <div>
      <Dashboard />
    </div>
  );
}
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
