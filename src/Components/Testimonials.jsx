import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
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
    <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm min-w-[350px] md:min-w-[400px] flex-shrink-0">
      {/* Header: Avatar, Name/Location, and Stars */}
      <div className="flex items-start justify-between mb-4 pb-2 border-b-2 border-b-[#E9EFF5]">
        {/* Left: Avatar and Name/Location */}
        <div className="flex items-center gap-3">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
            <p className="text-xs text-gray-500">{testimonial.location}</p>
          </div>
        </div>

        {/* Right: Stars */}
        <div className="flex gap-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <span key={i} className="text-[#FBBC04] text-sm">
              ⭐
            </span>
          ))}
        </div>
      </div>

      {/* Testimonial Text at the bottom */}
      <p className="text-gray-700 leading-relaxed text-sm">
        {testimonial.text}
      </p>
    </div>
  );

  return (
    <section className="py-16 bg-white overflow-hidden">
      {/* Header */}
      <div className="text-center mb-12 px-4">
        <p className="text-[#218D42] text-sm font-semibold mb-2 tracking-wider">
          TESTIMONIALS
        </p>
        <h2 className="text-4xl font-bold">
          Hear From Our <span className="text-[#218D42]">Riders</span>
        </h2>
      </div>

      {/* Top Row - Scrolling Left to Right */}
      <div className="relative mb-6">
        <div className="flex gap-6 animate-scroll-right">
          {/* Repeat 3 times for seamless loop */}
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

    
      <div className="relative">
        <div className="flex gap-6 animate-scroll-left">
    
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
