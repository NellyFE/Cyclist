export const Hero = () => {
    return (

        <section className="h-fit py-6">
          
            {/* users ellipse */}
            <div className="flex justify-center items-center h-[52px] w-1/3 mx-auto rounded-full opacity-[100%]">
                
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

                {/* Phone Mockup section */}
                <div className="relative py-16 px-4 overflow-hidden">
    
    <div className="max-w-6xl mx-auto relative z-10">
        {/* Phone mockups container */}
        <div className="flex justify-center items-center relative">
            
            {/* Left phone with all elements */}
<div className="relative -mr-8 z-12">
    <img 
        src="images/left-phone.svg" 
        alt="Rider app" 
        className="w-auto h-auto"
    />
</div>

{/* Right phone with all elements */}
<div className="relative mt-30 -ml-38 z-10">
    <img 
        src="images/right-phone.svg" 
        alt="Driver app"
        className="w-auto h-auto"
    />
</div>
        </div>
        
        {/* Floating textboxes and icons */}
<div className="absolute inset-0 pointer-events-none z-20">
    {/* Left floating textbox (pricing card "₦2,850") - top left of left phone */}
    <img 
        src="images/left-floatingtextbox.svg" 
        alt="" 
        className="absolute animate-float top-[50%] -left-[3%]"
    />
    
    {/* Left floating icon - bottom center of left phone */}
    <img 
        src="images/left-floatingicon.svg"
        alt="" 
        className="absolute top-[3%] left-[8%]"
    />
    
    {/* Right floating textbox (earnings/delivery card) - right side of right phone */}
    <img 
        src="images/right-floatingtextbox.svg"
        alt="" 
        className="absolute animate-float-delayed top-[70%] right-[1%]"
    />
    
    {/* Right floating icon (decorative elements at top right) */}
    <img 
        src="images/right-floatingicon.svg" 
        alt="" 
        className="absolute top-[25%] right-[6.5%]"
    />
</div>

         {/* Background ellipse at bottom */}
    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-full z-2">
        <img 
            src="images/Ellipse1090.svg" 
            alt="" 
            className="w-full  object-cover"
        />
    </div>
    </div>

    
</div>
                

                
           
        </section>
    )
}