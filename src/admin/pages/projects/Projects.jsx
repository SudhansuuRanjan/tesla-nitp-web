import { useState, useEffect } from 'react'
import { createDocument, getDocuments } from '../../../services/document';
import { uploadFile } from '../../../services/file';
import { useMutation, useQuery } from '@tanstack/react-query';

const Projects = () => {
  const [createProject, setCreateProject] = useState(false);

  const { data, refetch, isLoading, isError } = useQuery({
    queryKey: ['gallery'],
    queryFn: () => getDocuments("gallery"),
    onSuccess: (data) => {
      console.log(data.documents);
    }
  })

  useEffect(() => {
    document.title = 'Tesla NIT Patna | Admin | Projects';
  }, []);

  return (
    <div className='pt-20 relative'>
      <div className='m-auto max-w-[80%]'>
        <h1 className='text-5xl leading-normal font-bold my-5'>
          <span className='text-sky-500'>T.E.S.L.A.</span> Projects
        </h1>
        <div className='border-t-[1px] border-t-gray-800 py-8'>
          <div className='flex justify-between'>
            <input className='py-2.5 px-4 rounded-md border w-[24rem] border-gray-700 bg-gray-800' type="search" name="name" id="name" placeholder='Search by name' />
            <button onClick={() => setCreateProject(!createProject)} className='bg-sky-600 text-white rounded-md px-8 py-2.5'>New Project</button>
          </div>

          <div className="image-container">

          </div>

        </div>
      </div>
      {/* {createProject && <GalleryForm setCreateProject={setCreateProject} refetch={refetch} />} */}
    </div>
  )
}

export default Projects