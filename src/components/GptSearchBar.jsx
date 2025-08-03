import React from "react";

const GptSearchBar = () => {
  return (
    <div className="w-[70%] grid grid-cols-12 items-center">
      <input name="searchgpt" type="text" value="" placeholder="Search Movies" className="bg-white px-2 py-1.5 rounded-none mr-2 col-span-8"/>
      <button className="bg-red-800 p-2 my-2 col-span-4">Search</button>
    </div>
  );
};

export default GptSearchBar;
