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

         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, ut optio. Quas atque vero nesciunt corporis necessitatibus, voluptatibus recusandae est, laudantium, voluptates consectetur vitae quod libero illo assumenda ipsum. Aliquid?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis magni perferendis similique amet laborum illo quia provident esse quas voluptatem ullam, quis itaque. Error quis ex commodi magni minus eaque.
        </p>
        <br />

        <p className={`scroll-down-paragraph ${visibleParagraphs.includes('paragraph1') ? 'visible' : ''}`} id="paragraph1">
          Paragraph 1

          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, ut optio. Quas atque vero nesciunt corporis necessitatibus, voluptatibus recusandae est, laudantium, voluptates consectetur vitae quod libero illo assumenda ipsum. Aliquid?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis magni perferendis similique amet laborum illo quia provident esse quas voluptatem ullam, quis itaque. Error quis ex commodi magni minus eaque.
        </p>
        <br />
        <p className={`scroll-down-paragraph ${visibleParagraphs.includes('paragraph2') ? 'visible' : ''}`} id="paragraph2">
          Paragraph 2
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, ut optio. Quas atque vero nesciunt corporis necessitatibus, voluptatibus recusandae est, laudantium, voluptates consectetur vitae quod libero illo assumenda ipsum. Aliquid?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis magni perferendis similique amet laborum illo quia provident esse quas voluptatem ullam, quis itaque. Error quis ex commodi magni minus eaque.
        </p>
        <br />

        <p className={`scroll-down-paragraph ${visibleParagraphs.includes('paragraph3') ? 'visible' : ''}`} id="paragraph3">
          Paragraph 3
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, ut optio. Quas atque vero nesciunt corporis necessitatibus, voluptatibus recusandae est, laudantium, voluptates consectetur vitae quod libero illo assumenda ipsum. Aliquid?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis magni perferendis similique amet laborum illo quia provident esse quas voluptatem ullam, quis itaque. Error quis ex commodi magni minus eaque.

        </p>


      </div>

    </div>
  )
}

export default About