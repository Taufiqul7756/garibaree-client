import Image from "next/image";
import React from "react";
import gariBareeLogo from "../images/garibareeLogo.png";
import logo from "../images/logo.png";
import { GoBell } from "react-icons/go";
import { MdFavoriteBorder } from "react-icons/md";

const Navbar = () => {
  return (
    <>
      <div className="py-4 px-5">
        <div className="flex justify-between items-center">
          <Image src={gariBareeLogo} />
          <div className="flex justify-between items-center gap-5">
            <GoBell />
            <MdFavoriteBorder />
            <Image src={logo} height={32} width={32} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
