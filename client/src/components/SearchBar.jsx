import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = () => {
  return (
    <div className="flex">
      <input
        className="rounded-full bg-black outline outline-1 outline-gray-500 py-2 px-5 w-96 text-white focus:outline-blue-500"
        type="text"
        id="anime-search"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBar;
