import React, { useState } from 'react';
import { getDocument } from '../../../services/document';
import { useQuery } from '@tanstack/react-query';
import { uploadFile, deleteFile } from '../../../services/file';
import { useNavigate, Link } from 'react-router-dom';

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
      console.log(error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='bg-gray-900 border px-10 border-gray-800 rounded-3xl'>
        <div className='pt-5 pb-3'>
          <h1 className='text-3xl font-bold text-center mb-5'>Update Photo</h1>
        </div>
        <div className="space-y-4 pr-5">
          <div className='flex gap-5'>
            <label className="text-lg">Priority <span className="text-red-500">*</span></label>
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
          <div className='flex flex-col justify-center gap-5'>
            {imgFile ? <img src={URL.createObjectURL(imgFile)} className='w-[8rem]' alt="placeholder" /> : <img src={formData.url ?? "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"} className='w-[8rem]' alt="placeholder" />}
            <label className="text-lg">Image <span className="text-red-500">*</span></label>
            <input
              className="py-2 px-4 rounded-xl"
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