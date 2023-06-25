"use client";
import { useTransform, useScroll, motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import instructors from "../../../../public/images/instructors.jpg";

export const Collaboration = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0.1, 0.4, 0.95], [1, 2, 2.5]);
  const x = useTransform(
    scrollYProgress,
    [0.1, 0.25, 0.7, 1],
    ["0%", "0%", "0%", "0%"]
  );
  const opacity = useTransform(scrollYProgress, [0.5, 0.8, 1], [1, 0.5, 0]);

  return (
    <section className="mt-[-30vh]">
      <div ref={targetRef} className="h-[300vh] w-full">
        <div className="sticky top-[10vh]">
          <div className="flex justify-center">
            <motion.div style={{ scale, x, opacity }} className="pt-10">
              <Image
                src={instructors}
                className="h-[75vh] max-h-[45vw] w-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaboration;
