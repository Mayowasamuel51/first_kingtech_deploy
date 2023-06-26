import Experts from "../../components/Experts";
import Banner from "./Banner";
import CourseDetails from "./CourseDetails";
import Eligibility from "./Eligibility";
import Outline from "./Outline";
import Topics from "./Topics";
import Contact from "../home/Contact";

export default function Cybersecurity() {
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
