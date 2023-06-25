"use client";
import React from "react";
import Image from "next/image";
import { courses } from "../store";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const CoursesScroll = () => {
  return (
    <div className="container-fluid mx-auto p-5 mt-10 w-full">
      <div className="mt-3">
        <h1 className="text-xl text-orange-500 mx-5 capitalize">Top Courses</h1>
      </div>{" "}
      <section className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 justify-center items-center align-middle p-4 overflow-auto max-w-full mx-auto relative top-[3.54em] gap-[2.34rem]">
        {courses.map((course) => {
          return (
            // <Carousel
            //   autoPlay
            //   infiniteLoop
            //   showStatus={false}
            //   showIndicators={false}
            //   showThumbs={false}
            //   interval={5000}
            // >
            <>
              <div className="p-5 shadow-lg w-full h-full rounded-md">
                <div className="p-3 rounded-md w-fit shadow mb-4 mx-auto">
                  <Image src={course.img} alt="" width={200} height={200} />
                </div>

                <h2 className="text-[0.99em] text-center">{course.course}</h2>

                <div className="flex flex-1 justify-center items-center flex-grow gap-1 p-1">
                  <small className="text-sm">{course.rate}</small>
                  <FaStar className="text-xs text-yellow-400" />
                  <FaStar className="text-xs text-yellow-400" />
                  <FaStar className="text-xs text-yellow-400" />
                  <FaStar className="text-xs text-yellow-400" />
                  <FaStar className="text-xs" />
                </div>

                <div className="mt-4 p-4 text-center align-middle">
                  <Link
                    href={`/course/${course.id}`}
                    className="bg-black px-4 py-2 text-sm text-center text-white border border-white "
                  >
                    See More
                  </Link>
                </div>
              </div>
            </>
            // </Carousel>
          );
        })}
      </section>
    </div>
  );
};

export default CoursesScroll;
