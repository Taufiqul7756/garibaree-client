import React from "react";
import BrandImage from "../images/toyotaa.png";
import { FaAngleDown } from "react-icons/fa6";

const AllBrands = () => {
  return (
    <div className="flex justify-between items-center mt-5 gap-2 bg-white rounded-lg py-5 px-2">
      <div className="flex justify-center items-center">
        <img src={BrandImage} alt="Toyota Icon" className="w-8 h-8 mr-2" />
        <span className="font-bold text-slate-600">Toyota (200)</span>
      </div>

      <div className="flex justify-center items-center">
        <img src={BrandImage} alt="Toyota Icon" className="w-8 h-8 mr-2" />
        <span className="font-bold">Toyota (200)</span>
      </div>
      <div className="flex justify-center items-center">
        <img src={BrandImage} alt="Toyota Icon" className="w-8 h-8 mr-2" />
        <span className="font-bold">Toyota (200)</span>
      </div>
      <div className="flex justify-center items-center">
        <img src={BrandImage} alt="Toyota Icon" className="w-8 h-8 mr-2" />
        <span className="font-bold">Toyota (200)</span>
      </div>
      <div className="flex justify-center items-center">
        <img src={BrandImage} alt="Toyota Icon" className="w-8 h-8 mr-2" />
        <span className="font-bold">Toyota (200)</span>
      </div>

      <div className=" flex justify-center items-center cursor-pointer gap-2">
        <span className="font-bold">View All Brands</span>
        <FaAngleDown />
      </div>
    </div>
  );
};

export default AllBrands;
