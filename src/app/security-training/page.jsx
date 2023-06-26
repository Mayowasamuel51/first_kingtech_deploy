import Experts from "../components/Experts";
import Contact from "../pagesections/home/Contact";
import Banner from "../pagesections/security-training.jsx/Banner";
import CourseDetails from "../pagesections/security-training.jsx/CourseDetails";
import Eligibility from "../pagesections/security-training.jsx/Eligibility";
import Outline from "../pagesections/security-training.jsx/Outline";
import Topics from "../pagesections/security-training.jsx/Topics";
import SectionWrapper from "../components/SectionWrapper";
function  SecurityTraining() {
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

export default  SectionWrapper(SecurityTraining)