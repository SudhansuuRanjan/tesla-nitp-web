import React from 'react'
import useAuth from '../../../hooks/useAuth';

const Profile = () => {
  document.title = 'Tesla NIT Patna | Admin | Profile';
  const { user, handleLogout } = useAuth();

  return (
    <>
      <div className='h-[70vh] w-full pt-20'>
        <div className="m-auto flex lg:flex-row md:flex-row flex-col justify-center gap-10 my-20 lg:items-start md:items-start items-center px-10">
          <div className="">
            <div className='text-2xl font-bold'>My Profile</div>
            <div className='flex items-center gap-5 pt-8'>
              <label htmlFor="email" className='text-sky-500 font-medium'>Email</label>
              <input className='px-4 py-2 flex-1 rounded-xl outline-none' type="email" id="email" readOnly name="email" value={user.email}></input>
            </div>
            <div className='flex items-center gap-5 pt-8'>
              <label htmlFor="name" className='text-sky-500 font-medium'>Name</label>
              <input className='px-4 py-2 flex-1 rounded-xl outline-none' type="text" id="name" readOnly name="name" value={user.name}></input>
            </div>
          </div>
          <div className="">
            <button onClick={handleLogout} className="bg-sky-500 hover:bg-sky-600 px-5 lg:py-1.5 md:py-1.5 py-2 lg:w-auto md:w-auto w-[12rem] rounded-full text-white">Logout</button>
          </div>
        </div>
      </div>
    </>



  )
}

export default Profile