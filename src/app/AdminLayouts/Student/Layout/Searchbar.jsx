import React from "react";

const Searchbar = () => {
  return (
    <>
      <form className="mx-2" method="">
        <div className="md:block hidden">
          <button className="text-slate-800 bg-transparent relative md:left-3 md:top-9 lg:block top-8 md:hidden">
            <i className="fas fa-search font-bold"></i>
          </button>

          <input
            type="search"
            name=""
            id=""
            className="bg-white py-3 px-10 lg:w-[28rem] outline outline-gray-500 rounded-full"
            placeholder="search for a course..."
          />
        </div>
      </form>
    </>
  );
};

export default Searchbar;
