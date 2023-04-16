import React from 'react'
import './Newsletter.scss'
import Heading from '../../components/Headings/Heading'
import News from './News'

const Newsletter = () => {
  return (
    <div className='pt-16'>
      <Heading heading="NEWS" />
      <div className='news-grid lg:max-w-[85rem] m-auto'>
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