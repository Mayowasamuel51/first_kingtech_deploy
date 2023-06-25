import Image from "next/image";

import Image1 from "../../../public/images/expertThree.jpg";
import Image2 from "../../../public/images/expertOne.jpg";
import Image3 from "../../../public/images/expertTwoCropped.jpg";

export default function Experts() {
  return (
    <section className="bg-orange-500">
      <div className="max-w-screen-xl mx-auto py-10">
        <div className="flex md:flex-row flex-col justify-between items-start text-white mx-auto gap-10">
          <h2 className="text-5xl font-semibold leading-tight text-center basis-5/12">
            Taught by Experienced Experts
          </h2>
          <p className="text-lg font-normal text-start basis-6/12 px-5">
            our Instructors are experienced practitioners who work at the
            world's most innovative companies. They're experts in their field,
            and enter the classroom with years of experience making sure you're
            learning the most up-to-date and practical skills companies around
            the world need.
          </p>
        </div>
        <div className="mx-auto py-10 flex flex-wrap gap-10 lg:justify-between justify-center items-center px-5">
          <div className="bg-white p-16 rounded-lg text-black flex flex-col justify-center items-center">
            <Image
              src={Image1}
              alt=""
              className="w-[200px] h-[200px] rounded-full object-cover "
            />
            <div className="pt-5 grid gap-2">
              <h2 className="text-xl font-medium text-center uppercase tracking-wide">
                steve jobs
              </h2>
              <p className="text-base font-normal text-center capitalize">
                mentor
              </p>
            </div>
          </div>
          <div className="bg-white p-16 rounded-lg text-black flex flex-col justify-center items-center">
            <Image
              src={Image2}
              alt=""
              className="w-[200px] h-[200px] rounded-full object-cover object-right-bottom"
            />
            <div className="pt-5 grid gap-2">
              <h2 className="text-xl font-medium text-center uppercase tracking-wide">
                Micheal kean
              </h2>
              <p className="text-base font-normal text-center capitalize">
                mentor
              </p>
            </div>
          </div>
          <div className="bg-white p-16 rounded-lg text-black flex flex-col justify-center items-center">
            <Image
              src={Image3}
              alt=""
              className="w-[200px] h-[200px] rounded-full object-cover object-right-top"
            />
            <div className="pt-5 grid gap-2">
              <h2 className="text-xl font-medium text-center uppercase tracking-wide">
                Beatrice may
              </h2>
              <p className="text-base font-normal text-center capitalize">
                mentor
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
