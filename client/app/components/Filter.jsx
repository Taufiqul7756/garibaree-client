import React from "react";

const Filter = () => {
  return (
    <div className="flex justify-around items-center bg-slate-300 p-5 ">
      {/* first */}
      <div className="grid">
        <div>
          <label className="flex-1 font-medium">Location</label>
        </div>
        <div>
          <select className="">
            <option value="location1">Location 1</option>
            <option value="location2">Location 2</option>
          </select>
        </div>
      </div>
      <div className="border-l border-gray-500 h-10 my-auto"></div>
      {/* second */}
      <div className="grid ">
        <div>
          <label className="flex-1 font-medium">Condition</label>
        </div>
        <div>
          <select className="">
            <option value="location1">Condition 1</option>
            <option value="location2">Condition 2</option>
          </select>
        </div>
      </div>
      <div className="border-l border-gray-500 h-10 my-auto"></div>
      {/* third */}
      <div className="grid ">
        <div>
          <label className="flex-1 font-medium">Brand</label>
        </div>
        <div>
          <select className="">
            <option value="location1">Brand 1</option>
            <option value="location2">Brand 2</option>
          </select>
        </div>
      </div>
      <div className="border-l border-gray-500 h-10 my-auto"></div>
      {/* forth */}
      <div className="grid  ">
        <div>
          <label className="flex-1 font-medium">Price [Taka]</label>
        </div>
        <div>
          <select className="">
            <option value="location1">Condition 1</option>
            <option value="location2">Condition 2</option>
          </select>
        </div>
      </div>
      <div className="border-l border-gray-500 h-10 my-auto"></div>
      {/* fivth */}
      <div className="grid ">
        <div>
          <label className="flex-1 font-medium">Filter</label>
        </div>
        <div>
          <select className="">
            <option value="location1">Condition 1</option>
            <option value="location2">Condition 2</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
