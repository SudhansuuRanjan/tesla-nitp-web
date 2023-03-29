import React from 'react'
import './Newsletter.scss'
import Heading from '../../components/Headings/Heading'

const Newsletter = () => {
  return (
    <div className='pt-16'>
      <Heading heading="NEWS" />
      <div className='news-grid'>
        <News />
        <News />
        <News />
        <News />
        <News />
        <News />
      </div>
    </div>
  )
}

export default Newsletter