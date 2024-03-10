import React from "react";
import Image from "next/image";
import hero from "../images/hero.jpg";
import Filter from "../components/Filter";
import Search from "../components/Search";

const BareeListPage = () => {
  return (
    <div>
      <div className="px-16 py-10">
        <Filter />
        <Search />
      </div>
    </div>
  );
};

export default BareeListPage;
