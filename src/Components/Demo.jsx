export const Demo = () => {
    return (
        <section id="demo" className="flex flex-col items-center justify-between gap-8 px-4 sm:px-6 lg:px-8 py-10 sm:py-16">

            {/* Header text */}
            <div className="flex flex-col items-center justify-center text-center w-full max-w-[708px] gap-4 sm:gap-6">
                <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold leading-tight">
                    How <span className="text-[#218D42]">Cyclist</span> Works: Rides that fit your wallet
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-[#888888]">
                    Cyclist suggests rides based on what's in your wallet, helping you choose
                    confidently without worrying about balance.
                </p>
            </div>

            {/* Cards container */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap justify-center gap-4 sm:gap-6 w-full max-w-7xl mx-auto">

                {/* First Card */}
                <div className="bg-[#F5F5F5] flex flex-col
                    w-full sm:w-[calc(50%-12px)] lg:w-1/3
                    pt-6 px-6 rounded-t-2xl gap-6">
                    <div className="flex flex-col gap-3 sm:gap-4">
                        <h3 className="font-medium text-xl sm:text-2xl">Top Up Your Wallet</h3>
                        <p className="text-sm sm:text-base font-normal text-[#888888]">
                            Your wallet balance sets what rides are available to you.
                        </p>
                    </div>
                    <div className="mt-auto">
                        <img
                            src="images/cardI.svg"
                            alt="Top up wallet"
                            className="w-full h-auto max-h-64 sm:max-h-80 lg:max-h-none object-contain object-bottom"
                        />
                    </div>
                </div>

                {/* Second Card */}
                <div className="bg-[#F5F5F5] flex flex-col
                    w-full sm:w-[calc(50%-12px)] lg:w-1/3
                    pt-6 px-6 rounded-t-2xl gap-6">
                    <div className="flex flex-col gap-3 sm:gap-4">
                        <h3 className="font-medium text-xl sm:text-2xl">See Rides That Fit</h3>
                        <p className="text-sm sm:text-base font-normal text-[#888888]">
                            We suggest rides based on your wallet balance and destination.
                        </p>
                    </div>
                    <div className="mt-auto">
                        <img
                            src="images/cardII.svg"
                            alt="See available rides"
                            className="w-full h-auto max-h-64 sm:max-h-80 lg:max-h-none object-contain object-bottom"
                        />
                    </div>
                </div>

                {/* Third Card */}
                <div className="bg-[#F5F5F5] flex flex-col
                    w-full sm:w-[calc(50%-12px)] lg:w-1/3
                    pt-6 px-6 rounded-t-2xl gap-6
                    sm:mx-auto lg:mx-0">
                    <div className="flex flex-col gap-3 sm:gap-4">
                        <h3 className="font-medium text-xl sm:text-2xl">Book & Go</h3>
                        <p className="text-sm sm:text-base font-normal text-[#888888]">
                            Confirm your ride and get moving with confidence.
                        </p>
                    </div>
                    <div className="mt-auto">
                        <img
                            src="images/cardIII.svg"
                            alt="Book your ride"
                            className="w-full h-auto max-h-64 sm:max-h-80 lg:max-h-none object-contain object-bottom"
                        />
                    </div>
                </div>

            </div>

        </section>
    );
};