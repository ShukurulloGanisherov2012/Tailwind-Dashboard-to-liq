import React from "react";
import { Outlet } from "react-router-dom";
import { ComplexNavbar } from "../components/Navbar";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto w-full px-4">
          <ComplexNavbar />
        </div>
      </header>

      <main className="pt-20 px-4 max-w-7xl mx-auto w-full">
        <div className="bg-white p-6 rounded-xl shadow-lg min-h-[665px]">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
