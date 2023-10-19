import "./About_Partners.scss";
import Heading from "../../components/Headings/Heading";
import transition from "../../utils/transition";

const AboutPartners = () => {
  document.title = "Tesla NIT Patna | About Partners";

  return (
    <div className="pt-16 min-h-screen" >
      <Heading heading="PARTNERS"></Heading>

      <div className=" m-10 lg:max-w-[80%] md:w-[85%] w-[94%] bg-gray-900 rounded-3xl p-5 py-10 mx-auto flex flex-col md:py-[20]   sm:flex-row  " >
        <div className="m-2 basis-[60%] px-2 hover:scale-95 duration-1000 ">
          <h2 className="text-4xl back">ALGORAND</h2>
          <div class="w-48 mb-5 mt-1 h-1 bg-pink-500 "></div>
          <p  >
            Welcome to the official website of <span>T.E.S.L.A. Club</span>, the
            premier club for Electrical Engineering enthusiasts and
            professionals! Founded in 2021 by a group of bright-minded seniors,
            under the guidance of our esteemed <span>PI - Dr. Amitesh Sir</span>
            , T.E.S.L.A. Club is dedicated to fostering public speaking,
            teamwork, technical excellence, and management skills among its
            members. Our primary aim is to provide a platform for seniors,
            juniors, and alumni to come together, learn, grow, and secure
            rewarding careers in the field of Electrical Engineering.
          </p>
        </div>
        <div className="m-2 basis-[40%] sm:px-5  py-2 px-2 overflow-hidden rounded-xl lg:mt-0 md:mt-0 mt-5 " d>
          <img
            src="https://algorand.com/static/algorand-og-image-98d634bc4a6f00c455b35830674ae96b.png"
            className="rounded-xl w-full hover:scale-105 duration-1000 shadow-xl hue-rotate-30 "
          ></img>
        </div>
      </div>

      <div className=" m-10 lg:max-w-[80%] md:w-[85%] w-[94%] bg-gray-900 rounded-3xl p-5 py-10 mx-auto flex flex-col md:py-[80]   sm:flex-row   ">
      <div className="m-2 basis-[40%] sm:px-5  py-2 px-2 overflow-hidden rounded-xl lg:mb-0 md:mb-0 mb-10  ">
          <img
            src="https://www.altcoinbuzz.io/wp-content/uploads/2022/01/what-is-near-protocol.jpg"
            className="rounded-xl w-full hover:scale-105 duration-1000 shadow-xl hue-rotate-30 "
          ></img>
        </div>

        <div className="m-2 basis-[60%] px-2 hover:scale-95 duration-1000 ">
          <h2 className="text-4xl back">NEAR</h2>
          <div class="w-24 mb-5 mt-1 h-1 bg-pink-500 "></div>
          <p  >
            Welcome to the official website of <span>T.E.S.L.A. Club</span>, the
            premier club for Electrical Engineering enthusiasts and
            professionals! Founded in 2021 by a group of bright-minded seniors,
            under the guidance of our esteemed <span>PI - Dr. Amitesh Sir</span>
            , T.E.S.L.A. Club is dedicated to fostering public speaking,
            teamwork, technical excellence, and management skills among its
            members. Our primary aim is to provide a platform for seniors,
            juniors, and alumni to come together, learn, grow, and secure
            rewarding careers in the field of Electrical Engineering.
          </p>
        </div>
      </div>

      <div className=" m-10 lg:max-w-[80%] md:w-[85%] w-[94%] bg-gray-900 rounded-3xl p-5 py-10 mx-auto flex flex-col md:py-[80]   sm:flex-row  ">
        <div className="m-2 basis-[60%] px-2 hover:scale-95 duration-1000 ">
          <h2 className="text-4xl back">Edu DAO</h2>
          <div class="w-40 mb-5 mt-1 h-1 bg-pink-500 "></div>
          <p  >
            Welcome to the official website of <span>T.E.S.L.A. Club</span>, the
            premier club for Electrical Engineering enthusiasts and
            professionals! Founded in 2021 by a group of bright-minded seniors,
            under the guidance of our esteemed <span>PI - Dr. Amitesh Sir</span>
            , T.E.S.L.A. Club is dedicated to fostering public speaking,
            teamwork, technical excellence, and management skills among its
            members. Our primary aim is to provide a platform for seniors,
            juniors, and alumni to come together, learn, grow, and secure
            rewarding careers in the field of Electrical Engineering.
          </p>
        </div>
        <div className="m-2 basis-[40%] sm:px-5  py-2 px-2 overflow-hidden rounded-xl lg:mt-0 md:mt-0 mt-5  ">
          <img
            src="https://pbs.twimg.com/profile_images/1470977630946181122/rXTRvqJV_400x400.jpg"
            className="rounded-xl w-full hover:scale-105 duration-1000 shadow-xl hue-rotate-30 "
          ></img>
        </div>
      </div>

    </div>
  );
};

export default transition(AboutPartners);
