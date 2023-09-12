import React from 'react'
import Heading1 from '../Headings/Heading1'
import { BlogCard } from '../Cards/Card'
import { Link } from 'react-router-dom'
import { RxArrowRight } from 'react-icons/rx'
import { useQuery } from '@tanstack/react-query'
import { getDocuments } from '../../services/document'
import Loader from '../Loader'

const Blog = () => {

    const { data, isLoading, isError } = useQuery({
        queryKey: ['news'],
        queryFn: () => getDocuments("news"),
        onSuccess: (data) => {
            // console.log(data);
        },
        staleTime: Infinity
    })

    return (
        <div className='my-16'>
            <Heading1 text1={"Our latest"} text2={"Blogs"} details={"T.E.S.L.A members actively contribute by writing frequent technical blogs and the best of them is published."} />
            <div className='my-20 flex flex-wrap gap-10 items-center justify-evenly'>
                {isLoading ? <Loader /> : isError ? <p>Something went wrong.</p> : data.slice(0,3).reverse().map((data) => (
                    <BlogCard key={data.$id} data={data} />
                ))}
            </div>

            <Link data-aos="zoom-in" style={{ textDecoration: "none" }} to="/news" className='bg-sky-600 absolute lg:right-32 md:right-16 right-10 hover:bg-sky-500 text-white visited:text-white font-semi-bold py-2.5 px-5 rounded-full flex items-center -mt-10'>
                <button className="mr-2 text-white text-sm">
                    View All
                </button>
                <RxArrowRight size={18} />
            </Link>
        </div>
    )
}

export default Blog