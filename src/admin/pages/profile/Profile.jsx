import React from 'react'
import './Profile.scss'

const Profile = () => {
  document.title = 'Tesla NIT Patna | Admin | Profile';



  return (
    <>
      <form>
        <div className="form">
          <div className="details">
            <div className='pt-16 title'>My Profile</div>
            <label for="email" >Email:</label><br></br>
            <input className='input' type="email" id="email" name="email" value="John"></input> <br></br>
            <label for="name">Name:</label><br></br>
            <input className='input' type="text" id="name" name="name" value="John"></input> <br></br>
            </div>
            <div className="button">
            <button className="btn">Logout</button>
            </div>
        </div>
      </form>
    </>



  )
}

export default Profile