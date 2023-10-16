import React from "react";
import { TestimonialCard } from "../Cards/Card";

import { Navigation, Pagination, Parallax, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./AlumniTestimonial.scss";


const TestmonialData = [
  {
    id: "0",
    name: "Suraj Kumar(2025)",
    profession: "Frontend Engineer @ Google",
    message:
      "Develop your skills in electrical engineering and blockchain through hands-on projects, workshops, and competitions. Network with industry professionals and unleash your true potential with T.E.S.L.A. Club.",
    image:
      "https://sujeevshakya.com/wp-content/uploads/2017/12/unlockingpotential-1288x724.jpg",
  },
  {
    id: "1",
    name: "XYZ",
    profession: "Backend Engineer @ Microsoft",
    message:
      "Develop your skills in electrical engineering and blockchain through hands-on projects, workshops, and competitions. Network with industry professionals and unleash your true potential with T.E.S.L.A. Club.",
    image:
      "https://sujeevshakya.com/wp-content/uploads/2017/12/unlockingpotential-1288x724.jpg",
  },
  {
    id: "2",
    name: "ABC",
    profession: "NBA Player",
    message:
      "Develop your skills in electrical engineering and blockchain through hands-on projects, workshops, and competitions. Network with industry professionals and unleash your true potential with T.E.S.L.A. Club.",
    image:
      "https://sujeevshakya.com/wp-content/uploads/2017/12/unlockingpotential-1288x724.jpg",
  },
  {
    id: "3",
    name: "ABC",
    profession: "NBA Player",
    message:
      "Develop your skills in electrical engineering and blockchain through hands-on projects, workshops, and competitions. Network with industry professionals and unleash your true potential with T.E.S.L.A. Club.",
    image:
      "https://sujeevshakya.com/wp-content/uploads/2017/12/unlockingpotential-1288x724.jpg",
  },
  {
    id: "4",
    name: "Suraj Kumar(2025)",
    profession: "Frontend Engineer @ Google",
    message:
      "Develop your skills in electrical engineering and blockchain through hands-on projects, workshops, and competitions. Network with industry professionals and unleash your true potential with T.E.S.L.A. Club.",
    image:
      "https://sujeevshakya.com/wp-content/uploads/2017/12/unlockingpotential-1288x724.jpg",
  },
  {
    id: "5",
    name: "koi bhi Kumar(2025)",
    profession: "singer Engineer @ Google",
    message:
      "Develop your skills in electrical engineering and blockchain through hands-on projects, workshops, and competitions. Network with industry professionals and unleash your true potential with T.E.S.L.A. Club.",
    image:
      "https://sujeevshakya.com/wp-content/uploads/2017/12/unlockingpotential-1288x724.jpg",
  }, {
    id: "6",
    name: "Mayank Kumar(2025)",
    profession: "Dancer @ Google",
    message:
      "Develop your skills in electrical engineering and blockchain through hands-on projects, workshops, and competitions. Network with industry professionals and unleash your true potential with T.E.S.L.A. Club.",
    image:
      "https://sujeevshakya.com/wp-content/uploads/2017/12/unlockingpotential-1288x724.jpg",
  }
];

const Testimonial = () => {
  return (
    <div className="py-16">
      <h1
        data-aos="zoom-in"
        className="font-bold lg:text-5xl md:text-3xl text-2xl text-center  items-center  "
      >
        Message from our <span className="text-sky-500">Alumni</span>
      </h1>

      <div className="mt-20 relative">
        <Swiper
          data-aos="zoom-in"
          modules={[Navigation, Pagination, Parallax, A11y]}

          // parallax={true}
          pagination={{
            clickable: true,
            // dynamicBullets: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 70,
            },
          }}
        >


          <div className=" flex   items-center ">
            {TestmonialData.map((data) => (
              <SwiperSlide key={data.id}>
                <div className="mb-10">
                  <TestimonialCard
                    key={data.id}
                    name={data.name}
                    message={data.message}
                    image={data.image}
                    profession={data.profession}
                  />
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>

        <div className="swiper-button-prev bg-black hover:bg-black bg-opacity-50 hover:bg-opacity-40 text-white p-6 rounded-full"></div>
        <div className="swiper-button-next bg-black hover:bg-black bg-opacity-50 hover:bg-opacity-40 text-white p-6 rounded-full"></div>
      </div>
    </div>



  );
};

export default Testimonial;
