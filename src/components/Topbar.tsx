import React from "react";
import { Bell, Mail } from "lucide-react";

interface TopProps {
  onToggleSidebar: () => void;
}

const Topbar: React.FC<TopProps> = ({onToggleSidebar}) => {
  return (
    <header className="flex justify-between items-center p-4 border-b border-[#1c2335]">
             <button
          onClick={onToggleSidebar}
          className="bg-white text-blue-600 px-3 py-1 rounded"
        >
          Toggle Menu
        </button>
      <div className="flex text-left">
        <h1 className="text-2xl font-bold">GAAS</h1>
        <p className="text-xs text-gray-400">you decide, we provide</p>
      </div>
      <div className="flex text-right  items-center space-x-4">
        <Mail className="w-5 h-5 text-white hover:text-blue-400 cursor-pointer" />
        <Bell className="w-5 h-5 text-white hover:text-blue-400 cursor-pointer" />
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="profile"
          className="w-8 h-8 rounded-full object-cover"
        />
      </div>
    </header>
  );
};

export default Topbar;
