import React from 'react'
import './Newsletter.scss'

const News = () => {
  return (
    <>
      <div data-aos="fade-up" className="newsletter-card aos-init aos-animate">
        <div className="card-img">
          <img src="src/assets/Images/algosession.jpg" alt="Event-image" />
        </div>
        <div className="card-info">
          <p className="date">2022-11-01</p>
          <h1>Apple Park: Heart of a Trillion Dollar Company</h1>
          <p>Apple Park was the dream of Steve Jobs. A headquarter like no other, a structure..</p>
          <a href="#">
            <button>Read →</button>
          </a>
        </div>
      </div>
    </>
  )
}

export default News