"use client"
import Head from "next/head";
import Experts from "../components/Experts";
import SectionWrapper from "../components/SectionWrapper";
import Banner from "../pagesections/cybersecurity/Banner";
import CourseDetails from "../pagesections/cybersecurity/CourseDetails";
import Eligibility from "../pagesections/cybersecurity/Eligibility";
import Outline from "../pagesections/cybersecurity/Outline";
import Topics from "../pagesections/cybersecurity/Topics";
import Contact from "../pagesections/home/Contact";


function Cybersecurity() {
  return (
    <main>


      <Banner />
      <div className="py-20">
        <CourseDetails />
        <Topics />
        <Outline />
        <Eligibility />
        <Experts />
        <Contact />
      </div>
    </main>
  );
}

export default SectionWrapper(Cybersecurity);
