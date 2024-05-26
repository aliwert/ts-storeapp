import React from "react";
import { EventFunc } from "../models/models";
interface ISearchComp {
  handleChange: EventFunc;
}

const SearchComp: React.FC<ISearchComp> = ({ handleChange }) => {
  return (
    <div className="mt-5  bg-red-500 bg-neutral-red dark:bg-gray-900 py-3 dark:text-white">
      <div className="relative w-6/12 mx-auto">
        </div>
        <input
          type="search"
          id="default-search"
          className="block outline-none w-[300px] p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-900 focus:border-gray-900 focus:bg-gray-700 focus:text-white dark:bg-slate-600"
          placeholder="Search products 🔍"
          onChange={handleChange}
        />
      </div>
   
  );
};

export default SearchComp;
