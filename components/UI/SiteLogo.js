import React from "react";
import Image from "next/image";
import logo from "../../assets/images/app-logo.png";

function SiteLogo() {
  return (
    <div className="flex items-center justify-center w-full  sm:w-auto mb-5 sm:mb-0">
      <Image src={logo} alt="site-logo" />
      <h2 className="text-2xl ml-4">Movie Base</h2>
    </div>
  );
}

export default SiteLogo;
