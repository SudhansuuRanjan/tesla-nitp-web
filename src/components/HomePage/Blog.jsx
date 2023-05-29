import React from 'react'
import Heading1 from '../Headings/Heading1'
import { BlogCard } from '../Cards/Card'

const Blog = () => {

    const blogData = [{
        title: "Getting Started with Blockchain Development",
        description: "Blockchain technology has gained significant attention in recent years, promising decentralized and secure solutions across various industries. As a developer, diving into blockchain development opens up a world of opportunities to create innovative applications and contribute to the advancement of this groundbreaking technology. In this blog, we will walk you through the essential steps and resources needed to embark on your journey as a blockchain developer.",
        image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Why-Blockchain-Matters.jpg",
        date: "29th May, 2023",
        author: "Sudhanshu Ranjan",
        authorImage: "https://avatars.githubusercontent.com/u/77230416?v=4",
        minutes: "6",
        tag: "Blockchain",
        id: "0"
    },
    {
        title: "Implementing AI in Power Systems: Revolutionizing the Future of Energy",
        description: "Artificial Intelligence (AI) has emerged as a transformative technology with the potential to revolutionize various industries. One sector that stands to benefit significantly from AI is the power system industry. The integration of AI techniques in power systems enables enhanced efficiency, reliability, and sustainability. In this blog, we will explore the applications and benefits of implementing AI in power systems, highlighting how it is shaping the future of energy.",
        image: "https://www.energy.gov/sites/default/files/styles/full_article_width/public/qtr-ch3-intro.jpg?itok=edlO53_p",
        date: "29th May, 2023",
        author: "Sudhanshu Ranjan",
        authorImage: "https://avatars.githubusercontent.com/u/77230416?v=4",
        minutes: "8",
        tag: "Electrical Engg.",
        id: "1",
    },
    {
        title: "Intro to IoT: Exploring the World of Connected Devices",
        description: "The Internet of Things (IoT) has become a buzzword in today's technological landscape. It refers to the vast network of interconnected devices that communicate and share data with each other over the internet. From smart homes and wearable devices to industrial machinery and smart cities, IoT is transforming the way we interact with the world around us. In this blog, we will provide an overview of IoT, its components, and its potential impact on various industries.",
        image: "https://www.offshore-technology.com/wp-content/uploads/sites/20/2021/10/Internet-of-Things-Technology-Trends.jpg",
        date: "29th May, 2023",
        author: "Sudhanshu Ranjan",
        authorImage: "https://avatars.githubusercontent.com/u/77230416?v=4",
        minutes: "8",
        tag: "Electronics",
        id: "2",
    }
    ]


    return (
        <div className='my-16'>
            <Heading1 text1={"A community of"} text2={"builders"} />
            <div className='my-20 flex flex-wrap gap-10 items-center justify-evenly'>
                {blogData.map((data) => (
                    <BlogCard key={data.id} data={data} />
                ))}
            </div>
        </div>
    )
}

export default Blog