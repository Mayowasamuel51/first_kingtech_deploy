import Collaboration from "../pagesections/about/Collaboration";
import Features from "../pagesections/about/Features";
import Hero from "../pagesections/about/Hero";
import SamePage from "../pagesections/about/SamePage";
import Streamlined from "../pagesections/about/Streamlined";
import Testing from "../pagesections/about/Testing";
import Title from "../pagesections/about/mobile-view/Title";

export default function About() {
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