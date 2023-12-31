import Experts from "../components/Experts";
import Contact from "../pagesections/home/Contact";
import Banner from "../pagesections/security-training.jsx/Banner";
import CourseDetails from "../pagesections/security-training.jsx/CourseDetails";
import Eligibility from "../pagesections/security-training.jsx/Eligibility";
import Outline from "../pagesections/security-training.jsx/Outline";
import Topics from "../pagesections/security-training.jsx/Topics";
import SectionWrapper from "../components/SectionWrapper";
import Head from "next/head";
export const metadata = {
    title: 'SecurityTraining   Kingship Technologies',
    description: 'Cyber Security e-learning platform',  
    keywords: "cybersecurity training, cybersecurity courses, information security, cyber defense, network security, ethical hacking, penetration testing, data privacy",
    content:" Prepare for the Security+ certification exam with our comprehensive guide. Learn essential cybersecurity concepts, network security, cryptography, and risk management. Gain the knowledge and skills needed to protect networks, identify vulnerabilities, and respond to security incidents. Start your journey towards a rewarding cybersecurity career today." 
  }
  
function SecurityTraining() {
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
    )
}

export default SectionWrapper(SecurityTraining)