import React from 'react'
import "./BackButton.scss"
import { BsArrowLeft } from 'react-icons/bs'
import { Link } from "react-router-dom"


const BackButton = ({to}) => {
  return (
    <div className='backbtn-container'>
        <Link to={to} className='link'>
            <BsArrowLeft/> {" "}Go Back
        </Link>
    </div>
  )
}

export default BackButton