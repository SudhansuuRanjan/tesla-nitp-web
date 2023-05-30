import './About.scss'
import Heading from '../../components/Headings/Heading'
import Aos from 'aos';
import React, { useEffect, } from 'react';

const About = () => {

  // useEffect(() => {
  //       Aos.init((duration:2000));
  // }, {});


  return (
    <div className='pt-16 min-h-screen'>
      <Heading heading="ABOUT"></Heading>


      <div className='about-container'>
          <p className='paragraph1' data-aos="fade-up">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae officiis unde harum voluptates consequuntur. Error, non pariatur fugiat neque in asperiores! Eum in facere quos, est culpa expedita quaerat quas?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos qui dolorem quos nostrum eligendi iste nulla reprehenderit consequuntur. Ex maiores quidem at facilis repudiandae rem odit aliquid obcaecati odio fugiat!
          </p>

        <br />
        <p className='paragraph2' data-aos="fade-up">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae officiis unde harum voluptates consequuntur. Error, non pariatur fugiat neque in asperiores! Eum in facere quos, est culpa expedita quaerat quas?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos qui dolorem quos nostrum eligendi iste nulla reprehenderit consequuntur. Ex maiores quidem at facilis repudiandae rem odit aliquid obcaecati odio fugiat!
          </p>

          <br />
        <p className='paragraph3' data-aos="fade-up">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae officiis unde harum voluptates consequuntur. Error, non pariatur fugiat neque in asperiores! Eum in facere quos, est culpa expedita quaerat quas?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos qui dolorem quos nostrum eligendi iste nulla reprehenderit consequuntur. Ex maiores quidem at facilis repudiandae rem odit aliquid obcaecati odio fugiat!
          </p>

      </div>

    </div>
  )
}

export default About