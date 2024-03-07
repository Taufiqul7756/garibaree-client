import React from "react";
import gariBareeLogo from "../images/garibareeLogo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#bedbef] text-black py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between md:items-center">
        {/* First Column */}
        <div className="grid gap-5 items-center md:w-1/5 mb-5 md:mb-0">
          <Image src={gariBareeLogo} width={200} height={200} />
          <div className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta,
            ipsum vel culpa labore quod repellendus, tempore sit, perspiciatis
            nobis eum accusantium dolores earum! Laudantium deserunt, corrupti
            eaque incidunt quidem totam!
          </div>
        </div>
        {/* Second, Third, Fourth Columns */}
        <div className="flex md:grid-cols-3 gap-10 w-full md:w-auto">
          <div className="footer-column">
            <p className="font-bold mb-5">Company</p>
            <div className="grid gap-3">
              <a href="#" className="footer-link">
                Home
              </a>
              <a href="#" className="footer-link">
                Gari
              </a>
              <a href="#" className="footer-link">
                Baree
              </a>
              <a href="#" className="footer-link">
                About
              </a>
              <a href="#" className="footer-link">
                Contact
              </a>
            </div>
          </div>
          <div className="footer-column">
            <p className="font-bold mb-5">Vehicles</p>
            <div className="grid  gap-3">
              <a href="#" className="footer-link">
                Home
              </a>
              <a href="#" className="footer-link">
                Gari
              </a>
              <a href="#" className="footer-link">
                Baree
              </a>
              <a href="#" className="footer-link">
                About
              </a>
              <a href="#" className="footer-link">
                Contact
              </a>
            </div>
          </div>
          <div className="footer-column">
            <p className="font-bold mb-5">Property</p>
            <div className="grid  gap-3">
              <a href="#" className="footer-link">
                Home
              </a>
              <a href="#" className="footer-link">
                Gari
              </a>
              <a href="#" className="footer-link">
                Baree
              </a>
              <a href="#" className="footer-link">
                About
              </a>
              <a href="#" className="footer-link">
                Contact
              </a>
            </div>
          </div>
        </div>
        {/* Fifth Column */}
        <div className="footer-column mt-5 md:mt-0">
          <p className="font-bold mb-5">Stay up to date</p>
          <form className="flex flex-col items-center">
            <input
              type="email"
              placeholder="Email"
              className="p-2 mt-2 rounded-md"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
