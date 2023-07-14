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
      <Head>
        <title>cybersecurity</title>
        <meta  content="Discover the importance of cybersecurity in the digital age and learn about effective strategies and practices to safeguard your online presence. Explore expert tips, tools, and resources to protect your personal information, defend against cyber threats, and navigate the evolving landscape of online security." title="Enhancing Online Security: Exploring the World of Cybersecurity"></meta>
      </Head>
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
