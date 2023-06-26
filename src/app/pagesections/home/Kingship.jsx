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
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae nemo voluptate eum veniam animi inventore mollitia fugit laboriosam obcaecati sit?
                    </p>
                </div>

                <div className=" bg-gray-200 rounded-sm p-5 flex flex-col gap-y-2">
                    <h3 className=" font-medium text-xl">
                        Promising
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae nemo voluptate eum veniam animi inventore mollitia fugit laboriosam obcaecati sit?
                    </p>
                </div>
                <div className=" bg-gray-200 rounded-sm p-5 flex flex-col gap-y-2">
                    <h3 className=" font-medium text-xl">
                        Fun
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae nemo voluptate eum veniam animi inventore mollitia fugit laboriosam obcaecati sit?
                    </p>
                </div>

            </div>
        </section>
    )
}