"use client";

import Image from "next/image";
import React, { useState } from "react";
import gariBareeLogo from "../images/garibareeLogo.png";
import logo from "../images/logo.png";
import { GoBell } from "react-icons/go";
import { MdFavoriteBorder } from "react-icons/md";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa6";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const NavItems = [
    {
      label: "Property",
      dropdown: [
        "All Listings",
        "For Sale",
        "For Rent",
        "Bookerge",
        "NRB Services",
        "Land",
      ],
    },
    {
      label: "Motor",
      dropdown: ["All List"],
    },
    {
      label: "Dealers",
      dropdown: ["Dealers 1", "Dealers 2"],
    },
    {
      label: "Video Reviews",
      dropdown: [],
    },
    {
      label: "Blogs",
      dropdown: ["BLog 1", "BLog 2"],
    },
    {
      label: "About Us",
      dropdown: [],
    },
  ];

  const handleMouseEnter = (label) => {
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };
  return (
    <>
      <div className="py-5 px-16">
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
        <div className="py-2">
          <div className="flex justify-between items-center mt-5">
            {NavItems.map((item) => (
              <div
                key={item.label}
                className="relative group flex items-center"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <span className="cursor-pointer">{item.label}</span>
                {item.dropdown.length > 0 && <FaAngleDown className="ml-1" />}
                {item.dropdown.length > 0 && activeDropdown === item.label && (
                  <div className="absolute left-0 top-full mt-1 bg-slate-200 border border-gray-200 py-5 px-12 rounded shadow-lg">
                    {item.dropdown.map((dropdownItem) => (
                      <div key={dropdownItem}>{dropdownItem}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="bg-blue-600 rounded-full py-2 px-5">
              {" "}
              <Link href="/">
                {" "}
                <button>Post An ad</button>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
