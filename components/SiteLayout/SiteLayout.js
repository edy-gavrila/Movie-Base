import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function SiteLayout({ children }) {
  return (
    <div className=" bg-slate-300 flex flex-col font-sourceSans tracking-wider text-slate-600 min-h-screen min-w-[360px]">
      <Header />
      <main className="container grow px-2 sm:px-0">{children}</main>

      <Footer />
    </div>
  );
}

export default SiteLayout;
