import React from "react";

const Search = () => {
  return (
    <div className="flex justify-between items-center mt-5">
      <span className="font-bold"> Sell cars online in Dhaka, BD </span>

      <div className="relative flex items-center">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 rounded-md px-2 py-2 focus:outline-none"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          fill="currentColor"
          className="bi bi-search w-6 h-6 text-gray-500 absolute right-2 cursor-pointer"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />{" "}
        </svg>
      </div>
    </div>
  );
};

export default Search;
