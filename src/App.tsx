import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar"; // Ensure Sidebar.tsx or Sidebar.jsx exists in the components folder
import Topbar from "./components/Topbar";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Settings from "./pages/Settings";

const App: React.FC = () => {
  return (
    <div className="flex h-screen flex-col flex-1  bg-[#0e1528] text-white border border-black">
      <Topbar />
      <div className="flex flex-1 bg-[#0e1528] text-white border border-black p-6">
      <Sidebar /> 
        <main className="flex-1 p-6 border-l border-[#1c2335] overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
