import Link from "next/link";
import Image from "next/image";
// library
import { FaInstagram } from "react-icons/fa";
// assest
import logo from "../../../public/images/logo.png";
import email from "../../../public/images/icon-email.svg";
import phone from "../../../public/images/icon-phone.svg";


export default function Footer() {
  const socials = [
    {
      id: 1,
      socialMedia: <FaInstagram />,
    },
  ];

  return (
    <footer className=" px-5 py-1 flex flex-col gap-y-8 md:px-14">
      <Image src={logo} alt="logo" className="w-14" />
      <div className=" flex flex-col gap-y-8 lg:flex-row lg:items-start lg:justify-between">
        <div className=" flex flex-col items-start gap-y-4">
          <div className=" flex flex-row items-center gap-x-4">
            <Image src={phone} alt="phone" />
            <p className=' font-["Open Sans"] text-base text-gray-800'>
              Phone: 443-768-8300
            </p>
          </div>
          <div className=" flex flex-row items-center gap-x-4">
            <Image src={email} alt="email" />
            <p className=' font-["Open Sans"] text-base text-gray-800'>
              kingshiptechnologies@gmail.com
            </p>
          </div>
          <div className=" flex flex-row items-center gap-x-4">
            {socials.map(({ id, socialMedia }) => {
              return (
                <Link href="/" key={id} className=" text-2xl">
                  {socialMedia}
                </Link>
              );
            })}
          </div>
        </div>

        <ul className=" flex flex-col items-start gap-y-4">
          <li className=" text-base leading-[22px] text-gray-800 font-bold">
            Explore
          </li>
          <li className=" text-base leading-[22px] text-gray-800">
            <Link href="register" className="">
              Register
            </Link>
          </li>
          <li className=" text-base leading-[22px] text-gray-800">
            <Link href="/" className="">
              Consultation
            </Link>
          </li>
          <li className=" text-base leading-[22px] text-gray-800">
            <Link href="blog" className="">
              Blog
            </Link>
          </li>
        </ul>

        <ul className=" flex flex-col items-start gap-y-4">
          <li className=" text-base leading-[22px] text-gray-800 font-bold">
            About
          </li>
          <li className=" text-base leading-[22px] text-gray-800">
            <Link href="about" className="">
              Our Story
            </Link>
          </li>
          <li className=" text-base leading-[22px] text-gray-800">
            <Link href="/" className="">
              Instructors
            </Link>
          </li>
        </ul>

        <ul className=" flex flex-col items-start gap-y-4">
          <li className=" text-base leading-[22px] text-gray-800 font-bold">
            Help
          </li>
          <li className=" text-base leading-[22px] text-gray-800">
            <Link href="/" className="">
              Contact Us
            </Link>
          </li>
          <li className=" text-base leading-[22px] text-gray-800">
            <Link href="faqs" className="">
              FAQs
            </Link>
          </li>
          <li className=" text-base leading-[22px] text-gray-800">
            <Link href="/" className="">
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>
      <p className=" text-center">
        Copyright &copy; Kingship Technologies 2023
      </p>
    </footer>
  );
}