import React, { useState } from 'react'
import { getDocument } from '../../../services/document';
import { useQuery } from '@tanstack/react-query';
import { uploadFile, deleteFile } from '../../../services/file';
import { useNavigate, Link } from 'react-router-dom';

const EditTeam = ({ handleUpdate, id }) => {
  const navigate = useNavigate();
  useQuery({
    queryKey: ['members', id],
    queryFn: () => getDocument('members', id),
    onSuccess: (data) => {
      // console.log(data);
      setFormData(data);
    }
  })

  const [formData, setFormData] = useState({
    name: '',
    priority: '',
    email: '',
    role: '',
    about: '',
    image: null,
    instagram: '',
    linkedin: '',
    twitter: '',
    github: '',
    discord: '',
    imageId: "",
  });

  const [imgFile, setImgFile] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <form onSubmit={async (e) => {
        e.preventDefault();
        try {
          const { about, discord, email, github, image, imageId, instagram, linkedin, name, priority, role, twitter } = formData;
          let data = { about, discord, email, github, image, imageId, instagram, linkedin, name, priority, role, twitter }
          if (imgFile) {
            const res = await Promise.all([uploadFile(imgFile), deleteFile(data.imageId)]);
            // console.log(res);
            data.image = res[0].url;
            data.imageId = res[0].$id;
          }
          await handleUpdate("members", data);
          navigate('/admin/team');
        } catch (error) {
          console.log(error);
        }
      }} className='bg-gray-900 border px-10 border-gray-800 rounded-3xl'>
        <div className='pt-5 pb-3'>
          <h1 className='text-3xl font-bold text-center mb-5'>Update Member</h1>
        </div>
        <div className="space-y-4 pr-5">
          <div className='flex gap-5'>
            <label className="text-lg">Name <span className="text-red-500">*</span></label>
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
            <label className="text-lg">Email <span className="text-red-500">*</span></label>
            <input
              className="py-2 px-4 rounded-xl flex-1"
              type="email"
              name="email"
              placeholder="Enter Email"
              required
              onChange={handleChange}
              value={formData.email}
            />
          </div>
          <div className='flex gap-5'>
            <label className="text-lg">Role <span className="text-red-500">*</span></label>
            <input
              className="py-2 px-4 rounded-xl"
              type="text"
              name="role"
              placeholder="Enter Role"
              required
              onChange={handleChange}
              value={formData.role}
            />
          </div>

          <div className='flex gap-5'>
            <label className="text-lg">About <span className="text-red-500">*</span></label>
            <textarea
              className="py-2 px-4 rounded-xl"
              type="text"
              name="about"
              placeholder="Enter About"
              required
              onChange={handleChange}
              value={formData.about}
            />
          </div>

          <div className='flex gap-5'>
            {imgFile ? <img src={URL.createObjectURL(imgFile)} className='h-[5rem] w-[5rem] rounded-full' alt="placeholder" /> : <img src={formData.image ?? "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"} className='h-[5rem] w-[5rem] rounded-full' alt="placeholder" />}
            <label className="text-lg">Image <span className="text-red-500">*</span></label>
            <input
              className="py-2 px-4 rounded-xl"
              type="file"
              name="image"
              placeholder="Select Image"
              accept="image/*"
              onChange={(e) => {
                setImgFile(e.target.files[0]);
              }}
            />
          </div>

          <div className='flex gap-5'>
            <label className="text-lg">Instagram <span className="text-red-500">*</span></label>
            <input
              className="py-2 px-4 rounded-xl"
              type="text"
              name="instagram"
              placeholder="Enter Instagram"
              onChange={handleChange}
              value={formData.instagram}
            />
          </div>

          <div className='flex gap-5'>
            <label className="text-lg">Linkedin <span className="text-red-500">*</span></label>
            <input
              className="py-2 px-4 rounded-xl"
              type="text"
              name="linkedin"
              placeholder="Enter Linkedin"
              onChange={handleChange}
              value={formData.linkedin}
            />
          </div>

          <div className='flex gap-5'>
            <label className="text-lg">Twitter <span className="text-red-500">*</span></label>
            <input
              className="py-2 px-4 rounded-xl"
              type="text"
              name="twitter"
              placeholder="Enter Twitter"
              onChange={handleChange}
              value={formData.twitter}
            />
          </div>

          <div className='flex gap-5'>
            <label className="text-lg">Github <span className="text-red-500">*</span></label>
            <input
              className="py-2 px-4 rounded-xl"
              type="text"
              name="github"
              placeholder="Enter Github"
              onChange={handleChange}
              value={formData.github}
            />
          </div>

          <div className='flex gap-5'>
            <label className="text-lg">Discord <span className="text-red-500">*</span></label>
            <input
              className="py-2 px-4 rounded-xl"
              type="text"
              name="discord"
              placeholder="Enter Discord"
              onChange={handleChange}
              value={formData.discord}
            />
          </div>
        </div>
        <div className='py-5 flex items-center'>
          <Link className='m-auto bg-rose-600 text-white py-2 px-12 rounded-xl' to='/admin/team'>
            <button type="button">Cancel</button>
          </Link>
          <button className='m-auto bg-sky-600 text-white py-2.5 my-5 px-24 rounded-xl' type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default EditTeam