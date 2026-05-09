export const Demo = () => {
    return(
        <section className="flex flex-col items-center justify-between gap-8">

            <div className="flex flex-col items-center justify-center text-center w-[708px] top-[91px] left-[366px] gap-[24px]">

            <h2 className="text-[40px] font-bold ">How <span className="text-[#218D42]">Cyclist</span> Works: Rides that fit your wallet</h2>
            <p className="text-xl text-[#888888]">Cyclist suggests rides based on what’s in your wallet, helping you choose confidently without worrying about balance.</p>
        
        </div>

        {/* holding container */}
         <div className="flex flex-wrap lg:flex-nowrap justify-center gap-6 w-full max-w-7xl mx-auto px-4">

                {/* First Card */}
                <div className="bg-[#F5F5F5] flex flex-col w-full lg:w-1/3 pt-6 px-6 rounded-t-2xl gap-6">
                    <div className="flex flex-col gap-4">
                        <h3 className="font-medium text-2xl">Top Up Your Wallet</h3>
                        <p className="text-base font-normal text-[#888888]">
                            Your wallet balance sets what rides are available to you.
                        </p>
                    </div>
                    <div className="mt-auto">
                        <img src="images/cardI.svg" alt="Top up wallet" className="w-full h-auto"/>
                    </div>
                </div>

                {/* Second Card */}
                <div className="bg-[#F5F5F5] flex flex-col w-full lg:w-1/3 pt-6 px-6 rounded-t-2xl gap-6">
                    <div className="flex flex-col gap-4">
                        <h3 className="font-medium text-2xl">See Rides That Fit</h3>
                        <p className="text-base font-normal text-[#888888]">
                            We suggest rides based on your wallet balance and destination.
                        </p>
                    </div>
                    <div className="mt-auto">
                        <img src="images/cardII.svg" alt="See available rides" className="w-full h-auto"/>
                    </div>
                </div>

                {/* Third Card */}
                <div className="bg-[#F5F5F5] flex flex-col w-full lg:w-1/3 pt-6 px-6 rounded-t-2xl gap-6">
                    <div className="flex flex-col gap-4">
                        <h3 className="font-medium text-2xl">Book & Go</h3>
                        <p className="text-base font-normal text-[#888888]">
                            Confirm your ride and get moving with confidence.
                        </p>
                    </div>
                    <div className="mt-auto">
                        <img src="images/cardIII.svg" alt="Book your ride" className="w-full h-auto"/>
                    </div>
                </div>
                
            </div>
        
        </section>
    )
}