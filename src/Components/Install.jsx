export const Install = () => {
  return (
    <section className="flex flex-col justify-center items-center
      mx-4 sm:mx-6 lg:mx-8
      py-6 sm:py-8">

      <div className="install w-full rounded-2xl sm:rounded-3xl
        py-8 sm:py-10 lg:py-12
        px-6 sm:px-10 lg:px-16">

        <div className="flex flex-col items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <h2 className="font-semibold text-white text-center
            text-2xl sm:text-3xl lg:text-4xl xl:text-5xl
            w-full max-w-xs sm:max-w-lg lg:max-w-3xl
            leading-tight sm:leading-snug">
            Find Drivers & Ride Smoothly With Wallet-Powered Payments
          </h2>

          <p className="text-white text-center
            text-sm sm:text-base
            leading-6 sm:leading-8
            max-w-xs sm:max-w-md lg:max-w-xl
            opacity-90">
            Find drivers around you and pay instantly using your Cyclist wallet.
            No Cash, No Stress
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
          <img
            src="images/appstore.svg"
            alt="app store"
            className="h-10 sm:h-12 w-auto"
          />
          <img
            src="images/googlestore.png"
            alt="google store"
            className="h-10 sm:h-12 w-auto"
          />
        </div>

      </div>
    </section>
  );
};