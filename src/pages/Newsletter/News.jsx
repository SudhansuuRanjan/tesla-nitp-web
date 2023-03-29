import React from 'react'
import './Newsletter.scss'

const News = () => {
  return (
    <>
      <div data-aos="fade-up" class="newsletter-card aos-init aos-animate">
        <div class="card-img">
          <img src="src/assets/Images/algo session.jpg" alt="Event-image" />
        </div>
        <div class="card-info">
          <p class="date">2022-11-01</p>
          <h1>Apple Park: Heart of a Trillion Dollar Company</h1>
          <p>Apple Park was the dream of Steve Jobs. A headquarter like no other, a structure..</p>
          <a href="">
            <button>Read →</button>
          </a>
        </div>
      </div>
    </>
  )
}

export default News