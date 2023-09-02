import React from 'react'
import './Profile.scss'
import useAuth from '../../../hooks/useAuth';

const Profile = () => {
  document.title = 'Tesla NIT Patna | Admin | Profile';
  const { user, handleLogout } = useAuth();

  return (
    <>
      <div>
        <div className="form">
          <div className="details">
            <div className='pt-16 title'>My Profile</div>
            <label htmlFor="email" >Email:</label><br></br>
            <input className='input' type="email" id="email" readOnly name="email" value={user.email}></input> <br></br>
            <label htmlFor="name">Name:</label><br></br>
            <input className='input' type="text" id="name" readOnly name="name" value={user.name}></input> <br></br>
          </div>
          <div className="button">
            <button onClick={handleLogout} className="btn">Logout</button>
          </div>
        </div>
      </div>
    </>



  )
}

export default Profile