import { useState, useEffect } from 'react'

const Team = () => {
  const [createMember, setCreateMember] = useState(false);

  const users = [
    {
      name: 'Rahul Kumar',
      priority: 1,
      email: 'rahul@gmail.com',
      role: 'Web Coordinator',
      about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      image: "https://cloud.appwrite.io/v1/avatars/initials?name=Sudhanshu+Ranjan&width=64&height=64&project=console",
      social: {
        instagram: "",
        linkedin: "",
        twitter: "",
        github: "",
        discord: "",
      }
    },
    {
      name: 'Rahul Kumar',
      priority: 2,
      email: 'rahul@gmail.com',
      role: 'Web Coordinator',
      about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      image: "https://cloud.appwrite.io/v1/avatars/initials?name=Sudhanshu+Ranjan&width=64&height=64&project=console",
      social: {
        instagram: "",
        linkedin: "",
        twitter: "",
        github: "",
        discord: "",
      }
    },
    {
      name: 'Rahul Kumar',
      priority: 3,
      email: 'rahul@gmail.com',
      role: 'Web Coordinator',
      about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      image: "https://cloud.appwrite.io/v1/avatars/initials?name=Sudhanshu+Ranjan&width=64&height=64&project=console",
      social: {
        instagram: "",
        linkedin: "",
        twitter: "",
        github: "",
        discord: "",
      }
    }
  ]

  useEffect(() => {
    document.title = 'Tesla NIT Patna | Admin | Team';
  }, []);

  return (
    <div className='pt-20 relative'>
      <div className='m-auto max-w-[80%]'>
        <h1 className='text-5xl leading-normal font-bold my-5'>
          <span className='text-sky-500'>T.E.S.L.A.</span> Team
        </h1>
        <div className='border-t-[1px] border-t-gray-800 py-8'>
          <div className='flex justify-between'>
            <input className='py-2.5 px-4 rounded-md border w-[24rem] border-gray-700 bg-gray-800' type="search" name="name" id="name" placeholder='Search by name' />
            <button onClick={() => setCreateMember(!createMember)} className='bg-sky-600 text-white rounded-md px-8 py-2.5'>Creater User</button>
          </div>

          <div className='border border-gray-800 mt-8 rounded-xl'>
            <table className='w-full'>
              <thead className='text-left border-b border-gray-800'>
                <tr className='text-gray-400'>
                  <th className='py-5 px-4'>Name</th>
                  <th className='py-5 px-4'>Priority</th>
                  <th className='py-5 px-4'>Email</th>
                  <th className='py-5 px-4'>Role</th>
                </tr>
              </thead>
              <tbody className='text-white '>
                {users.map((user, index) => (
                  <tr key={index} className='border-b border-gray-800'>
                    <td className='py-2.5 px-4'>
                      <div className='flex items-center'>
                        <img className='w-10 h-10 rounded-full mr-4' src={user.image} alt='Avatar of Jonathan Reinink' />
                        <div className=''>
                          <p className='text-gray-400 font-medium text-base leading-none'>{user.name}</p>
                          <p className='text-gray-600 text-sm'>{user.about.substring(0, 30) + "..."}</p>
                        </div>
                      </div>
                    </td>
                    <td className='py-2.5 px-4'>{user.priority}</td>
                    <td className='py-2.5 px-4'>{user.email}</td>
                    <td className='py-2.5 px-4'>{user.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>


        </div>
      </div>
      {createMember && <TeamForm setCreateMember={setCreateMember} />}
    </div>
  )
}

export default Team;


const TeamForm = ({setCreateMember}) => {
  const [formData, setFormData] = useState({
    name: '',
    priority: 0,
    email: '',
    role: '',
    about: '',
    image: '',
    social: {
      instagram: "",
      linkedin: "",
      twitter: "",
      github: "",
      discord: "",
    }
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <div className='fixed inset-0 z-40 bg-black bg-opacity-30 backdrop-blur-md h-screen w-full flex items-center justify-center'>
      <form onSubmit={handleSubmit} className='bg-gray-900 border px-10 border-gray-800 rounded-3xl'>
        <div className='pt-5 pb-3'>
          <h1 className='text-3xl font-bold text-center mb-5'>Create Member</h1>
        </div>
        <div className="lg:w-[28rem] md:w-[18rem] h-[70vh] overflow-y-scroll space-y-4 pr-5">
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
            <label className="text-lg">Image <span className="text-red-500">*</span></label>
            <input
              className="py-2 px-4 rounded-xl"
              type="file"
              name="image"
              placeholder="Enter Image"
              required
              onChange={handleChange}
              value={formData.image}
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
              value={formData.social.instagram}
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
              value={formData.social.linkedin}
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
              value={formData.social.twitter}
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
              value={formData.social.github}
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
              value={formData.social.discord}
            />
          </div>
        </div>
        <div className='py-5 flex items-center'>
          <button onClick={()=>setCreateMember(false)} className='m-auto bg-gray-600 text-white py-2 px-12 rounded-xl'>Cancel</button>
          <button className='m-auto bg-sky-600 text-white py-2 px-12 rounded-xl' type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}