import React from 'react'
import "./BackButton.scss"
import { BsArrowLeft } from 'react-icons/bs'
import { Link } from "react-router-dom"


const BackButton = ({to}) => {
  return (
    <div className='backbtn-container'>
        <Link to={to} className='link text-sky-500'>
            <BsArrowLeft className='text-sky-500'/> {" "} <span className='text-sky-500'>Go Back</span>
        </Link>
    </div>
  )
}

export default BackButton