import React, { useState } from "react";

function SearchFilter({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className=" flex justify-center w-full px-2 sm:px-4 md:px-0">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="🔍 Search profiles..."
        className="p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl md:rounded-2xl w-full sm:w-3/4 md:w-2/3 lg:w-1/2 max-w-[600px] text-sm sm:text-base md:text-lg text-white bg-gray-800/70 shadow-md sm:shadow-lg outline-none border border-gray-600 transition-all focus:bg-gray-800/90 focus:border-blue-500"
      />
    </div>
  );
}

export default SearchFilter;
