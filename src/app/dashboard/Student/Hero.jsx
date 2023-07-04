'use client'
import React from "react";

const Hero = (props) => {
  return (
    <div className="container-fluid sm:mx-auto bg-black text-white md:p-3 p-1 flex flex-auto sm:justify-between sm:items-baseline sm:flex-row flex-col justify-center items-center sm:gap-0 gap-5">
      <div className="mt-10 sm:text-start text-center border-red-500">
        <h1 className="font-bold text-sm sm:text-[2.12rem] text-2xl text-orange-500 px-6">
          Welcome        Back 
          <span> {props.name}</span>
        
        </h1>

      </div>
      <div className="mx-5 mb-4 text-center">
        {/* <p className="sm:text-end text-center font-semibold text-orange-500 sm:text-[20px] text-[15px]">
          Account
        </p> */}
      {/* <button >Save Changes</button> */}
      </div>
    </div>
  );
};

export default Hero;
