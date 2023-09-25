import { useState, useEffect } from 'react'
import { createDocument, getDocuments, deleteDocument } from '../../../services/document';
import { uploadFile, deleteFile } from '../../../services/file';
import { useQuery } from '@tanstack/react-query';
import { FaEdit, FaTrash } from "react-icons/fa"
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader, { Loading } from '../../../components/Loader';

const Team = () => {
  const [createMember, setCreateMember] = useState(false);

  const { data, refetch, isLoading, isError } = useQuery({
    queryKey: ['members'],
    queryFn: () => getDocuments("members"),
    onSuccess: (data) => {
      // console.log(data);
    },
  })

  useEffect(() => {
    document.title = 'Tesla NIT Patna | Admin | Team';
  }, []);

  return (
    <div className='pt-20 relative min-h-screen'>
      <div className='m-auto lg:mx-32 md:mx-10 mx-5'>
        <h1 className='lg:text-5xl md:text-4xl text-3xl leading-normal font-bold my-5'>
          <span className='text-sky-500'>T.E.S.L.A.</span> Team
        </h1>
        <div className='border-t-[1px] border-t-gray-800 py-8'>
          <div className='flex justify-end'>
            {/* <input className='py-2.5 px-4 rounded-md border lg:w-[24rem] md:w-[14rem] w-auto border-gray-700 bg-gray-800' type="search" name="name" id="name" placeholder='Search by name' /> */}
            <button onClick={() => setCreateMember(!createMember)} className='bg-sky-600 text-white rounded-lg lg:px-8 md:px-6 px-4 py-2.5'>Creater User</button>
          </div>

          <div className='border border-gray-800 mt-8 rounded-xl lg:w-[82vw] md:w-[82vw] w-[90vw] overflow-x-scroll'>
            <table className='w-full'>
              <thead className='text-left border-b border-gray-800'>
                <tr className='text-gray-400'>
                  <th className='py-5 px-4'>Name</th>
                  <th className='py-5 px-4'>Priority</th>
                  <th className='py-5 px-4'>Email</th>
                  <th className='py-5 px-4'>Role</th>
                  <th className='py-5 px-4'>Actions</th>
                </tr>
              </thead>
              <tbody className='text-white '>
                {isLoading ? <span className='flex justify-center items-center w-full h-20'>
                  <Loader />
                </span> : isError ? <p>Something went wrong.</p> : data.slice().reverse().map((user, index) => (
                  <tr key={index} className='border-b border-gray-800'>
                    <td className='py-2.5 px-4'>
                      <span className='flex items-center'>
                        <img className='w-10 h-10 rounded-full mr-4' src={user.image + "&quality=40"} alt='Avatar of Jonathan Reinink' />
                        <span className='flex flex-col'>
                          <span className='text-gray-300 font-medium text-base leading-none'>{user.name}</span>
                          <span className='text-gray-500 text-sm'>{user.about.substring(0, 30) + "..."}</span>
                        </span>
                      </span>
                    </td>
                    <td className='py-2.5 px-4 pl-6'>{user.priority}</td>
                    <td className='py-2.5 px-4'>{user.email}</td>
                    <td className='py-2.5 px-4'>{user.role}</td>
                    <td className='py-2.5 px-4 flex gap-2 items-center'>
                      <Link to={`/edit/team/${user.$id}`} > <button className='text-blue-500 p-2'><FaEdit size={20} /></button></Link>
                      <button onClick={async () => {
                        try {
                          await Promise.all([deleteDocument('members', user.$id), deleteFile(user.imageId)]);
                          await refetch();
                          console.log("Document deleted successfully!");
                        } catch (error) {

                        }
                      }} className='text-rose-500 p-2'><FaTrash size={18} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>


        </div>
      </div>
      {createMember && <TeamForm refetch={refetch} setCreateMember={setCreateMember} />}
    </div>
  )
}

export default Team;


const TeamForm = ({ setCreateMember, refetch }) => {
  const [formData, setFormData] = useState({
    name: '',
    priority: 5,
    email: '',
    role: '',
    about: '',
    image: null,
    instagram: "",
    linkedin: "",
    twitter: "",
    github: "",
    discord: "",
    Year: "",
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
      const res = await uploadFile(formData.image);
      let data = JSON.parse(JSON.stringify(formData));
      data.image = res.url;
      data.imageId = res.$id;
      const doc = await createDocument("members", data);
      toast("Member created successfully!");
      setFormData({
        name: '',
        priority: 0,
        email: '',
        role: '',
        about: '',
        image: null,
        instagram: "",
        linkedin: "",
        twitter: "",
        github: "",
        discord: "",
        Year: "",
      })
      refetch();
      setCreating(false);
      setCreateMember(false);
    } catch (error) {
      setCreating(false);
      toast.error("Something went wrong!" + error.message);
    }
  }

  return (
    <div className='fixed inset-0 z-40 bg-black bg-opacity-30 backdrop-blur-md h-screen w-full flex items-center justify-center'>
      {creating && <Loading message={"Creating..."} />}
      <form onSubmit={handleSubmit} className='bg-gray-900 border lg:px-10 md:px-10 px-3 border-gray-800 rounded-3xl'>
        <div className='pt-5 pb-3'>
          <h1 className='lg:text-3xl md:text-3xl text-2xl font-bold text-center mb-3'>Create Member</h1>
        </div>
        <div className="lg:w-[28rem] md:w-[26rem] w-[88vw] lg:h-[70vh] md:h-[70vh] overflow-y-scroll space-y-4 lg:pr-5 md:pr-5 max-h-[60vh]">
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
            <label className="text-lg font-medium text-sky-500">Priority <span className="text-red-500">*</span></label>
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
          <div className='flex lg:gap-5 md:gap-5 gap-3'>
            <label className="text-lg font-medium text-sky-500">Email <span className="text-red-500">*</span></label>
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
          <div className='flex lg:gap-5 md:gap-5 gap-3'>
            <label className="text-lg font-medium text-sky-500">Role <span className="text-red-500">*</span></label>
            <input
              className="py-2 px-4 rounded-xl flex-1"
              type="text"
              name="role"
              placeholder="Enter Role"
              required
              onChange={handleChange}
              value={formData.role}
            />
          </div>

          <div className='flex lg:gap-5 md:gap-5 gap-3'>
            <label className="text-lg font-medium text-sky-500">About <span className="text-red-500">*</span></label>
            <textarea
              className="py-2 px-4 rounded-xl flex-1 h-20"
              type="text"
              name="about"
              placeholder="Enter About"
              required
              onChange={handleChange}
              value={formData.about}
            />
          </div>

          <div className='flex flex-col justify-center items-center gap-4 py-3'>
            <label className="text-lg font-medium text-sky-500">Image <span className="text-red-500">*</span></label>
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
            <label className="text-lg font-medium text-sky-500">Year <span className="text-red-500">*</span></label>
            <select required name="Year" id="Year" className="py-2 px-4 rounded-xl" onChange={handleChange} value={formData.Year}>
              <option value="2020-24">2020-24</option>
              <option value="2021-25">2021-25</option>
              <option value="2022-26">2022-26</option>
              <option value="2019-23">2019-23</option>
            </select>
          </div>

          <div className='flex lg:gap-5 md:gap-5 gap-3'>
            <label className="text-lg font-medium text-sky-500">Instagram <span className="text-red-500">*</span></label>
            <input
              className="py-2 px-4 rounded-xl"
              type="text"
              name="instagram"
              placeholder="Enter Instagram"
              onChange={handleChange}
              value={formData.instagram}
            />
          </div>

          <div className='flex lg:gap-5 md:gap-5 gap-3'>
            <label className="text-lg font-medium text-sky-500">Linkedin <span className="text-red-500">*</span></label>
            <input
              className="py-2 px-4 rounded-xl"
              type="text"
              name="linkedin"
              placeholder="Enter Linkedin"
              onChange={handleChange}
              value={formData.linkedin}
            />
          </div>

          <div className='flex lg:gap-5 md:gap-5 gap-3'>
            <label className="text-lg font-medium text-sky-500">Twitter <span className="text-red-500">*</span></label>
            <input
              className="py-2 px-4 rounded-xl"
              type="text"
              name="twitter"
              placeholder="Enter Twitter"
              onChange={handleChange}
              value={formData.twitter}
            />
          </div>

          <div className='flex lg:gap-5 md:gap-5 gap-3'>
            <label className="text-lg font-medium text-sky-500">Github <span className="text-red-500">*</span></label>
            <input
              className="py-2 px-4 rounded-xl"
              type="text"
              name="github"
              placeholder="Enter Github"
              onChange={handleChange}
              value={formData.github}
            />
          </div>

          <div className='flex lg:gap-5 md:gap-5 gap-3'>
            <label className="text-lg font-medium text-sky-500">Discord <span className="text-red-500">*</span></label>
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
          <button onClick={() => setCreateMember(false)} className='m-auto bg-gray-600 text-white py-2 px-12 rounded-xl'>Cancel</button>
          <button className='m-auto bg-sky-600 text-white py-2 px-12 rounded-xl' type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}