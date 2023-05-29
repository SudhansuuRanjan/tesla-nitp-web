import React from 'react'
import './Newsletter.scss'
import Heading from '../../components/Headings/Heading'
import News from './News'
import {BlogCard} from '../../components/Cards/Card'

const Newsletter = () => {

  const blogData = [{
    title: "How to get started with Blockchain",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://cdn.pixabay.com/photo/2013/07/18/15/09/death-164761_1280.jpg",
    date: "12th October, 2023",
    author: "Saurav Kumar",
    authorImage: "https://cdn.pixabay.com/photo/2013/07/18/15/09/death-164761_1280.jpg",
    minutes: "5",
    tag: "Blockchain",
    id: "0"
  },
  {
    title: "How to get started with Blockchain",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://cdn.pixabay.com/photo/2013/07/18/15/09/death-164761_1280.jpg",
    date: "12th October, 2023",
    author: "Saurav Kumar",
    authorImage: "https://cdn.pixabay.com/photo/2013/07/18/15/09/death-164761_1280.jpg",
    minutes: "5",
    tag: "Blockchain",
    id: "1"
  },
  {
    title: "How to get started with Blockchain",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://cdn.pixabay.com/photo/2013/07/18/15/09/death-164761_1280.jpg",
    date: "12th October, 2023",
    author: "Saurav Kumar",
    authorImage: "https://cdn.pixabay.com/photo/2013/07/18/15/09/death-164761_1280.jpg",
    minutes: "5",
    tag: "Blockchain",
    id: "2"
  }
  ]

  return (
    <div className='pt-16'>
      <Heading heading="NEWS" />
      <div className='my-20 flex flex-wrap gap-10 items-center justify-evenly'>
        {blogData.map((data) => (
          <BlogCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  )
}

export default Newsletter