import { useState, useEffect } from 'react'
import { createDocument, getDocuments, deleteDocument } from '../../../services/document';
import { uploadFile, deleteFile } from '../../../services/file';
import { useQuery } from '@tanstack/react-query';
import { TagsInput } from "react-tag-input-component";
import ProjectCard from '../../../pages/Projects/ProjectCard';
import { FaEdit, FaTrash } from 'react-icons/fa';

const Projects = () => {
  const [createProject, setCreateProject] = useState(false);

  const { data, refetch, isLoading, isError } = useQuery({
    queryKey: ['projects'],
    queryFn: () => getDocuments("projects"),
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

          <div className="flex justify-evenly items-center my-10">
            {isLoading ? <p>loading...</p> : isError ? <p>Something went wrong.</p> : data.slice().reverse().map((project, id) => (
              // <div data-aos="zoom-in" className='relative' key={id}>
              //   <div className='z-10 right-5 top-10'>
              //     <button className='text-blue-500 p-2'><FaEdit size={23} /></button>
              //     <button onClick={async () => {
              //       try {
              //         await Promise.all([deleteDocument('projects', project.$id), deleteFile(project.imageId)]);
              //         await refetch();
              //         console.log("Document deleted successfully!");
              //       } catch (error) {
              //         console.log("Something went wrong!")
              //       }
              //     }} className='text-rose-500 p-2'><FaTrash size={20} /></button>
              //   </div>
                <ProjectCard
                  key={project.id}
                  project={project}
                />
              // </div>
            ))}
          </div>

        </div>
      </div>
      {createProject && <ProjectForm setCreateProject={setCreateProject} refetch={refetch} />}
    </div>
  )
}

export default Projects

const ProjectForm = ({ setCreateProject, refetch }) => {
  const [formData, setFormData] = useState({
    title: '',
    image: null,
    desc: '',
    tags: [],
    link: '',
    source_code: "",
    techstack: [],
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.image) return;
    try {
      // console.log(formData);
      const res = await uploadFile(formData.image);
      // console.log(res);
      let data = JSON.parse(JSON.stringify(formData));
      delete data.image;
      data.imgUrl = res.url;
      data.imageId = res.$id;
      const doc = await createDocument("projects", data);
      // console.log(doc);
      setFormData({
        title: '',
        image: null,
        desc: '',
        tags: [],
        link: '',
        source_code: "",
        techstack: [],
      });
      refetch();
      setCreateProject(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='fixed inset-0 z-40 bg-black bg-opacity-30 backdrop-blur-md h-screen w-full flex items-center justify-center'>
      <form onSubmit={handleSubmit} className='bg-gray-900 border px-10 border-gray-800 rounded-3xl'>
        <div className='pt-5 pb-3'>
          <h1 className='text-3xl font-bold text-center mb-5'>Create New Project</h1>
        </div>
        <div className="lg:w-[28rem] md:w-[22rem] w-[95%] h-[60vh] overflow-y-scroll space-y-4 pr-5">
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

          <div className='flex gap-5'>
            <label className="text-lg">Poster <span className="text-red-500">*</span></label>
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
          <button onClick={() => setCreateProject(false)} className='m-auto bg-gray-600 text-white py-2 px-12 rounded-xl'>Cancel</button>
          <button className='m-auto bg-sky-600 text-white py-2 px-12 rounded-xl' type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}