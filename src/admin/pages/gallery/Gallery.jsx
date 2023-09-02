import { useState, useEffect } from 'react'
import { createDocument, getDocuments } from '../../../services/document';
import { uploadFile } from '../../../services/file';
import { useMutation, useQuery } from '@tanstack/react-query';



const Gallery = () => {
  const [uploadImage, setUploadImage] = useState(false);

  const { data, refetch, isLoading, isError } = useQuery({
    queryKey: ['gallery'],
    queryFn: () => getDocuments("gallery"),
    onSuccess: (data) => {
      console.log(data.documents);
    }
  })

  useEffect(() => {
    document.title = 'Tesla NIT Patna | Admin | Gallery';
  }, []);

  return (
    <div className='pt-20 relative'>
      <div className='m-auto max-w-[80%]'>
        <h1 className='text-5xl leading-normal font-bold my-5'>
          <span className='text-sky-500'>T.E.S.L.A.</span> Gallery
        </h1>
        <div className='border-t-[1px] border-t-gray-800 py-8'>
          <div className='flex justify-between'>
            <input className='py-2.5 px-4 rounded-md border w-[24rem] border-gray-700 bg-gray-800' type="search" name="name" id="name" placeholder='Search by name' />
            <button onClick={() => setUploadImage(!uploadImage)} className='bg-sky-600 text-white rounded-md px-8 py-2.5'>Upload Photo</button>
          </div>

          <div className="image-container">
            {
              isLoading ? <div>loading...</div> : isError ? <div>Something went wrong.</div> : data.documents.map((img, index) => {
                return (
                  <img data-aos="fade-up" key={index} src={img.url} alt="gallery-photo" />
                )
              })
            }
          </div>

        </div>
      </div>
      {uploadImage && <GalleryForm setUploadImage={setUploadImage} refetch={refetch} />}
    </div>
  )
}

export default Gallery;



const GalleryForm = ({ setUploadImage, refetch }) => {
  const [formData, setFormData] = useState({
    priority: 5,
    image: null,
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const mutation = useMutation({
    mutationFn: (e) => {
      e.preventDefault();
      handleSubmit()
    },
    onSuccess: () => {
      refetch();
    },
  })

  const handleSubmit = async (e) => {
    if (!formData.image) return;
    try {
      const res = await uploadFile(formData.image);
      let data = {
        url: res.url,
        priority: formData.priority
      };
      await createDocument("gallery", data);
      setFormData({
        priority: 5,
        image: null
      });
      setUploadImage(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='fixed inset-0 z-40 bg-black bg-opacity-30 backdrop-blur-md h-screen w-full flex items-center justify-center'>
      <form onSubmit={mutation.mutate} className='bg-gray-900 border px-10 border-gray-800 rounded-3xl'>
        <div className='pt-5 pb-3'>
          <h1 className='text-3xl font-bold text-center mb-5'>Create Member</h1>
        </div>
        <div className="lg:w-[28rem] md:w-[18rem] h-[16rem] space-y-4 pr-5">
          <div className='flex gap-5'>
            <label className="text-lg">Priority <span className="text-red-500">*</span></label>
            <input
              className="py-2 px-4 rounded-xl flex-1"
              type="number"
              name="priority"
              placeholder="Enter Priority"
              required
              min={1}
              onChange={handleChange}
              value={formData.priority}
            />
          </div>
          <div className='flex gap-5'>
            <label className="text-lg">Image <span className="text-red-500">*</span></label>
            <input
              className="py-2 px-4 rounded-xl"
              type="file"
              name="image"
              placeholder="Select Image"
              required
              accept="image/*"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  image: e.target.files[0]
                });
              }}
            />
          </div>
        </div>
        <div className='py-5 flex items-center'>
          <button onClick={() => setUploadImage(false)} className='m-auto bg-gray-600 text-white py-2 px-12 rounded-xl'>Cancel</button>
          <button className='m-auto bg-sky-600 text-white py-2 px-12 rounded-xl' type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}