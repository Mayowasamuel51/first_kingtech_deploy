import SectionWrapper from "../components/SectionWrapper";
import Collaboration from "../pagesections/about/Collaboration";
import Features from "../pagesections/about/Features";
import Hero from "../pagesections/about/Hero";
import SamePage from "../pagesections/about/SamePage";
import Streamlined from "../pagesections/about/Streamlined";
import Testing from "../pagesections/about/Testing";
import Title from "../pagesections/about/mobile-view/Title";
export const metadata = {
    title: 'About us    Kingship Technologies',
    description: 'Cyber Security e-learning platform',  
    keywords: "cybersecurity training, cybersecurity courses, information security, cyber defense, network security, ethical hacking, penetration testing, data privacy",
    content:" Prepare for the Security+ certification exam with our comprehensive guide. Learn essential cybersecurity concepts, network security, cryptography, and risk management. Gain the knowledge and skills needed to protect networks, identify vulnerabilities, and respond to security incidents. Start your journey towards a rewarding cybersecurity career today." 
  }
const About = () => {
    
    return (
        <main className=" bg-black">
            <div className="xl:block hidden">
                <Hero />
                <Collaboration />
                <SamePage />
                <Streamlined />
                <Features />
                <Testing />
            </div>
            <div className="xl:hidden block">
                <Title />
            </div>
        </main>
    )
}

export default SectionWrapper(About)
// import Collaboration from "../pagesections/about/Collaboration";
// import Features from "../pagesections/about/Features";
// import Hero from "../pagesections/about/Hero";
// import SamePage from "../pagesections/about/SamePage";
// import Streamlined from "../pagesections/about/Streamlined";
// import Testing from "../pagesections/about/Testing";
// import Title from "../pagesections/about/mobile-view/Title";

// export default function About() {
//     return (
//         <main className=" bg-black">
//             <div className="xl:block hidden">
//                 <Hero />
//                 <Collaboration />
//                 <SamePage />
//                 <Streamlined />
//                 <Features />
//                 <Testing />
//             </div>
//             <div className="xl:hidden block">
//                 <Title />
//             </div>
//         </main>
//     )
// }