'use client'

import Image from "next/image";
import Dynamic from "./Dynamic";
import Sub from "./Sub";

import cyber2 from '../../../../../public/images/cyber2.jpeg'
import cyber7 from '../../../../../public/images/cyber7.jpeg'
import cyber10 from '../../../../../public/images/cyber10.jpeg'

const Title = () => {
  return (
    <div className="mx-auto relative py-16">
      <div className="pt-20">
        <div className=" h-full w-full mx-auto">
          <h3 className="capitalize font-semibold text-xl md:text-5xl text-center text-white">
            Welcome to Kingship Technologies, your premier destination for
            cutting-edge cybersecurity training
          </h3>
        </div>

        <div>
          <div className=" p-5">
            <Image src={cyber7} alt="" className="w-fit h-fit" />
          </div>
        </div>
        <div className="my-10">
          <div className="px-3 space-y-10">
            <span className="text-left text-lg md:text-xl font-semibold text-white">
              Our Mission Is To Empower Individuals And Organizations With The
              Skills And Knowledge <br />
              <span className="text-orange-500">
                Required To Safeguard Their Digital Assets In An Increasingly
                Connected World .
              </span>
            </span>
            <div className="py-5">
              <Image src={cyber2} alt="" className="w-fit h-fit" />
            </div>

            <p className="text-left text-lg md:text-xl font-semibold text-white">
              That's Why We've Developed A Comprehensive Training Program
              Designed To Equip You With The Latest Tools, <br />
              <span className="text-orange-500">
                Techniques, And Best Practices In The Field Of Cybersecurity.
              </span>
            </p>
          </div>

          <div className="my-10 px-3 space-y-10">
            <div className="mx-auto p-2">
              <Image src={cyber10} alt="" className="w-fit h-fit" />

              <span className="text-lg md:text-xl font-semibold text-center text-white">
                CC- Certified in Cybersecurity
                <br />
                <span>
                  <button className="bg-orange-500 text-white p-2 m-1.5 rounded-md text-xl font-normal">
                    Register
                  </button>
                </span>
              </span>
            </div>

            <div className="mx-auto p-2">
              <img src={cyber7} alt="" className="w-fit h-fit" />

              <span className="text-lg md:text-xl font-semibold text-center text-white">
                Security Plus training
                <br />
                <span>
                  <button className="bg-orange-500 text-white p-2 m-1.5 rounded-md text-xl font-normal">
                    Register
                  </button>
                </span>
              </span>
            </div>

            <p className="text-left text-lg md:text-xl font-semibold text-white">
              <span className="text-orange-500">
                Our Team Of Experienced Trainers Boasts A Diverse Range Of
                Expertise In Various Aspects Of Cybersecurity,
              </span>{" "}
              Including Cybersecurity Engineering, Data Privacy, Risk
              Management, And Incident Response.
            </p>
          </div>
        </div>
      </div>
      <Dynamic />
      <Sub />
    </div>
  );
};

export default Title;