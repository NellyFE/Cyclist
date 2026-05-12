export const Install = () => {
  return (
    <section className=" flex flex-col justify-center items-center mx-8 py-8">

        <div className="install py-8 border w-full rounded-3xl">
        <div className="flex flex-col items-center p-4 ">
      <p className="font-semibold text-white text-center text-5xl w-199" >Find Drivers & Ride Smoothly With Wallet-Powered Payments</p>
      <p className="leading-8 text-white text-center">
        Find drivers around you and pay instantly using your <br /> Cyclist wallet. No
        Cash, No Stress 
      </p>
      </div>

      <div className="flex gap-4 items-center justify-center">
        <img src="images/appstore.svg" alt="app store" />
        <img src="images/googlestore.png" alt="google store" />
      </div>
      
      </div>
    </section>
  );
};
