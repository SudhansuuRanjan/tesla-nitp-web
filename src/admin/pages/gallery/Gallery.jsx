import { useState, useEffect } from 'react'
import { createDocument, getDocuments, deleteDocument } from '../../../services/document';
import { uploadFile, deleteFile } from '../../../services/file';
import { useMutation, useQuery } from '@tanstack/react-query';
import { FaTrash, FaEdit } from "react-icons/fa"
import Loader, { Loading } from '../../../components/Loader';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


const Gallery = () => {
  const [uploadImage, setUploadImage] = useState(false);

  const { data, refetch, isLoading, isError } = useQuery({
    queryKey: ['gallery'],
    queryFn: () => getDocuments("gallery"),
    onSuccess: (data) => {
      // console.log(data);
    },
  })

  useEffect(() => {
    document.title = 'Tesla NIT Patna | Admin | Gallery';
  }, []);

  return (
    <div className='pt-20 relative'>
      <div className='m-auto lg:mx-32 md:mx-10 mx-5'>
        <h1 className='lg:text-5xl md:text-4xl text-3xl leading-normal font-bold my-5'>
          <span className='text-sky-500'>T.E.S.L.A.</span> Gallery
        </h1>
        <div className='border-t-[1px] border-t-gray-800 py-8'>
          <div className='flex justify-end'>
            <button onClick={() => setUploadImage(!uploadImage)} className='bg-sky-600 text-white rounded-md lg:px-8 md:px-6 px-5 py-2.5'>Upload Photo</button>
          </div>

          <div className="image-container mt-20">
            {
              isLoading ? <div className='h-32 flex justify-center items-center w-full'><Loader /></div> : isError ? <div>Something went wrong.</div> : data.slice().reverse().map((img, index) => {
                return (
                  <div key={index} className='relative' data-aos="fade-up">
                    <div className='absolute z-10 right-5 top-5'>
                      <Link to={`/edit/gallery/${img.$id}`} > <button className='text-sky-500 p-2'><FaEdit className='shadow-xl' size={24} /></button></Link>
                      <button onClick={async () => {
                        try {
                          await Promise.all([deleteDocument('gallery', img.$id), deleteFile(img.imageId)]);
                          await refetch();
                          console.log("Document deleted successfully!");
                        } catch (error) {
                          console.log("Something went wrong!")
                        }
                      }} className='text-rose-500 p-2'><FaTrash className='shadow-xl' size={24} /></button>
                    </div>
                    <img className='min-h-[7rem]' src={img.url + "&quality=40"} alt="gallery-photo" />
                  </div>
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
  });

  const [uploading, setUploading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const mutation = useMutation({
    mutationFn: async (e) => {
      e.preventDefault();
      handleSubmit()
    },
    onSuccess: (data) => {
      refetch();
    }
  })

  const handleSubmit = async (e) => {
    if (!formData.image) return;
    setUploading(true);
    try {
      const res = await uploadFile(formData.image);
      let data = {
        url: res.url,
        priority: formData.priority,
        imageId: res.$id
      };
      const response = await createDocument("gallery", data);
      refetch();
      toast("Image uploaded successfully!");
      setFormData({
        priority: 5,
        image: null
      });
      setUploadImage(false);
      setUploading(false);
      return response;
    } catch (error) {
      // console.log(error);
      setUploading(false);
      toast.error("Something went wrong!");
    }
  }

  return (
    <div className='fixed inset-0 z-40 bg-black bg-opacity-30 backdrop-blur-md h-screen w-full flex items-center justify-center'>
      {uploading && <Loading message="Uploading..." />}
      <form onSubmit={mutation.mutate} className='bg-gray-900 border lg:px-10 md:px-10 px-3 border-gray-800 rounded-3xl py-5'>
        <div className='pt-5 pb-3'>
          <h1 className='lg:text-3xl md:text-3xl text-2xl font-bold text-center mb-5'>Upload Photo</h1>
        </div>
        <div className="lg:w-[28rem] md:w-[18rem] w-[88vw] space-y-4 lg:pr-5 md:pr-5">
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
          <div className='flex flex-col justify-center items-center gap-5 py-5'>
            <label className="text-lg text-left">Image <span className="text-red-500">*</span></label>
            <img src={formData.image ? URL.createObjectURL(formData.image) : "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"} className='w-[10rem]' alt="placeholder" />
            <input
              className="mt-2 text-sm text-grey-500
            file:mr-5 file:py-1 file:px-3
            file:rounded-full file:border-0
            file:text-sm file:font-medium
            file:bg-blue-50 file:text-blue-700
            hover:file:cursor-pointer hover:file:bg-amber-50
            hover:file:text-amber-700"
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
          <button onClick={(e) => {
            e.preventDefault()
            setUploadImage(false)
          }} className='m-auto bg-gray-600 text-white py-2 px-12 rounded-xl'>Cancel</button>
          <button className='m-auto bg-sky-600 text-white py-2 px-12 rounded-xl' type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}