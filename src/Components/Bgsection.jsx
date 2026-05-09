export const Bgsection = () => {
    return(
        <section className="py-8">
            <div className="flex h-[500px]">
                {/* Left - Woman Image */}
                <div className="w-1/2">
                    <img 
                        src="images/woman.svg" 
                        alt="woman on tablet" 
                        className="w-full h-full object-cover" 
                    />
                </div>

                {/* Right - Green Background with Text */}
                <div className="w-1/2 relative bg-[#218D42] overflow-hidden">
                    {/* Background pattern */}
                    <div className="absolute inset-0">
                        <img 
                            src="images/greenbackground.svg" 
                            alt="" 
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="relative z-10 h-full flex flex-col justify-between p-12">
                        {/* Top Section */}
                        <div>
                            <p className="text-white text-4xl font-medium leading-10 mt-20 -rotate-6">
                                Book, Ride & Arrive
                            </p>
                            
                            {/* Large "choice" with overlapping text */}
                            <div className="relative">
                                <h2 className="text-white text-[170px] -mt-4 font-bold leading-48 tracking-tight -rotate-6 ">
                                    Choice.
                                </h2>
                                <p className="absolute bottom-[45px] rotate-1 leading-6 left-26 py-2 pr- text-white text-3xl italic font-light bg-[#218D42]">
                                    at any place of your
                                </p>
                            </div>
                        </div>

                        {/* Bottom Right - Logo */}
                        <div className="flex justify-end items-end w-full mt-24 ml-4">
                            <img 
                                src="images/cyclistlogo2.svg" 
                                alt="Cyclist logo" 
                                className="w-40 h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}