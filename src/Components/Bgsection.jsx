export const Bgsection = () => {

    
    return (
        <section className="py-8 px-4 sm:px-0">
            <div className="flex flex-col sm:flex-row
                h-auto sm:h-[420px] md:h-[480px] lg:h-[500px]
                rounded-2xl sm:rounded-none overflow-hidden">

                {/* Top / Left - Woman Image */}
                <div className="w-full sm:w-1/2
                    h-64 sm:h-full">
                    <img
                        src="images/woman.svg"
                        alt="woman on tablet"
                        className="w-full h-full object-cover object-top sm:object-center"
                    />
                </div>

                {/* Bottom / Right - Green Background with Text */}
                <div className="w-full sm:w-1/2 relative bg-[#218D42] overflow-hidden
                    min-h-[260px] sm:min-h-0">
                    {/* Background pattern */}
                    <div className="absolute inset-0">
                        <img
                            src="images/greenbackground.svg"
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="relative z-10 h-full flex flex-col justify-between
                        p-6 sm:p-8 lg:p-12">

                        {/* Top Section */}
                        <div className="mt-6 sm:mt-12 lg:mt-20">
                            <p className="text-white
                                text-xl sm:text-2xl lg:text-4xl
                                font-medium leading-tight -rotate-6 mb-1">
                                Book, Ride & Arrive
                            </p>

                            {/* Large "choice." with overlapping text */}
                            <div className="relative">
                                <h2 className="text-white font-bold tracking-tight -rotate-6
                                    text-[72px] sm:text-[100px] lg:text-[170px]
                                    leading-none -mt-2 sm:-mt-3 lg:-mt-4">
                                    Choice.
                                </h2>
                                <p className="absolute
                                    text-base sm:text-xl lg:text-3xl
                                    bottom-4 sm:bottom-6 lg:bottom-[45px]
                                    left-12 sm:left-16 lg:left-26
                                    rotate-1 leading-snug
                                    text-white italic font-light bg-[#218D42]
                                    px-1 py-0.5">
                                    at any place of your
                                </p>
                            </div>
                        </div>

                        {/* Bottom Right - Logo */}
                        <div className="flex justify-end items-end w-full
                            mt-6 sm:mt-10 lg:mt-24">
                            <img
                                src="images/cyclistlogo2.svg"
                                alt="Cyclist logo"
                                className="w-24 sm:w-32 lg:w-40 h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};