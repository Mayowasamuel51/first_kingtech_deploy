"use client";
import { useRouter } from "next/navigation";
import Accordion from "../components/Accord";
import SectionWrapper from "../components/SectionWrapper";

// array of FAQS and answers
const Faqs = [
  {
    title: " What if I do not have any experience or degrees?",
    text: " If you do not have any experience or degrees, please enroll inour Security Fundamentals I course. This class was developed forstudents with no experience as it breaks down the fundamentalsof security. In addition, it prepares you for the Security+ Certification.",
  },
  {
    title: "What if I need extra help? ",
    text: " If you do not have any experience or degrees, please enroll inour Security Fundamentals I course. This class was developed forstudents with no experience as it breaks down the fundamentalsof security. In addition, it prepares you for the Security+ Certification.",
  },
  {
    title: "Do I need to be in class at a certain time?  ",
    text: "  Yes. Please try to sign into your class Zoom 15 minutes before class starts to resolve any technological difficulties you may be experiencing.",
  },
  {
    title: "How much time should I spend studying outside of class?",
    text: " We strongly recommend that students commit at least an hour a day to study and comprehend class materials.",
  },
];

const Faq = () => {
  const router = useRouter();

  return (
    <div>
      <header className="bg-benefits-banner bg-cover bg-no-repeat  min-h-[70vh] ">
        <div className="bg-black/30 w-full absolute min-h-[70vh] "></div>
        <div className=" pt-20">
          <div className="absolute w-full min-h-[70vh] flex flex-col justify-center items-center">
            <h2 className="text-5xl font-medium text-center text-white">
              FAQS
            </h2>
          </div>
        </div>
      </header>

      <div className="max-w-screen-lg mx-auto">
        <div className="my-10 lg:mx-20 mx-16 grid gap-16">
          {Faqs.map((item, index) => (
            <Accordion key={index} text={item.text} title={item.title} />
          ))}
        </div>
      </div>
      <div className="py-10 space-y-10 text-center lg:mx-20 md:mx-10 mx-5">
        <h3 className="text-2xl capitalize font-semibold">
          have any more question get in contact with us
        </h3>
        <button
          onClick={() => router.push("#contact")}
          className="bg-orange-500 p-4 rounded-lg text-xl font-semibold text-white hover:bg-black ease-in-out duration-300 hover:text-white"
        >
          Contact us
        </button>
      </div>
    </div>
  );
};

export default SectionWrapper(Faq);
