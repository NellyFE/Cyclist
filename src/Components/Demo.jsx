export const Demo = () => {
    return(
        <section className="flex flex-col items-center justify-between gap-8">

            <div className="flex flex-col items-center justify-center text-center w-[708px] top-[91px] left-[366px] gap-[24px]">

            <h2 className="text-[40px] font-bold ">How <span className="text-[#218D42]">Cyclist</span> Works: Rides that fit your wallet</h2>
            <p className="text-xl text-[#888888]">Cyclist suggests rides based on what’s in your wallet, helping you choose confidently without worrying about balance.</p>
        
        </div>

        {/* holding container */}
         <div className="flex border justify-between gap-8 w-[1323px] h-[530px] top-[360px] px-6 gap-24px">

            {/* first card */}
        <div>
            <h3>Top Up Your Wallet</h3>
            <p>Your wallet balance sets what rides are available to you.</p>

            <div>
                <img src="images/cardI.svg" alt="apple store" className=""/>
            </div>
        </div>

         {/* second card */}
        <div>
            <h3>See Rides That Fit</h3>
            <p>We suggest rides based on your wallet balance and destination.</p>

            <div>
                <img src="images/cardII.svg" alt="apple store" className=""/>
            </div>
        </div>

         {/* third card */}
        <div>
            <h3>Book & Go</h3>
            <p>Confirm your ride and get moving with confidence.</p>

            <div>
                <img src="images/cardIII.svg" alt="apple store" className=""/>
            </div>
        </div>
        
        </div>
        
        </section>
    )
}