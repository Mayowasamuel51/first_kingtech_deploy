'use client'
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

import Image1 from '../../../../../public/images/about banner.jpg'
import Image2 from '../../../../../public/images/mentorship.jpg'
import Image3 from '../../../../../public/images/instructors.jpg'

const Sub = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0.3, 1], ["50%", "0%"]);

  return (
    <div ref={targetRef} className="p-5 space-y-10">
      <div className="space-y-10">
        <div>
          <Image src={Image1} alt="" />
        </div>
        <h3 className="text-left text-lg md:text-xl font-semibold text-white">
          <span className="text-orange-500">
            We Combine Theoretical Knowledge With Hands-On Training,{" "}
          </span>{" "}
          Ensuring That Our Students Are Not Only Well-Versed In The Principles
          Of Cybersecurity But Also Equipped To Apply Them In Real-Life
          Scenarios.
        </h3>
      </div>

      <div className="space-y-10">
        <div>
          <Image src={Image2} alt="" />
        </div>
        <h3 className="text-left text-lg md:text-xl font-semibold text-white">
          <span className="text-orange-500">
            With Years Of Combined Experience,
          </span>
          Our Instructors Have Honed Their Skills In Both The Public And Private
          Sectors, Serving As Security Consultants, Analysts And Engineers.
        </h3>
      </div>
      <div className="space-y-10">
        <div>
          <Image src={Image3} alt="" />
        </div>
        <h3 className="text-left text-lg md:text-xl font-semibold text-white">
          <span className="text-orange-500">
            This Wealth Of Practical Experience Allows Us To Provide, 
          </span>
          
          Real-World Insights And Deliver Training That Is Both Engaging And
          Relevant.
        </h3>
      </div>
    </div>
  );
};

export default Sub;