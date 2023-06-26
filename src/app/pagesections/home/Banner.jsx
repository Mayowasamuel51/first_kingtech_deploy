"use client";

import Link from "next/link";

// library
import { motion, AnimatePresence } from "framer-motion";
import { FaYoutube, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Banner() {
  const socials = [
    {
      id: 1,
      socialMedia: <FaInstagram />,
      url: "https://instagram.com/kingshiptech?igshid=MzRlODBiNWFlZA=="
    },
  ];

  return (
    <section className=" min-h-screen bg-hero-desktop bg-no-repeat bg-fixed bg-cover relative pt-48 pb-10 md:pt-40 lg:pt-60">
      <div className=" overlay"></div>
      <AnimatePresence>
        <motion.div
          initial={{ y: -400, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 2, ease: "easeIn", delay: 1 },
          }}
          className=" px-5 h-full flex flex-col justify-center md:px-14 lg:max-w-screen-lg lg:mx-auto"
        >
          <div className=" flex flex-col items-center z-10">
            <h1
              className={` text-3xl text-center font-semibold text-white mb-6 md:text-4xl lg:text-5xl xl:text-6xl`}
            >
              Launch into the <br className=" md:hidden" />{" "}
              <span className=" text-orange-500 font-bold">cyber field</span>
            </h1>
            <p className="text-sm text-center text-white mb-5 md:text-lg">
              We train the next tech generation on the most innovative and
              recent technologies
            </p>
            <p className="text-sm text-center text-white mb-16 font-bold md:text-lg">
              Certified in Cybersecurity | Security plus training
            </p>
            <div className=" flex flex-col items-center gap-y-5 w-full mb-5 md:flex-row md:justify-center md:gap-x-5">
              <Link
                href="/mentorship"
                className=" bg-black px-4 py-2 rounded text-center text-white border-2 border-black w-40 md:text-xl hover:opacity-90"
              >
                Mentorship
              </Link>
              <Link
                href="/live-courses"
                className=" text-white bg-orange-500 border-2 border-orange-500 rounded px-4 py-2 text-center w-40 md:text-xl hover:opacity-90"
              >
                Live courses
              </Link>
            </div>
            <div className=" flex flex-row items-center gap-x-4 mb-4">
              {socials.map(({ id, socialMedia, url }) => {
                return (
                  <Link
                    href={url}
                    key={id}
                    className=" text-2xl bg-orange-500 p-3 rounded-full"
                  >
                    {socialMedia}
                  </Link>
                );
              })}
            </div>
            <p className=" text-white font-medium"> 443-768-8300 / 443-600-4337</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
