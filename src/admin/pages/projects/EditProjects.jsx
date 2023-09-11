import React, { useState } from 'react';
import { getDocument } from '../../../services/document';
import { useQuery } from '@tanstack/react-query';
import { uploadFile, deleteFile } from '../../../services/file';
import { Link, useNavigate } from 'react-router-dom';
import { TagsInput } from "react-tag-input-component";


const EditProjects = ({ handleUpdate, id }) => {
  const navigate = useNavigate();

  useQuery({
    queryKey: ['project', id],
    queryFn: () => getDocument('projects', id),
    onSuccess: (data) => {
      // console.log(data);
      setFormData({
        imageId: data.imageId,
        title: data.title,
        imgUrl: data.imgUrl,
        desc: data.desc,
        tags: data.tags,
        link: data.link,
        source_code: data.source_code,
        techstack: data.techstack,
      });
    }
  });

  const [formData, setFormData] = useState({
    imageId: '',
    title: '',
    imgUrl: '',
    desc: '',
    tags: [],
    link: '',
    source_code: "",
    techstack: [],
  })

  const [imgFile, setImgFile] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { imageId, title, imgUrl, desc, tags, link, source_code, techstack } = formData;
      let data = { imageId, title, imgUrl, desc, tags, link, source_code, techstack };
      if (imgFile) {
        const res = await Promise.all([uploadFile(imgFile), deleteFile(data.imageId)]);
        data.imgUrl = res[0].url;
        data.imageId = res[0].$id;
      }
      await handleUpdate("projects", data);
      navigate('/admin/projects');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='bg-gray-900 border px-10 border-gray-800 rounded-3xl'>
        <div className='pt-5 pb-3'>
          <h1 className='text-3xl font-bold text-center mb-5'>Update Project</h1>
        </div>

        <div className="space-y-4 pr-5">
          <div className='flex gap-5'>
            <label className="text-lg">Title <span className="text-red-500">*</span></label>
            <input
              className="py-2 px-4 rounded-xl flex-1"
              type="text"
              name="title"
              placeholder="Enter Project Title"
              required
              onChange={handleChange}
              value={formData.title}
            />
          </div>
          <div className='flex gap-5'>
            <label className="text-lg">Description <span className="text-red-500">*</span></label>
            <textarea
              className="py-2 px-4 rounded-xl flex-1"
              name="desc"
              placeholder="Enter project description"
              required
              onChange={handleChange}
              value={formData.desc}
            />
          </div>

          <div className='flex gap-5'>
            <label className="text-lg">Tags <span className="text-red-500">*</span></label>
            <TagsInput
              value={formData.tags}
              onChange={(data) => setFormData({
                ...formData,
                tags: data
              })}
              name="tags"
              placeHolder="Enter tags"
              classNames={{ tag: "bg-gray-500", input: "bg-gray-800" }}
            />
          </div>

          <div className='flex gap-5'>
            <label className="text-lg">TechStack <span className="text-red-500">*</span></label>
            <TagsInput
              value={formData.techstack}
              onChange={(data) => setFormData({
                ...formData,
                techstack: data
              })}
              name="techstack"
              placeHolder="Enter techstack"
              classNames={{ tag: "bg-gray-500", input: "bg-gray-800" }}
            />
          </div>

          <div className='flex gap-5'>
            <label className="text-lg">Project Link <span className="text-red-500">*</span></label>
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

          <div className='flex gap-5 my-5 py-5'>
            {imgFile ? <img src={URL.createObjectURL(imgFile)} className='w-[10rem]' alt="placeholder" /> : <img src={formData.imgUrl ?? "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"} className='w-[8rem]' alt="placeholder" />}
            <label className="text-lg">Poster <span className="text-red-500">*</span></label>
            <input
              className="py-2 px-4 rounded-xl"
              type="file"
              name="image"
              placeholder="Select Image"
              accept="image/*"
              onChange={(e) => setImgFile(e.target.files[0])}
            />
          </div>

          <div className='flex gap-5'>
            <label className="text-lg">Source Code <span className="text-red-500">*</span></label>
            <input
              className="py-2 px-4 rounded-xl flex-1"
              type="text"
              name="source_code"
              placeholder="Enter GitHub Link"
              required
              onChange={handleChange}
              value={formData.source_code}
            />
          </div>
        </div>

        <div className='py-5 flex items-center'>
          <Link className='m-auto bg-rose-600 text-white py-2 px-12 rounded-xl' to='/admin/projects'>
            <button type="button">Cancel</button>
          </Link>
          <button className='m-auto bg-sky-600 text-white py-2 px-12 rounded-xl' type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default EditProjects