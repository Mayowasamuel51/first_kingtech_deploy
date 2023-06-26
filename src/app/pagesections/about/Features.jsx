'use client'
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

import expertOne from '../../../../public/images/expertOne.jpg'
import expertTwo from '../../../../public/images/expertTwo.jpg'
import expertThree from '../../../../public/images/expertThree.jpg'

export const Features = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.9, 1], [0.8, 0.8, 1]);
  const x = useTransform(scrollYProgress, [0.3, 1], ["50%", "0%"]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5, 0.6, 0.85, 0.9],
    [1, 1, 0.4, 0.4, 1]
  );

  const text1Opacity = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.5],
    [0, 1, 0]
  );
  const text1Y = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.5],
    ["30px", "0px", "-30px"]
  );

  const text2Opacity = useTransform(
    scrollYProgress,
    [0.5, 0.6, 0.7],
    [0, 1, 0]
  );
  const text2Y = useTransform(
    scrollYProgress,
    [0.5, 0.6, 0.7],
    ["30px", "0px", "-30px"]
  );

  const text3Opacity = useTransform(
    scrollYProgress,
    [0.7, 0.8, 0.9],
    [0, 1, 0]
  );
  const text3Y = useTransform(
    scrollYProgress,
    [0.7, 0.8, 0.9],
    ["30px", "0px", "-30px"]
  );

  return (
    <section
      ref={targetRef}
      className="flex h-[500vh] flex-col items-center justify-start pb-[30vh]"
    >
      <div className="sticky top-[16.7vh] h-[66.8vh] px-16 text-xl font-semibold capitalize font-['Orbitron'] leading-[1] text-black [&_p]:w-[45rem] [&_p]:max-w-[90%]">
        <motion.div style={{ x, scale }} className="relative h-full">
          <motion.figure style={{ opacity }} className="h-full">
            <Image src={expertOne} className="h-full w-auto" />
          </motion.figure>
          <motion.figure style={{ opacity: text2Opacity }}>
            <Image src={expertTwo} className="absolute inset-0 h-full w-auto" />
          </motion.figure>
          <motion.figure style={{ opacity: text3Opacity }}>
            <Image src={expertThree} className="absolute inset-0 h-full w-auto" />
          </motion.figure>
        </motion.div>
        <motion.p
          style={{
            opacity: text1Opacity,
            "--y": text1Y,
          }}
          className="translate-y-centered-offset absolute top-1/2 left-0 text-white"
        >
          <span className="text-orange-500">
            We combine theoretical knowledge with hands-on training,
          </span>
          <br />
          ensuring that our students are not only well-versed in the principles
          of cybersecurity but also equipped to apply them in real-life
          scenarios.
        </motion.p>
        <motion.p
          style={{
            opacity: text2Opacity,
            "--y": text2Y,
          }}
          className="translate-y-centered-offset absolute top-1/2 left-0 text-white"
        >
          <span className="text-orange-500">
            With years of combined experience,{" "}
          </span>
          <br />
          our instructors have honed their skills in both the public and private
          sectors, serving as security consultants, analysts and engineers.
        </motion.p>
        <motion.p
          style={{
            opacity: text3Opacity,
            "--y": text3Y,
          }}
          className="translate-y-centered-offset absolute top-1/2 left-0 text-white"
        >
          <span className="text-orange-500">
            This wealth of practical experience allows us to provide{" "}
          </span>
          <br />
          real-world insights and deliver training that is both engaging and
          relevant.
        </motion.p>
      </div>
    </section>
  );
};

export default Features;