"use client";
import Link from "next/link";
import React, { useState } from "react";

const CheckoutButton = () => {
  const [showCheckoutWindow, setShowCheckoutWindow] = useState(false);

  const handleClick = () => {
    setShowCheckoutWindow(true);
  };

  if (showCheckoutWindow) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="overflow-auto flex flex-col justify-center items-center w-[259px] bg-[#FFFFFF] border-2 border-[rgba(0, 0, 0, 0.1)] rounded-[10px] ">
          <div className="p-5 flex flex-col justify-center items-center">
            <Link
              className="inline-block text-[18px] leading-[48px] h-[48px] text-[#ffffff] min-w-[212px] bg-[#006aff] text-center rounded-[6px] shadow-sm "
              // target="_blank"
              data-url="https://square.link/u/w6pSXPkO?src=embd"
              href="https://square.link/u/w6pSXPkO?src=embed"
            >
              Pay now11
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <button
        onClick={handleClick}
        className="text-[18px] leading-[48px] h-[48px] text-[#ffffff] min-w-[212px] bg-[#006aff] text-center rounded-[6px] shadow-sm flex flex-col  justify-center items-center"
      //     style="
      //     display: inline-block;
      //     font-size: 18px;
      //     line-height: 48px;
      //     height: 48px;
      //     color: #ffffff;
      //     min-width: 212px;
      //     background-color: #006aff;
      //     text-align: center;
      //     box-shadow: 0 0 0 1px rgba(0,0,0,.1) inset;
      //     border-radius: 6px;
      //   "
      >
        Pay now1
      </button>
    );
  }
};

export default CheckoutButton;
// style="
// overflow: auto;
// display: flex;
// flex-direction: column;
// justify-content: flex-end;
// align-items: center;
// width: 259px;
// background: #FFFFFF;
// border: 1px solid rgba(0, 0, 0, 0.1);
// box-shadow: -2px 10px 5px rgba(0, 0, 0, 0);
// border-radius: 10px;
// font-family: SQ Market, SQ Market, Helvetica, Arial, sans-serif;
// style="
// display: inline-block;
// font-size: 18px;
// line-height: 48px;
// height: 48px;
// color: #ffffff;
// min-width: 212px;
// background-color: #006aff;
// text-align: center;
// box-shadow: 0 0 0 1px rgba(0,0,0,.1) inset;
// border-radius: 6px;
