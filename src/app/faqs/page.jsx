import React from "react";
import { PlusIcon } from "@heroicons/react/24/solid";
import SectionWrapper from "../components/SectionWrapper";
import Link from "next/link";

const Faq = () => {
  return (
    <div>
      <header className="container-fluid  bg-hero-desktop bg-cover bg-no-repeat lg:bg-about-hero bg-hero-mobile min-h-[70vh] ">
        <div className="bg-black/30 w-full absolute min-h-[70vh] "></div>
        <div className=" pt-20">
          <div className="absolute w-full min-h-[70vh] flex flex-col justify-center items-center">
            <h2 className="text-5xl font-medium text-center text-white">
              FAQS
            </h2>
          </div>
        </div>
      </header>

      <div className="max-w-screen-lg">
        <div className="my-10 mx-10 grid gap-10">
          <div>
            <h2 className="md:text-2xl text-xl font-semibold capitalize">
              What if I do not have any experience or degrees?
            </h2>
            <div>
              <p className="md:text-lg text-base text-left capitalize ease-in duration-300 ">
                If you do not have any experience or degrees, please enroll in
                our Security Fundamentals I course. This class was developed for
                students with no experience as it breaks down the fundamentals
                of security. In addition, it prepares you for the Security+
                Certification.
              </p>
            </div>
          </div>
          <div>
            <h2 className="md:text-2xl text-xl font-semibold capitalize">
              What if I need extra help?
            </h2>
            <div>
              <p className="md:text-lg text-base text-left capitalize ease-in duration-300 ">
                If for any reason you need extra help, please join us on Cyber
                Thursday. Cyber Thursday is an open forum we use to cover topics
                that may have been confusing or topics you may have missed. This
                is a great opportunity to get extra hands on experience.
              </p>
            </div>
          </div>
          <div>
            <h2 className="md:text-2xl text-xl font-semibold capitalize ">
              What happens if I miss a class?
            </h2>
            <div>
              <p className="md:text-lg text-base text-left capitalize ease-in duration-300 ">
                If for any reason you happen to miss a class, please join us on
                Cyber Thursday. Cyber Thursday is an open forum we use to cover
                topics that may have been confusing or topics you may have
                missed. This is a great opportunity to get extra hands on
                experience.
              </p>
            </div>
          </div>
          <div>
            <h2 className="md:text-2xl text-xl font-semibold capitalize ">
              Do I need to be in class at a certain time?
            </h2>
            <div>
              <p className="md:text-lg text-base text-left capitalize ease-in duration-300 ">
                Yes. Please try to sign into your class Zoom 15 minutes before
                class starts to resolve any technological difficulties you may
                be experiencing.
              </p>
            </div>
          </div>
          <div>
            <h2 className="md:text-2xl text-xl font-semibold capitalize ">
              How much time should I spend studying outside of class?
            </h2>
            <div>
              <p className="md:text-lg text-base text-left capitalize ease-in duration-300 ">
                We strongly recommend that students commit at least an hour a
                day to study and comprehend class materials.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 space-y-10 text-center lg:mx-20 md:mx-10 mx-5">
        <h3 className="text-2xl capitalize font-semibold">
          have any more question get in contact with us
        </h3>
        <Link href="/contact" className="bg-orange-500 p-4 mt-4 rounded-lg text-xl font-semibold text-white hover:bg-black ease-in-out duration-300 hover:text-white">
          Contact us
        </Link>
      </div>
    </div>
  );
};

export default  SectionWrapper(Faq);
