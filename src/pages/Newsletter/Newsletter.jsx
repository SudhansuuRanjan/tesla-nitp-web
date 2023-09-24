import React from 'react'
import './Newsletter.scss'
import Heading from '../../components/Headings/Heading'
import { BlogCard } from '../../components/Cards/Card'
import { useQuery } from '@tanstack/react-query';
import { getDocuments } from '../../services/document';
import Loader from "../../components/Loader"

const Newsletter = () => {
  document.title = 'Tesla NIT Patna | News';

  const { data, isLoading, isError } = useQuery({
    queryKey: ['news'],
    queryFn: () => getDocuments("news"),
    onSuccess: (data) => {
      // console.log(data);
    },
    staleTime: Infinity
  })

  return (
    <div className='pt-16'>
      <Heading heading="NEWS" />
      <div className='my-20 lg:px-16 flex flex-wrap gap-10 items-center justify-evenly'>
        {isLoading ? <Loader /> : isError ? <p>Something went wrong.</p> : data.map((data) => (
          <BlogCard key={data.$id} data={data} />
        ))}
      </div>
    </div>
  )
}

export default Newsletter