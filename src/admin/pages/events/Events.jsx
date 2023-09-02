import { useState, useEffect } from 'react'
import { createDocument, getDocuments } from '../../../services/document';
import { uploadFile } from '../../../services/file';
import { useMutation, useQuery } from '@tanstack/react-query';

const Events = () => {
 const [createEvent, setCreateEvent] = useState(false);

  const { data, refetch, isLoading, isError } = useQuery({
    queryKey: ['gallery'],
    queryFn: () => getDocuments("gallery"),
    onSuccess: (data) => {
      console.log(data.documents);
    }
  })

  useEffect(() => {
    document.title = 'Tesla NIT Patna | Admin | Events';
  }, []);

  return (
    <div className='pt-20 relative'>
      <div className='m-auto max-w-[80%]'>
        <h1 className='text-5xl leading-normal font-bold my-5'>
          <span className='text-sky-500'>T.E.S.L.A.</span> Events
        </h1>
        <div className='border-t-[1px] border-t-gray-800 py-8'>
          <div className='flex justify-between'>
            <input className='py-2.5 px-4 rounded-md border w-[24rem] border-gray-700 bg-gray-800' type="search" name="name" id="name" placeholder='Search by name' />
            <button onClick={() => setCreateEvent(!createEvent)} className='bg-sky-600 text-white rounded-md px-8 py-2.5'>New Event</button>
          </div>

          <div className="image-container">

          </div>

        </div>
      </div>
      {/* {createEvent && <GalleryForm setCreateEvent={setCreateEvent} refetch={refetch} />} */}
    </div>
  )
}

export default Events