import React from "react";
import CustomIcon from "../UI/CustomIcon";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

function Footer() {
  return (
    <div className="pt-10 pb-4 px-5 bg-slate-800 text-white flex justify-between">
      <p>&copy; 2022 Eduard Gavrila</p>
      <ul>
        <li>
          <CustomIcon icon={<FaTwitter />} size="1rem" customClasses="mr-2" />
          <a href="#">Twitter</a>
        </li>
        <li>
          {" "}
          <CustomIcon icon={<BsGithub />} size="1rem" customClasses="mr-2" />
          <a href="#">Github</a>
        </li>
        <li>
          {" "}
          <CustomIcon icon={<FaLinkedin />} size="1rem" customClasses="mr-2" />
          <a href="#">LinkedIn</a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
