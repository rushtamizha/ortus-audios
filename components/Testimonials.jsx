"use client"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Quote, Star, UserCheck } from 'lucide-react';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const reviews = [
  {
    name: "Arjun Mehta",
    role: "Homeowner, Indiranagar",
    comment: "The precision in the Dolby Atmos calibration is unlike anything I've heard. Ortus Audios transformed our basement into a true private cinema. Professional and punctual.",
    rating: 5,
    project: "9.2.4 Home Theatre"
  },
  {
    name: "Priya Ramkumar",
    role: "Architect, Whitefield",
    comment: "As an architect, I value aesthetics. Ortus integrated the Bose speakers so seamlessly into the ceiling design. The sound quality is matched only by their clean installation.",
    rating: 5,
    project: "Whole Home Audio"
  },
  {
    name: "Vikram Seth",
    role: "CEO, Tech Firm",
    comment: "Upgraded our corporate lounge with Epson 4K projection. The clarity even in daylight is impressive. Their technical team knows exactly what they are doing.",
    rating: 5,
    project: "Corporate AV Suite"
  },{
    name: "Arjun Mehta",
    role: "Homeowner, Indiranagar",
    comment: "The precision in the Dolby Atmos calibration is unlike anything I've heard. Ortus Audios transformed our basement into a true private cinema. Professional and punctual.",
    rating: 5,
    project: "9.2.4 Home Theatre"
  },
  {
    name: "Priya Ramkumar",
    role: "Architect, Whitefield",
    comment: "As an architect, I value aesthetics. Ortus integrated the Bose speakers so seamlessly into the ceiling design. The sound quality is matched only by their clean installation.",
    rating: 5,
    project: "Whole Home Audio"
  },
  {
    name: "Vikram Seth",
    role: "CEO, Tech Firm",
    comment: "Upgraded our corporate lounge with Epson 4K projection. The clarity even in daylight is impressive. Their technical team knows exactly what they are doing.",
    rating: 5,
    project: "Corporate AV Suite"
  },
  {
    name: "Mahendra Varman",
    role: "Customer",
    comment: "We enjoyed the audio and home theatre experience is extremely Good in Ortus Audios, well explained the audio system according to the customer needs I personally recommend this place for any music lovers for audio and home theatre system.",
    rating: 5,
    project: "home theatre"
  },
  {
    name: "Naddy B",
    role: "Customer",
    comment: "Overall, I’m very happy with the experience, and I would highly recommend Ortus Audios to anyone looking for a premium audio solution. Definitely a great option worth exploring!",
    rating: 5,
    project: "Amp & Speakers"
  },
  {
    name: "Beena Varman",
    role: "Customer",
    comment: "Ortus Audio is a must visit for movie lovers and music enthusiasts. It is amazing and the space is beautifully designed.The home theatre setup is incredible and an outstanding experience altogether. Their attention to every single details and commitment to quality are evident. Highly recommended.",
    rating: 5,
    project: "Home theater"
  },
  {
    name: "savitha stephen",
    role: "Customer",
    comment: "We recently visited Ortus, it's an amazing experience... Sound quality is massive upgrade,Clarity and Detail- you can hear subtle details like minute ones.... so wonderful, totally we loved it and the ambience is excellent.",
    rating: 5,
    project: "Home theater"
  },
  {
    name: "praveen kumar",
    role: "Customer",
    comment: "Jamo speakers deliver an exceptionally precise and balanced sound experience. The sound engineering is excellent, with crystal-clear highs, rich mids, and well-controlled bass. Music feels very natural and detailed, almost like listening in a real studio or a live orchestra setting. Highly recommended for true music lovers.",
    rating: 5,
    project: "Home theater"
  },
  {
    name: "ashok kumaran",
    role: "Customer",
    comment: "This is the best place to feel the real cinema experience, also the staff's are very friendly and well knowledged to guide you thru your home cinema projects.",
    rating: 5,
    project: "Home theater"
  },
  {
    name: "suresh",
    role: "Customer",
    comment: "Great staff ..complete knowledge of the job they r doing..and a awesome exp in the theater...",
    rating: 5,
    project: "Home theater"
  },
  {
    name: "Bhaskar enaganti",
    role: "Customer",
    comment: "Had a really great experience with Ortus Audios. They helped me choose the right setup and completed the home theatre installation smoothly. The sound quality is amazing and everything was neatly done. If you’re looking for a good home theatre setup in Bengaluru, I would definitely recommend them.",
    rating: 5,
    project: "Home theater"
  },
  {
    name: "Sharlet Christina",
    role: "Customer",
    comment: "Very professional team at Ortus Audios. They did a perfect home theatre installation in Bengaluru with Dolby sound system setup. One of the best audio visual solution providers near me.",
    rating: 5,
    project: "Dolby sound system"
  },
  {
    name: "Anju .M Velu",
    role: "Customer",
    comment: "Ortus Audios provides the best home theatre installation in Kammanahalli, Bengaluru. The surround sound system is amazing and the installation was done perfectly. Highly recommended for home theatre setup.",
    rating: 5,
    project: "home theatre "
  },
  {
    name: "Sreejith R",
    role: "Customer",
    comment: "Ortus Audios delivers sound the way it’s meant to be heard. Exceptional clarity, great performance, and reliable service. A top choice for anyone looking for high-quality audio solutions.",
    rating: 5,
    project: "home theatre "
  }
];

const Testimonials = () => {
  return (
    <section id='testimonials'  className="bg-[#020205] py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#8B0000]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-2 mb-4">
            <UserCheck className="text-[#8B0000] w-4 h-4" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/50">
              Client Chronicles
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tighter">
            Voices of <span className="text-white/50 italic">Excellence.</span>
          </h2>
        </div>

        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true, el: '.custom-pagination' }}
            breakpoints={{
              1024: { slidesPerView: 2 },
            }}
            className="pb-20"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="h-full p-8 md:p-12 rounded-[2.5rem] bg-white/[0.03] border border-white/5 backdrop-blur-sm relative group hover:bg-white/[0.05] transition-all duration-500">
                  {/* Floating Quote Icon */}
                  <div className="absolute -top-5 right-12 w-12 h-12 bg-[#8B0000] rounded-2xl flex items-center justify-center shadow-[0_10px_30px_rgba(139,0,0,0.3)] transition-transform group-hover:scale-110">
                    <Quote className="text-white fill-current" size={20} />
                  </div>

                  <div className="flex gap-1 mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={14} className="text-[#9B870C] fill-current" />
                    ))}
                  </div>

                  <p className="text-lg md:text-xl text-white/80 font-medium leading-relaxed mb-8 italic tracking-tight">
                    "{review.comment}"
                  </p>

                  <div className="flex items-center justify-between border-t border-white/5 pt-8">
                    <div>
                      <h4 className="text-white font-black text-sm uppercase tracking-widest">{review.name}</h4>
                      <p className="text-white/30 text-[10px] uppercase font-bold tracking-widest mt-1">{review.role}</p>
                    </div>
                    <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[9px] font-black uppercase tracking-widest text-[#8B0000]">
                      {review.project}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Pagination Container */}
          <div className="custom-pagination flex justify-center gap-3 mt-4" />
        </div>
      </div>

      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.15;
          width: 12px;
          height: 2px;
          border-radius: 0;
          transition: all 0.4s ease;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          opacity: 1;
          width: 40px;
          background: #8B0000 !important;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;