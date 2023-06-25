import React from "react";

const Hero = () => {
  return (
    <div className="container-fluid sm:mx-auto bg-black text-white md:p-3 p-1 flex flex-auto sm:justify-between sm:items-baseline sm:flex-row flex-col justify-center items-center sm:gap-0 gap-5">
      <div className="mt-10 sm:text-start text-center border-red-500">
        <h1 className="sm:text-xl md:text-[2.12rem] text-2xl text-orange-500 px-6">
          Welcome
        </h1>
        <p className="sm:ml-10 ml-0 sm:p-3 p-2 sm:text-sm text-[14px]">
          Student name
        </p>
      </div>
      <div className="mx-5 mb-4 text-center">
        <p className="sm:text-end text-center font-semibold text-orange-500 sm:text-[20px] text-[15px]">
          Account
        </p>
        <p className="bg-transparent md:px-5 md:py-3 p-4 sm:text-[15px] text-[13px] text-center text-white">
          $5000.00
        </p>
      </div>
    </div>
  );
};

export default Hero;
