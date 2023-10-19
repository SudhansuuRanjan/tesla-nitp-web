import "./HomePage.scss";
import About from "../../components/HomePage/About";
import Event from "../../components/HomePage/Event";
import Team from "../../components/HomePage/Team";
import Blog from "../../components/HomePage/Blog";
import Faq from "../../components/HomePage/Faq";
import PI from "../../components/PI/PI";
import GalleryCarousel from "../../components/HomePage/GalleryCarousel";
import BackToTopButton from "../../components/scroll/BackToTopButton";
import Testimonial from "../../components/AlumniTestimonials/Testimonial";
import transition from "../../utils/transition";

const HomePage = () => {
  document.title = "TESLA | NITP";
  
  return (
    <div className="pt-16 bg-black">
      <div className="justify-center flex items-center my-[5rem] lg:gap-1 md:gap-2 gap-6 flex-col text-5xl font-bold">
        <h1
          data-aos="zoom-in"
          className="text-center text-transparent z-20 lg:text-8xl md:text-6xl text-5xl mx-8 bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-purple-500  font-extrabold uppercase tracking-tighter"
        >
          Official Website of
        </h1>
        <h1
          data-aos="zoom-in"
          className="font-bold text-center z-20 text-transparent lg:text-4xl md:text-3xl text-3xl mx-5 bg-clip-text bg-gradient-to-b from-gray-300 to-gray-600 my-3"
        >
          Technical Electrical Society for Learning & Application
        </h1>
        <h1
          data-aos="zoom-in"
          className="font-extrabold text-center z-20 text-transparent lg:text-7xl md:text-5xl text-4xl bg-clip-text bg-gradient-to-r from-blue-400 to-sky-600"
        >
          T.E.S.L.A. NIT Patna
        </h1>
        <div className="relative z-10 flex items-center w-full justify-center">
          <img
            draggable={false}
            data-aos="fade-up"
            src="./images/hero.png"
            className="h-auto w-full lg:my-[-8rem] md:my-[-5rem]"
            alt="electric"
            width={965}
            height={480}
          />
        </div>
      </div>

      <div className="lg:mx-[4rem] md:mx-[3rem] mx-[2rem]">
        <About />
        <Event />
        <Team />
        <Blog />
        <PI />
        <GalleryCarousel />
        <Testimonial />
        <Faq />
        <BackToTopButton />
      </div>
    </div>
  );
};

export default transition(HomePage);
