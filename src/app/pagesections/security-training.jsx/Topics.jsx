import { CheckCircleIcon } from "@heroicons/react/24/solid"

const Topics = () => {
    return ( 
        <>
        <section className="bg-orange-500 px-4 py-8 rounded-md flex flex-col gap-y-7 mx-5 md:mx-14 md:my-10 md:px-8 md:py-12">
            <h3 className=" text-white text-xl font-bold">
                Topics Covered
            </h3>

            <div className=" flex flex-col gap-y-2 ">
                <p className=" flex items-start gap-x-1 text-white">
                    <CheckCircleIcon width={20} color="white" opacity={0.7} />
                    Attacks, threats and Vulnerabilities
                </p>
                <p className=" flex items-start gap-x-1 text-white">
                    <CheckCircleIcon width={20} color="white" opacity={0.7} />
                    Architecture and Design
                </p>
                <p className=" flex items-start gap-x-1 text-white">
                    <CheckCircleIcon width={20} color="white" opacity={0.7} />
                    Implementation of controls
                </p>
                <p className=" flex items-start gap-x-1 text-white">
                    <CheckCircleIcon width={20} color="white" opacity={0.7} />
                    Operations and incident response
                </p>
                <p className=" flex items-start gap-x-1 text-white">
                    <CheckCircleIcon width={20} color="white" opacity={0.7} />
                    Governance, Risk and Compliance
                </p>
            </div>

        </section>
        </>
     );
}
 
export default Topics;