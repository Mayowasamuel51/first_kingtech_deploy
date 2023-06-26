const Eligibility = () => {
    return (
        <>
            <div className=" bg-gray-100 p-5 md:p-14">
                <h2 className="text-xl font-semibold text-orange-600 uppercase text-center">
                    who should attend
                </h2>

                <div className="py-10">
                    <ul className=' flex flex-col gap-y-3'>
                        <li className=" text-opacity-50">
                            1. Those who are switching career to tech industry.
                        </li>
                        <li className=" text-opacity-50">
                            2. Those who have no prior knowledge on web development but want to learn how to build website and work remotely.
                        </li>
                        <li className=" text-opacity-50">
                            3. Those who have programming skills but want to take their skill to next level with hands-on projects.
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Eligibility;