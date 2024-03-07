import Image from "next/image";
import React from "react";
import gariBareeLogo from "../images/garibareeLogo.png";
import logo from "../images/logo.png";
import { GoBell } from "react-icons/go";
import { MdFavoriteBorder } from "react-icons/md";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="py-5 px-5">
        {/* upper NavBar */}
        <div className="flex justify-between items-center mb-3">
          <Link href="/">
            <Image src={gariBareeLogo} />
          </Link>
          <div className="flex justify-between items-center gap-5">
            <Link href="/" className="">
              <GoBell />
            </Link>
            <Link href="/">
              <MdFavoriteBorder />
            </Link>

            <Link href="/">
              <Image src={logo} height={32} width={32} />
            </Link>
          </div>
        </div>
        <hr />
        {/* bottom Navbar */}
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image src={gariBareeLogo} />
          </Link>
          <div className="flex justify-between items-center gap-5">
            <Link href="/" className="">
              <GoBell />
            </Link>
            <Link href="/">
              <MdFavoriteBorder />
            </Link>

            <Link href="/">
              <Image src={logo} height={32} width={32} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
