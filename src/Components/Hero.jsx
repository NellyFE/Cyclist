export const Hero = () => {
    return (
        <section className="border py-6">
            {/* users ellipse */}
            <div className="flex justify-center items-center bg-[#FFFCF1] h-[52px] w-1/3 mx-auto rounded-full opacity-[100%]">
                
                <img src="images/Ellipse23.svg" alt="logo" className="w-[40px] h-[40px] "/>
                <img src="images/Ellipse24.svg" alt="logo" className="w-[40px] h-[40px] -ml-5"/>
                <img src="images/Ellipse25.svg" alt="logo" className="w-[40px] h-[40px] -ml-5"/>
                <img src="images/Ellips126.svg" alt="user" className="w-[40px] h-[40px] -ml-5"/>
                <p className="ml-2 text-[#218D42]">Trusted by Riders and Drivers </p>

                 </div>

                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-5xl text-center font-bold mt-4">One Tap. One Connection. <br /> <span className="text-[#FBBC04]">One Smooth Ride</span></h1>
                    <p className="text-center pt-6 text-[#888888]">Cyclist connects riders, drivers, and couriers <br /> for smoother daily movement</p>

                    <div className="flex justify-between gap-6 mt-4">
                <img src="images/applestore.svg" alt="apple store" className=""/>
                <img src="images/Mobilestore.svg" alt="google store" className=""/>

                </div>

                </div>

                
           
        </section>
    )
}