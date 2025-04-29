import React from "react";
import { Link } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({isOpen}) => {
  return (
    <aside className={`bg-[#0e1528] p-0 space-y-0 overflow-y-auto transition-all duration-300 ${
      isOpen ? "w-64" : "w-0 overflow-hidden"
    }`}>
      <nav className="space-y-4 text-sm">
        <Link to="/" className="block hover:text-blue-400">Dashboard</Link>
        <Link to="/users" className="block hover:text-blue-400">Users</Link>
        <Link to="/settings" className="block hover:text-blue-400">Settings</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
