import { useParams } from 'react-router-dom'
import { useState } from 'react';
import './Blog.scss'
import BackButton from '../../components/BlogComponents/BackButton';
import Loader from '../../components/Loader';
import Share from '../../components/BlogComponents/Share';
import { BsDot } from 'react-icons/bs'
import { useQuery } from '@tanstack/react-query';
import { getDocument } from '../../services/document';
import MarkDown from '../../components/Markdown';

const Blog = () => {
  const { topicSlug } = useParams("");

  const { data, isLoading, isError } = useQuery({
    queryKey: ['news', topicSlug],
    queryFn: () => getDocument("news", topicSlug),
    onSuccess: (data) => {
      // console.log(data);
    },
    staleTime: Infinity
  })

  return (
    <div className='news-container'>
      {isLoading ? <div className='h-screen flex justify-center items-center'>
          <Loader />
        </div>: isError ? <p>Something went wrong.</p> : <div>
          <h1 data-aos="fade-up" className='news-topic font-bold text-sky-400'>{data.title}</h1>
          <div data-aos="fade-up" className='flex items-center justify-center flex-col'>
            <div className='flex items-center gap-1 text-gray-400 mt-3'>
              <p>{data.tag}</p>
              <BsDot />
              <p>{data.minutes} min read</p>
            </div>
            <div className='flex items-center gap-3 mt-4'>
              <img loading='lazy' className='w-9 h-9 rounded-full' src={data.authorImage} alt={data.author} />
              <p className='font-semibold text-gray-300'>{data.author}</p>
            </div>
          </div>
          <div data-aos="fade-up" className="img-container">
            <img className='blog-header-img' src={data.image + "&quality=40"} alt="header-img" />
          </div>
          <div className="paragraph-body">
            <MarkDown content={data.body}/>
          </div>
        </div>
      }
      <BackButton to="/news" />
      {!isLoading && !isError && <div className='share-cont'>
        <Share topic={data.title} para={data.body} />
      </div>}
    </div>
  )
}

export default Blog