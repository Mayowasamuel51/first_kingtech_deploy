"use client";
import Link from "next/link";
import Banner from "../../pagesections/cybersecurity/Banner";
import CourseDetails from "../../pagesections/cybersecurity/CourseDetails";
import Outline from "../../pagesections/cybersecurity/Outline";
import Topics from "../../pagesections/cybersecurity/Topics";
import Wrapper from "../wrapper/Wrapper";

function Cybersecurity() {
  return (
    <main>
      <Banner />
      <div className="py-20">
        <CourseDetails />
        <Topics />
        <Outline />
        <Link href={"/dashboard/cybersecurity/pay"}>Pay</Link>
      </div>
    </main>
  );
}

export default Wrapper(Cybersecurity);
