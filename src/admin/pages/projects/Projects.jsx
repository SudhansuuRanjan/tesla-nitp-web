import { useState, useEffect } from 'react'
import { createDocument, getDocuments, deleteDocument } from '../../../services/document';
import { uploadFile, deleteFile } from '../../../services/file';
import { useQuery } from '@tanstack/react-query';
import { TagsInput } from "react-tag-input-component";
import ProjectCard from '../../../pages/Projects/ProjectCard';
import Loader, { Loading } from '../../../components/Loader';
import { toast } from 'react-toastify';

const Projects = () => {
  const [createProject, setCreateProject] = useState(false);

  const { data, refetch, isLoading, isError } = useQuery({
    queryKey: ['projects'],
    queryFn: () => getDocuments("projects"),
    onSuccess: (data) => {
      // console.log(data.documents);
    }
  })

  useEffect(() => {
    document.title = 'Tesla NIT Patna | Admin | Projects';
  }, []);

  return (
    <div className='pt-20 relative'>
      <div className='m-auto lg:mx-32 md:mx-10 mx-5'>
        <h1 className='lg:text-5xl md:text-4xl text-3xl leading-normal font-bold my-5'>
          <span className='text-sky-500'>T.E.S.L.A.</span> Projects
        </h1>
        <div className='border-t-[1px] border-t-gray-800 py-8'>
          <div className='flex justify-between'>
            <input className='py-2.5 px-4 rounded-md border lg:w-[24rem] md:w-[14rem] w-auto border-gray-700 bg-gray-800' type="search" name="name" id="name" placeholder='Search by name' />
            <button onClick={() => setCreateProject(!createProject)} className='bg-sky-600 text-white rounded-md lg:px-8 md:px-6 px-5 py-2.5'>New Project</button>
          </div>

           <h3 className='lg:text-3xl md:text-3xl text-2xl font-bold mt-10'>All Projects</h3>

          <div className="project_main">
            {isLoading ? <Loader></Loader> : isError ? <p>Something went wrong.</p> : data.slice().reverse().map((project, id) => (
              <ProjectCard
                key={project.$id}
                project={project}
                isAdmin={true}
                refetch={refetch}
              />
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
  });

  const [creating, setCreating] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.image) return;
    setCreating(true);
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
      toast("Project created successfully!");
      setFormData({
        title: '',
        image: null,
        desc: '',
        tags: [],
        link: '',
        source_code: "",
        techstack: [],
      });
      setCreateProject(false);
      setCreating(false);
      refetch();
    } catch (error) {
      // console.log(error);
      setCreating(false);
      toast.error("Something went wrong!");
    }
  }

  return (
    <div className='fixed inset-0 z-40 bg-black bg-opacity-30 backdrop-blur-md h-screen w-full flex items-center justify-center'>
      {creating && <Loading message="Creating..." />}
      <form onSubmit={handleSubmit} className='bg-gray-900 border lg:px-10 md:px-10 px-3 border-gray-800 rounded-3xl py-3'>
        <div className='pt-5 pb-3'>
          <h1 className='lg:text-3xl md:text-3xl text-2xl font-bold text-center mb-5'>Create New Project</h1>
        </div>
        <div className="lg:w-[28rem] md:w-[18rem] w-[88vw] lg:h-[70vh] md:h-[70vh] overflow-y-scroll space-y-4 lg:pr-5 md:pr-5">
          <div className='flex lg:gap-5 md:gap-5 gap-3'>
            <label className="text-lg font-medium text-sky-500">Title <span className="text-red-500">*</span></label>
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
          <div className='flex lg:gap-5 md:gap-5 gap-3'>
            <label className="text-lg font-medium text-sky-500">Description <span className="text-red-500">*</span></label>
            <textarea
              className="py-2 px-4 rounded-xl flex-1"
              name="desc"
              placeholder="Enter project description"
              required
              onChange={handleChange}
              value={formData.desc}
            />
          </div>

          <div className='flex lg:gap-5 md:gap-5 gap-3'>
            <label className="text-lg font-medium text-sky-500">Tags <span className="text-red-500">*</span></label>
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

          <div className='flex lg:gap-5 md:gap-5 gap-3'>
            <label className="text-lg font-medium text-sky-500">TechStack <span className="text-red-500">*</span></label>
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

          <div className='flex lg:gap-5 md:gap-5 gap-3'>
            <label className="text-lg font-medium text-sky-500">Project Link <span className="text-red-500">*</span></label>
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

          <div className='flex flex-col justify-center items-center gap-4 py-3'>
            <label className="text-lg font-medium text-sky-500">Poster <span className="text-red-500">*</span></label>
            <img src={formData.image ? URL.createObjectURL(formData.image) : "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"} className='lg:w-[10rem] md:w-[10rem] w-[8rem]' alt="placeholder" />
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

          <div className='flex lg:gap-5 md:gap-5 gap-3'>
            <label className="text-lg font-medium text-sky-500">Src. Code <span className="text-red-500">*</span></label>
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