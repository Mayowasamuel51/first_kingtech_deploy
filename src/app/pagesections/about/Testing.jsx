import Image from "next/image";
import Link from "next/link";

import cyber2 from '../../../../public/images/cyber2.jpeg'
import cyber7 from '../../../../public/images/cyber7.jpeg'
import cyber10 from '../../../../public/images/cyber10.jpeg'

const Testing = () => {
    return (
      <div className="w-full h-full  pt-8 md:px-10 px-5">
        <h2 className="text-3xl text-center font-semibold text-white uppercase">
          <span className="border-b-4 border-orange-500">
            checkout our courses
          </span>
        </h2>
        <div className="text-white py-20 relative h-full flex flex-wrap justify-between gap-20 items-center">
          <div className="">
            <Image src={cyber7} className=" max-w-[500px] w-auto" />
            <div className="mt-3 block text-2xl font-semibold text-white text-center">
              CC- Certified in Cybersecurity <br />
              <div className="flex flex-col justify-center items-center">
                <Link href="/cybersecurity" className=" bg-transparent hover:bg-orange-500 text-xl border-white border-2  py-2 px-8 rounded-lg uppercase text-white tracking-widest duration-300 ease-in-out hover:font-semibold hover:border-none hover:text-white">
                  register
                </Link>
              </div>
            </div>
          </div>
          <div>
            <Image src={cyber10} className="max-w-[500px] w-auto" />
            <div className="mt-3 block text-2xl font-semibold text-white text-center">
              Security Plus training <br />
              <div className="flex flex-col justify-center items-center">
                <Link href="/security-training" className=" bg-transparent hover:bg-orange-500 text-xl border-white border-2  py-2 px-8 rounded-lg uppercase text-white tracking-widest duration-300 ease-in-out hover:font-semibold hover:border-none hover:text-white">
                  register
                </Link>
              </div>
            </div>
          </div>
          <div>
            <Image src={cyber2} className="max-w-[500px] w-auto" />
            <div className="mt-3 block text-2xl font-semibold text-white text-center">
              Mentorship <br />
              <div className="flex flex-col justify-center items-center">
                <Link href="/mentorship" className=" bg-transparent hover:bg-orange-500 text-xl border-white border-2  py-2 px-8 rounded-lg uppercase text-white tracking-widest duration-300 ease-in-out hover:font-semibold hover:border-none hover:text-white">
                  register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Testing;