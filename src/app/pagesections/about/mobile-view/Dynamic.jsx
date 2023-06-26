'use client'
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Dynamic = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });
  const textX = useTransform(scrollYProgress, [0.2, 0.7], ["100%", "-100%"]);
  const opacitySection = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.6, 0.8], [0.6, 0.8]);
  const scaleX = useTransform(scrollYProgress, [0.6, 0.8], [0.6, 0.8]);

  const opacityBorder = useTransform(
    scrollYProgress,
    [0.7, 0.71, 0.72],
    [1, 1, 0]
  );
  const finalTextOpacity = useTransform(
    scrollYProgress,
    [0.7, 0.71, 0.72, 0.8, 0.9],
    [0, 0, 1, 1, 0]
  );

  const finalTextScale = useTransform(scrollYProgress, [0.8, 0.9], [1, 0.7]);

  return (
    <motion.section
      style={{
        opacity: opacitySection,
        "--scale": scale,
        "--opacity-border": opacityBorder,
        "--scaleX": scaleX,
      }}
      ref={targetRef}
      className="mt-[20vh] overflow-x-hidden flex md:h-[120vh] h-[100vh] lg:h-[150vh]  items-center justify-center"
    >
      <div className=" fixed top-3/4 md:top-[90%] left-1/2 md:min-h-[50rem] md:min-w-[50rem] sm:min-h-[40rem] sm:min-w-[40rem] min-h-[32rem] min-w-[32rem] -translate-x-1/2 -translate-y-1/2 md:-translate-y-3/4 whitespace-nowrap before:absolute before:inset-0 before:scale-[var(--scale)] md:before:scale-[var(--scaleX)] before:border-[2rem] md:before:border-[2.7rem] before:border-[#f97316] before:opacity-[var(--opacity-border)]">
        <motion.p
          aria-hidden
          style={{ x: textX, y: "-50%" }}
          className="whitepspace-nowrap min-w-screen absolute text-white capitalize top-1/2 sm:left-[calc(-50vw+20rem)] left-[calc(-50vw+15rem)] text-[7rem] sm:text-[10rem] text-heading"
        >
          dynamic learning experience.
        </motion.p>
        <motion.p
          aria-hidden
          style={{ x: textX, y: "-50%" }}
          className="whitepspace-nowrap min-w-screen capitalize absolute top-1/2 left-[calc(-50vw+15rem)] sm:left-[calc(-50vw+20rem)] z-[11] text-[7rem] sm:text-[10rem] text-transparent [-webkit-text-stroke:1px_var(--color-heading)]"
        >
          dynamic learning experience.
        </motion.p>

        <motion.p
          style={{
            opacity: finalTextOpacity,
            scale: finalTextScale,
            y: "-50%",
            x: "-50%",
          }}
          className="absolute left-1/2 md:inset-x-1/4 px-5 capitalize top-1/2 text-[2.5rem] sm:text-[4rem] md:text-[6rem] text-center leading-tight text-white"
        >
          dynamic learning
          <br />
          experience.
        </motion.p>
        <span className="absolute left-[calc(50%*var(--scale)+50%)] top-0 z-10 h-full  w-[50vw] origin-left scale-[var(--scale)] bg-[#090909] opacity-[var(--opacity-border)]" />
      </div>
    </motion.section>
  );
};

export default Dynamic;