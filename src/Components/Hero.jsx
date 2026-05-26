export const Hero = () => {
    return (
        <section className="h-fit py-6 px-4 sm:px-6">
          
            {/* Users ellipse / trusted badge */}
            <div className="flex justify-center items-center gap-2 mb-5 sm:mb-6">
                <div className="flex">
                    <img src="images/Ellipse23.svg"  alt="user" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full" />
                    <img src="images/Ellipse24.svg"  alt="user" className="w-8 h-8 sm:w-10 sm:h-10 -ml-3 rounded-full" />
                    <img src="images/Ellipse25.svg"  alt="user" className="w-8 h-8 sm:w-10 sm:h-10 -ml-3 rounded-full" />
                    <img src="images/Ellips126.svg"  alt="user" className="w-8 h-8 sm:w-10 sm:h-10 -ml-3 rounded-full" />
                </div>
                <p className="text-[#218D42] text-xs sm:text-sm font-medium">
                    Trusted by Riders and Drivers
                </p>
            </div>

            {/* Heading + subtitle + store buttons */}
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center font-bold mt-2 sm:mt-4 leading-tight px-2">
                    One Tap. One Connection.{" "}
                    <br className="hidden sm:block" />
                    <span className="text-[#FBBC04]">One Smooth Ride</span>
                </h1>

                <p className="text-center pt-4 sm:pt-6 text-[#888888] text-sm sm:text-base px-4">
                    Cyclist connects riders, drivers, and couriers{" "}
                    <br className="hidden sm:block" />
                    for smoother daily movement
                </p>

                <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mt-4 sm:mt-6">
                    <img src="images/applestore.svg" alt="apple store" className="h-10 sm:h-auto border border-transparent hover:border-[#218D42] cursor-pointer rounded-3xl" />
                    <img src="images/Mobilestore.svg" alt="google store" className="h-10 sm:h-auto border border-transparent hover:border-[#218D42] cursor-pointer rounded-3xl" />
                </div>
            </div>

            {/* Phone Mockup section */}
            <div className="relative py-8 sm:py-16 px-0 sm:px-4 overflow-hidden">
                <div className="max-w-6xl mx-auto relative z-10">

                    {/* Phone mockups container */}
                    <div className="flex justify-center items-center relative">

                        {/* Left phone */}
                        <div className="relative z-[12]
                            -mr-6 sm:-mr-8
                            scale-75 sm:scale-90 lg:scale-100
                            origin-bottom-right
                        ">
                            <img
                                src="images/left-phone.svg"
                                alt="Rider app"
                                className="w-auto h-auto"
                            />
                        </div>

                        {/* Right phone */}
                        <div className="relative z-10
                            mt-16 sm:mt-20 lg:mt-30
                            -ml-20 sm:-ml-28 lg:-ml-38
                            scale-75 sm:scale-90 lg:scale-100
                            origin-bottom-left
                        ">
                            <img
                                src="images/right-phone.svg"
                                alt="Driver app"
                                className="w-auto h-auto"
                            />
                        </div>
                    </div>

                    {/* Floating textboxes and icons */}
                    <div className="absolute inset-0 pointer-events-none z-20">

                        {/* Left floating textbox — hidden on smallest screens */}
                        <img
                            src="images/left-floatingtextbox.svg"
                            alt=""
                            className="absolute animate-float top-[50%] -left-[3%]
                                xs:block
                                w-28 sm:w-auto"
                        />

                        {/* Left floating icon */}
                        <img
                            src="images/left-floatingicon.svg"
                            alt=""
                            className="absolute top-[3%] left-[8%]
                              hidden md:block w-8 sm:w-auto"
                        />

                        {/* Right floating textbox */}
                        <img
                            src="images/right-floatingtextbox.svg"
                            alt=""
                            className="absolute animate-float-delayed top-[70%] right-[1%]
                                 xs:block
                                w-28 sm:w-auto"
                        />

                        {/* Right floating icon */}
                        <img
                            src="images/right-floatingicon.svg"
                            alt=""
                            className="absolute top-[25%] right-[6.5%]
                              hidden md:block  w-8 sm:w-auto"
                        />
                    </div>

                    {/* Background ellipse */}
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-full z-[2]">
                        <img
                            src="images/Ellipse1090.svg"
                            alt=""
                            className="w-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};