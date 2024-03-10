import React from "react";
import BareeListPage from "./BareeListPage";
import Image from "next/image";
import hero from "../images/hero.jpg";

const page = () => {
  return (
    <div className="mt-48">
      <div className="py-5 px-20">
        <Image
          src={hero}
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>
      <BareeListPage />
    </div>
  );
};

export default page;
