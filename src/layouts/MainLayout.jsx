import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/SIdebar";
import { ComplexNavbar } from "../components/Navbar";

export default function MainLayout() {
  return (
    <div className="flex gap-3 ">
      <div>
        <Sidebar />
      </div>
      <div className="w-[calc(100%-19rem)] absolute right-0 bg-blue-gray-200 ">
        <div className="pl-4">
          <ComplexNavbar />
        </div>
        <div className="pl-4 min-h-[665px] mt-16">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
