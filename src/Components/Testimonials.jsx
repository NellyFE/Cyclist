import React from "react";
import "swiper/css";

export const Testimonials = () => {
  const topRowTestimonials = [
    {
      name: "Amara Johnson",
      location: "Elect, Akwa Ibom",
      rating: 5,
      text: "I love how Cyclist suggests rides that fit my wallet. No surprises, no failed bookings, just smooth, easy trips every time!",
      image: "images/amaraq.svg",
    },
    {
      name: "Sarah Benson",
      location: "Ret Eleerin, Akwa Ibom",
      rating: 5,
      text: "I feel confident using Cyclist because I know the rides I see, It's reliable and stress-free.",
      image: "images/sarah.svg",
    },
  ];

  const bottomRowTestimonials = [
    {
      name: "Greg Udo",
      location: "Idak Okpo, Akwa Ibom",
      rating: 5,
      text: "Booking a courier ride was simple. I just added the package details, and Cyclist suggested the best option within my wallet.",
      image: "images/greg.svg",
    },
    {
      name: "James Williams",
      location: "Ebet, Akwa Ibom",
      rating: 5,
      text: "Cyclist makes commuting around Uyo so easy. I always know my ride fits my wallet and my schedule",
      image: "images/james.svg",
    },
  ];

  const TestimonialCard = ({ testimonial }) => (
    <div className="bg-white border border-gray-200 rounded-3xl p-5 sm:p-6 shadow-sm
      w-[280px] xs:w-[300px] sm:w-[350px] md:w-[400px]
      shrink-0">
      {/* Header */}
      <div className="flex items-start justify-between mb-4 pb-2 border-b-2 border-b-[#E9EFF5]">
        <div className="flex items-center gap-3">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
          />
          <div>
            <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
              {testimonial.name}
            </h4>
            <p className="text-xs text-gray-500">{testimonial.location}</p>
          </div>
        </div>
        <div className="flex gap-0.5 sm:gap-1 flex-shrink-0">
          {[...Array(testimonial.rating)].map((_, i) => (
            <span key={i} className="text-[#FBBC04] text-xs sm:text-sm">⭐</span>
          ))}
        </div>
      </div>
      <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">
        {testimonial.text}
      </p>
    </div>
  );

  return (
    <section className="py-10 sm:py-16 bg-white overflow-hidden">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12 px-4">
        <p className="text-[#218D42] text-xs sm:text-sm font-semibold mb-2 tracking-wider uppercase">
          TESTIMONIALS
        </p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          Hear From Our <span className="text-[#218D42]">Riders</span>
        </h2>
      </div>

      {/* Top Row - Scrolling Right */}
      <div className="relative mb-4 sm:mb-6">
        {/* Fade edges — hidden on mobile to save space */}
        <div className="hidden sm:block absolute left-0 top-0 bottom-0 w-16 md:w-32
          bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="hidden sm:block absolute right-0 top-0 bottom-0 w-16 md:w-32
          bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex gap-4 sm:gap-6 animate-scroll-right">
          {[...Array(3)].map((_, index) => (
            <React.Fragment key={index}>
              {topRowTestimonials.map((testimonial, i) => (
                <TestimonialCard
                  key={`top-${index}-${i}`}
                  testimonial={testimonial}
                />
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Bottom Row - Scrolling Left */}
      <div className="relative">
        <div className="hidden sm:block absolute left-0 top-0 bottom-0 w-16 md:w-32
          bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="hidden sm:block absolute right-0 top-0 bottom-0 w-16 md:w-32
          bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex gap-4 sm:gap-6 animate-scroll-left">
          {[...Array(3)].map((_, index) => (
            <React.Fragment key={index}>
              {bottomRowTestimonials.map((testimonial, i) => (
                <TestimonialCard
                  key={`bottom-${index}-${i}`}
                  testimonial={testimonial}
                />
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};