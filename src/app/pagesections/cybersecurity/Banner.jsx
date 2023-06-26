const Banner = () => {
    return (
        <>
            <section className=" bg-aboutBanner bg-cover bg-no-repeat pb-10 min-h-screen relative">
                <div className="absolute bg-black/50 w-full h-full top-0 left-0"></div>
                <div className="md:pt-72 pt-32 text-white text-xl font-semibold absolute mx-auto w-full h-full flex flex-col gap-y-10 px-5 md:px-14">
                    <h1 className="lg:text-5xl md:text-3xl text-3xl font-bold text-center capitalize leading-normal">
                        become a certified professional in <br />{" "}
                        <span className="text-orange-500">cyber security</span>
                    </h1>
                    <div>
                        <p className=" text-lg font-medium text-center capitalize max-w-screen-md mx-auto">
                            cyber security is the aspect of protecting an orgaination and its
                            employees assets against cyber threats
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Banner;