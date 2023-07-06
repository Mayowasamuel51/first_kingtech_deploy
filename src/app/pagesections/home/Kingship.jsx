import Link from "next/link";

export default function Kingship() {
    return (
        <section className=" px-5 py-14 relative bg-benefits-banner bg-no-repeat bg-cover flex flex-col items-center gap-y-10 md:px-14 md:py-24">
            <div className=" flex flex-col items-center gap-y-5 z-30">
                <h1 className=" text-3xl font-bold text-white">
                    Why Choose Us
                </h1>
            </div>
            <div className=" flex flex-col items-center gap-y-5 lg:flex-row lg:gap-x-20 z-30">
                <div className=" bg-gray-200 rounded-sm p-5 flex flex-col gap-y-2">
                    <h3 className=" font-medium text-xl">
                        Goal Oriented
                    </h3>
                    <p>
                    Technical skills are in high demand. Over 60% of new jobs worldwide will require tech skills.
                    </p>
                </div>

                <div className=" bg-gray-200 rounded-sm p-5 flex flex-col gap-y-2">
                    <h3 className=" font-medium text-xl">
                        Promising
                    </h3>
                    <p>
                    Unlock your earning potential! Entry-level Cybersecurity  in the U.S. earn on average over $120,000  in salary.
                    </p>
                </div>
                <div className=" bg-gray-200 rounded-sm p-5 flex flex-col gap-y-2">
                    <h3 className=" font-medium text-xl">
                        Fun
                    </h3>
                    <p>
                    Imagine combining your passion and skill with your creativity, and making something new everyday!
                    </p>
                </div>

            </div>
        </section>
    )
}