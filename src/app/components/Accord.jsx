"use client";
import { useState } from "react";

// hero icons import
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

const Accordion = ({ title, text }) => {
  const [expand, setExpand] = useState(false);

  const toggleAccordion = () => {
    setExpand(!expand);
  };

  return (
    <div className=" w-full p-8 bg-[#f2f5f9] flex flex-col gap-y-6">
      <div
        className=" flex items-center gap-x-4 justify-between"
        onClick={toggleAccordion}
      >
        <h4 className=" font-bold md:text-2xl text-lg leading-6 tracking-[-0.8px] text-black">
          {title}
        </h4>
        {expand ? (
          <ChevronUpIcon width={20} className="  text-black" />
        ) : (
          <ChevronDownIcon width={20} className=" text-black" />
        )}
      </div>
      {expand && (
        <div className=" text-[18px] leading-[25px] text-[#495567]  ">
          {text}
        </div>
      )}
    </div>
  );
};
// text-[#fcb72b]  text-[#495567]
export default Accordion;
