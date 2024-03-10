import React from "react";
import Filter from "../components/Filter";
import Search from "../components/Search";

const GariListPage = () => {
  return (
    <div>
      <div>
        <div className="px-16 py-10">
          <Filter />
          <Search />
        </div>
      </div>
    </div>
  );
};

export default GariListPage;
