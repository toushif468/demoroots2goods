import { Search, Mail, Bell, LogOut } from "lucide-react";
import React from "react";
import { AppSidebar } from "./app-sidebar";
import { SidebarProvider, SidebarTrigger } from "./ui/sidebar";

const Navbar = () => {
  return (
    <div>
      {" "}
      {/* Navbar start */}
      <div className="flex items-center justify-between bg-lime-900 p-4 z-50">
        <p className=" text-4xl text-yellow-300 mr-10 font-bold z-0"></p>
        {/* Search Bar */}
        <div className="flex items-center bg-white rounded-full px-4 py-2 w-1/3 max-w-xs">
          <Search className="text-gray-600 mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none w-full text-black placeholder-gray-400"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4 ml-auto">
          {/* Mail Icon */}
          <Mail className="text-white cursor-pointer hover:text-gray-300" />

          {/* Bell Icon */}
          <Bell className="text-white cursor-pointer hover:text-gray-300" />

          {/* Exit Icon */}
          <LogOut className="text-white cursor-pointer hover:text-gray-300" />
        </div>
      </div>
      {/* Navbar end */}
      
    </div>
  );
};

export default Navbar;
