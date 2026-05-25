export const Features = () => {
  return (
    <section className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-16">

        {/* Header Section */}
        <div className="flex flex-col text-center items-center justify-center w-full max-w-2xl mx-auto">
          <p className="text-[#218D42] text-sm font-semibold mb-2 tracking-wider uppercase">
            FEATURES
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            Why Choose <span className="text-[#218D42]">Cyclist</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg px-2">
            A smarter way to book rides, built around simplicity, speed, and
            affordability.
          </p>
        </div>

        {/* Easy Payment Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center bg-[#F5F5F5] rounded-2xl px-6 sm:px-8 pt-10 sm:pt-16">
          {/* Left - Text Content */}
          <div className="space-y-3 sm:space-y-4 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold">Easy Payment</h3>
            <p className="text-gray-600 text-base sm:text-lg">
              No cash, No stress — Quick and secure payments made
              easy with your Cyclist wallet.
            </p>
          </div>

          {/* Right - iPhone Mockup */}
          <div className="flex justify-center">
            <img
              src="images/iphone-features.svg"
              alt="Easy Payment Feature"
              className="w-full max-w-[280px] sm:max-w-sm md:max-w-md h-auto"
            />
          </div>
        </div>

        {/* Fast Ride & Schedule Ride Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">

          {/* Fast Ride Card */}
          <div className="rounded-2xl p-6 sm:p-8 shadow-sm bg-[#F5F5F5]">
            {/* Mockup Container */}
            <div className="relative rounded-xl p-4 sm:p-6 min-h-[280px] sm:min-h-[360px] lg:min-h-[400px] overflow-hidden">
              <img
                src="images/textbox1.svg"
                alt="Ride request from Dorcit Biang"
                className="absolute left-4 sm:left-8 top-4 w-[90%] sm:w-full h-auto"
              />
              <img
                src="images/textbox2.svg"
                alt="Ride request from Emmanuel Obong"
                className="absolute -left-4 sm:-left-10
                  top-40 sm:top-56
                  w-[90%] sm:w-full h-auto"
              />
            </div>

            {/* Text Content */}
            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 mt-2">Fast Ride</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Get matched quickly and reach your destination without unnecessary
              delays.
            </p>
          </div>

          {/* Schedule Ride Card */}
          <div className="bg-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm">
            {/* Mockup Container with Overlays */}
            <div className="rounded-xl p-4 sm:p-6 relative min-h-[280px] sm:min-h-[360px] lg:min-h-[400px] overflow-hidden">
              {/* Main notification card */}
              <img
                src="images/overlay1.svg"
                alt="Cyclist ride schedule reminder"
                className="w-full h-auto relative z-30 mt-8 sm:mt-16"
              />

              {/* Stacked cards for depth effect */}
              <img
                src="images/overlay1.svg"
                alt=""
                className="w-[80%] h-auto absolute
                  bottom-20 sm:bottom-30
                  left-1/2 -translate-x-1/2 opacity-70 z-20"
              />
              <img
                src="images/overlay1.svg"
                alt=""
                className="w-[70%] h-auto absolute
                  bottom-12 sm:bottom-20
                  left-1/2 -translate-x-1/2 opacity-60 z-10"
              />
            </div>

            {/* Text Content */}
            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 mt-2">Schedule Ride</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Plan ahead by scheduling your ride for a time that works best for
              you.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};