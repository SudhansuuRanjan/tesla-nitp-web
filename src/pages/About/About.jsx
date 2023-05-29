import './About.scss'
import Heading from '../../components/Headings/Heading'

import React, { useEffect, useState } from 'react';

const About = () => {

  const [visibleParagraphs, setVisibleParagraphs] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const paragraphs = document.querySelectorAll('.scroll-down-paragraph');
      const windowHeight = window.innerHeight;

      const visible = [];
      paragraphs.forEach((paragraph) => {
        var paragraphOffset = 500;
        const shouldShow = window.pageYOffset + windowHeight > paragraphOffset;

        if (shouldShow) {
          visible.push(paragraph.id);

        }
      });

      setVisibleParagraphs(visible);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);




  return (
    <div className='pt-16 min-h-screen'>
      <Heading heading="ABOUT"></Heading>


      <div className='about-container'>
        <p>
          Paragraph 0

          Civil Engineering Students Club with all it's past success and legacy is a Civil oriented technical club that intends to bridge the gap between academic life and industrial job experience in order to develop students' abilities and prepare them for the workforce, which will not only make them more disciplined in attitude but will also provide them a platform similar to that of a real-life professional work environment.
        </p>
        <br />

        <p className={`scroll-down-paragraph ${visibleParagraphs.includes('paragraph1') ? 'visible' : ''}`} id="paragraph1">
          Paragraph 1

          Civil Engineering Students Club with all it's past success and legacy is a Civil oriented technical club that intends to bridge the gap between academic life and industrial job experience in order to develop students' abilities and prepare them for the workforce, which will not only make them more disciplined in attitude but will also provide them a platform similar to that of a real-life professional work environment.
        </p>
        <br />
        <p className={`scroll-down-paragraph ${visibleParagraphs.includes('paragraph2') ? 'visible' : ''}`} id="paragraph2">
          Paragraph 2
          Civil Engineering Students Club with all it's past success and legacy is a Civil oriented technical club that intends to bridge the gap between academic life and industrial job experience in order to develop students' abilities and prepare them for the workforce, which will not only make them more disciplined in attitude but will also provide them a platform similar to that of a real-life professional work environment.
        </p>
        <br />

        <p className={`scroll-down-paragraph ${visibleParagraphs.includes('paragraph3') ? 'visible' : ''}`} id="paragraph3">
          Paragraph 3
          Civil Engineering Students Club with all it's past success and legacy is a Civil oriented technical club that intends to bridge the gap between academic life and industrial job experience in order to develop students' abilities and prepare them for the workforce, which will not only make them more disciplined in attitude but will also provide them a platform similar to that of a real-life professional work environment.

        </p>


      </div>

    </div>
  )
}

export default About