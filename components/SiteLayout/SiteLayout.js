import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function SiteLayout({ children }) {
  return (
    <div className="bg-slate-300 flex flex-col justify-between min-h-screen min-w-[360px]">
      <Header />
      <main className="grow 2xl:px-48 xl:px-36 lg:px-28 md:px-10">{children}</main>
     
      <Footer/>
    </div>
  );
}

export default SiteLayout;
