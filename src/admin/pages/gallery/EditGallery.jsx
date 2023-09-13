import React, { useState } from 'react';
import { getDocument } from '../../../services/document';
import { useQuery } from '@tanstack/react-query';
import { uploadFile, deleteFile } from '../../../services/file';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditGallery = ({ handleUpdate, id }) => {
  const navigate = useNavigate();

  useQuery({
    queryKey: ['gallery', id],
    queryFn: () => getDocument('gallery', id),
    onSuccess: (data) => {
      // console.log(data);
      setFormData({
        imageId: data.imageId,
        url: data.url,
        priority: data.priority,
      });
    }
  });

  const [formData, setFormData] = useState({
    imageId: '',
    url: '',
    priority: 0,
  })

  const [imgFile, setImgFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { imageId, priority, url } = formData;
      let data = { imageId, priority, url };
      if (imgFile) {
        const res = await Promise.all([uploadFile(imgFile), deleteFile(data.imageId)]);
        data.url = res[0].url;
        data.imageId = res[0].$id;
      }
      await handleUpdate("gallery", data);
      navigate('/admin/gallery');
    } catch (error) {
      // console.log(error);
      toast.error("Something went wrong!");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='bg-black border lg:px-10 md:px-8 px-5 border-gray-800 rounded-3xl py-3'>
        <div className='pt-5 pb-3'>
          <h1 className='lg:text-3xl md:text-3xl text-2xl font-bold text-center mb-5'>Update Photo</h1>
        </div>
        <div className="space-y-4 pr-5">
          <div className='flex lg:gap-5 md:gap-5 gap-3'>
            <label className="text-lg font-medium text-sky-500">Priority <span className="text-red-500">*</span></label>
            <input
              className="py-2 px-4 rounded-xl flex-1"
              type="number"
              name="priority"
              placeholder="Enter Priority"
              required
              min={1}
              onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
              value={Number(formData.priority)}
            />
          </div>
          <div className='flex flex-col justify-center lg:gap-5 md:gap-5 gap-3 py-5'>
            {imgFile ? <img src={URL.createObjectURL(imgFile)} className='w-[8rem]' alt="placeholder" /> : <img src={formData.url ?? "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"} className='w-[8rem]' alt="placeholder" />}
            <label className="text-lg font-medium text-sky-500">Image <span className="text-red-500">*</span></label>
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
              onChange={(e) => setImgFile(e.target.files[0])}
            />
          </div>
        </div>
        <div className='py-5 flex items-center'>
          <Link className='m-auto bg-rose-600 text-white py-2 px-12 rounded-xl' to='/admin/gallery'>
            <button type="button">Cancel</button>
          </Link>
          <button className='m-auto bg-sky-600 text-white py-2 px-12 rounded-xl' type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default EditGallery;