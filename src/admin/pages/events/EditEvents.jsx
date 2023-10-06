import React, { useState } from 'react';
import { getDocument } from '../../../services/document';
import { useQuery } from '@tanstack/react-query';
import { uploadFile, deleteFile } from '../../../services/file';
import { useNavigate, Link } from 'react-router-dom';

const EditEvents = ({ handleUpdate, id }) => {
  const navigate = useNavigate();

  useQuery({
    queryKey: ['events', id],
    queryFn: () => getDocument('events', id),
    onSuccess: (data) => {
      console.log(data);
      setFormData({
        date: data.date,
        description: data.description,
        imageId: data.imageId,
        image: data.image,
        link: data.link,
        name: data.name,
        tag: data.tag,
        time: data.time,
        venue: data.venue,
      });
    }
  });

  const [formData, setFormData] = useState({
    date: '',
    description: '',
    imageId: '',
    image: '',
    link: '',
    name: '',
    tag: '',
    time: '',
    venue: '',
  })

  const [imgFile, setImgFile] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { date, description, imageId, image, link, name, tag, time, venue } = formData;
      let data = { date, description, imageId, image, link, name, tag, time, venue };
      if (imgFile) {
        const res = await Promise.all([uploadFile(imgFile), deleteFile(data.imageId)]);
        data.image = res[0].url;
        data.imageId = res[0].$id;
      }
      await handleUpdate("events", data);
      navigate('/admin/events');
    } catch (error) {
      // console.log(error);
      toast.error("Something went wrong!");
    }
  }

  return (
    <div className='w-full'>
      <form onSubmit={handleSubmit} className='bg-gray-900 border lg:px-10 md:px-8 px-5 border-gray-800 rounded-3xl'>
        <div className='pt-5 pb-3'>
          <h1 className='lg:text-3xl md:text-3xl text-2xl font-bold text-center mb-5'>Update Event</h1>
        </div>
        <div className="space-y-4 lg:pr-5 md:pr-5">
          <div className='flex lg:gap-5 md:gap-5 gap-3'>
            <label className="text-lg font-medium text-sky-500">Name <span className="text-red-500">*</span></label>
            <input
              className="py-2 px-4 rounded-xl flex-1"
              type="text"
              name="name"
              placeholder="Enter Name"
              required
              onChange={handleChange}
              value={formData.name}
            />
          </div>
          <div className='flex lg:gap-5 md:gap-5 gap-3'>
            <label className="text-lg font-medium text-sky-500">Desc.<span className="text-red-500">*</span></label>
            <textarea
              className="py-2 px-4 h-24 rounded-xl flex-1"
              name="description"
              placeholder="Enter event description"
              required
              onChange={handleChange}
              value={formData.description}
            />
          </div>
          <div className='flex lg:gap-5 md:gap-5 gap-3'>
            <label className="text-lg font-medium text-sky-500">Tag <span className="text-red-500">*</span></label>
            <select
              className="py-2 px-4 rounded-xl"
              type="text"
              name="tag"
              placeholder="Enter Tag Like Blockchain"
              required
              onChange={handleChange}
              value={formData.tag}
            >
              <option value="electrical">--Select--</option>
              <option value="electrical">Electrical</option>
              <option value="blockchain">Blockchain</option>
              <option value="software">Software</option>
              <option value="technical">Technical</option>
              <option value="web">Web Dev</option>
              <option value="cultural">Cultural</option>
              <option value="others">Others</option>
            </select>
          </div>

          <div className='flex lg:gap-5 md:gap-5 gap-3'>
            <label className="text-lg font-medium text-sky-500">Reg. Link <span className="text-red-500">*</span></label>
            <input
              className="py-2 px-4 rounded-xl flex-1"
              type="text"
              name="link"
              placeholder="Enter Link"
              required
              onChange={handleChange}
              value={formData.link}
            />
          </div>

          <div className='flex flex-col justify-center lg:gap-5 md:gap-5 gap-3'>
            {imgFile ? <img src={URL.createObjectURL(imgFile)} className='w-[8rem]' alt="placeholder" /> : <img src={formData.image ?? "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"} className='w-[8rem]' alt="placeholder" />}
            <label className="text-lg font-medium text-sky-500">Poster <span className="text-red-500">*</span></label>
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
              accept="image/*"
              onChange={(e) => setImgFile(e.target.files[0])}
            />
          </div>

          <div className='flex lg:gap-5 md:gap-5 gap-3'>
            <label className="text-lg font-medium text-sky-500">Venue <span className="text-red-500">*</span></label>
            <input
              className="py-2 px-4 rounded-xl flex-1"
              type="text"
              name="venue"
              placeholder="Enter Venue"
              onChange={handleChange}
              value={formData.venue}
            />
          </div>

          <div className='flex lg:gap-5 md:gap-5 gap-3'>
            <label className="text-lg font-medium text-sky-500">Date <span className="text-red-500">*</span></label>
            <input
              className="py-2 px-4 rounded-xl"
              type="date"
              name="date"
              placeholder="Enter Date"
              onChange={handleChange}
              value={formData.date}
            />
          </div>

          <div className='flex lg:gap-5 md:gap-5 gap-3'>
            <label className="text-lg font-medium text-sky-500">Time <span className="text-red-500">*</span></label>
            <input
              className="py-2 px-4 rounded-xl"
              type="time"
              name="time"
              placeholder="Enter Time"
              onChange={handleChange}
              value={formData.time}
            />
          </div>

        </div>
        <div className='py-5 flex items-center'>
          <Link className='m-auto bg-rose-600 text-white py-2 px-12 rounded-xl' to='/admin/events'>
            <button type="button">Cancel</button>
          </Link>
          <button className='m-auto bg-sky-600 text-white py-2 px-12 rounded-xl' type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default EditEvents;