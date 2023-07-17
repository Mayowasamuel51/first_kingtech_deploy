import Image from "next/image";
import React from "react";
import Img from "../../../../public/images/cyber2.jpeg";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const Project = () => {
  return (
    <div className="md:px-14 px-5 py-7 md:py-14 flex lg:flex-row gap-10 flex-col w-full h-full">
      <div className="basis-1/2">
        <Image src={Img} alt="project" className="h-full" priority />
      </div>

      <div className="flex flex-col items-center md:items-start justify-between basis-1/2 gap-y-10">
        <h1 className=" capitalize text-xl font-semibold text-center bg-gradient-to-r from-orange-500 to-black bg-auto bg-clip-text text-transparent md:text-3xl lg:text-start">
          A Project based Program
        </h1>

        <div className="flex flex-col gap-y-10 items-start">
          <div>
            <p className=" text-sm opacity-75 flex items-center gap-x-1 lg:text-lg">
              In addition to having a final project, our courses offer a range
              of practical exercises, providing our students with hands-on
              experience and real-world applications to test their knowledge,
              develop their skills, and build a professional portfolio preparing
              them for the job market.
            </p>
          </div>
        </div>
        <Link
          href="/register"
          className=" border-2 bg-orange-500 border-orange-500 rounded px-4 py-2 text-white md:text-sm hover:bg-black hover:border-black hover:shadow-md"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Project;
