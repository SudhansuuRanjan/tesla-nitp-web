import React, { useEffect } from 'react'
import './Events.scss'
import Heading from '../../components/Headings/Heading'
import { EventCard } from '../../components/Cards/Card'
import { useQuery } from '@tanstack/react-query'
import Loader from '../../components/Loader'
import { getDocuments } from '../../services/document'

const Events = () => {

  useEffect(() => {
    document.title = 'Tesla NIT Patna | Events';
  }, []);

  const { data, refetch, isLoading, isError } = useQuery({
    queryKey: ['events'],
    queryFn: () => getDocuments("events"),
    onSuccess: (data) => {
      // console.log(data);
    },
    staleTime:Infinity
  })

  return (
    <div className='pt-16'>
      <Heading heading="EVENTS"></Heading>
      <div className='my-20 lg:mx-20 md:mx-16 mx-6 flex flex-wrap gap-10 items-center justify-evenly'>
        {isLoading ? <Loader/> : isError ? <p>Something went wrong.</p> : data.slice().reverse().map((event, id) => (
          <EventCard data={event} key={id} />
        ))}
      </div>
    </div>
  )
}

export default Events