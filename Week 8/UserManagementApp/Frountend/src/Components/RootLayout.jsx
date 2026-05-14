import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";

function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-800">
      <Header />
      <main className="flex-grow container mx-auto px-6 py-12">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout;