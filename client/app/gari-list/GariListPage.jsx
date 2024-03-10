import React from "react";
import Filter from "../components/Filter";
import Search from "../components/Search";
import AllBrands from "./AllBrands";
import Image from "next/image";
import hero from "../images/hero.jpg";

const GariListPage = () => {
  return (
    <div>
      <div>
        <div className="py-5 px-20">
          <Image
            src={hero}
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
        <div className="px-16 py-10">
          <Filter />
          <Search />
          <AllBrands />
        </div>
      </div>
    </div>
  );
};

export default GariListPage;
