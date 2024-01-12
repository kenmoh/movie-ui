"use client";
import React from "react";

const SearchForm = () => {
  return (
    <div>
      <form action="">
        <div className="bg-white rounded-full pl-5 mt-3">
          <input
            type="search"
            placeholder="search movie"
            className="w-[75%] md:w-[90%] rounded-full p-2 focus:ring-0 focus:outline-none"
          />
          <button
            type="submit"
            className="w-[25%] md:w-[10%] bg-black rounded-full text-white p-2"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
