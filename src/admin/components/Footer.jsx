import React from 'react'

const Footer = () => {

  const year = new Date().getFullYear()


  return (
    <div className='absolute mt-32 w-full bg-black'>
      <div className="w-[90%] m-[auto] bg-gray-800 h-[1px]"></div>
      <div className="m-[auto] pb-8 pt-5 text-gray-600 font-medium text-sm flex flex-col md:flex-row lg:flex-row justify-between items-center w-[90%]">
        <p>
          © {year} T.E.S.L.A NITP. All Rights Reserved.
        </p>
        <p>
          Designed & Developed by <a style={{ textDecoration: "none" }} className="font-medium text-blue-500" href="#">
            <span className='text-sky-500'>Sudhanshu Ranjan</span>
          </a>.
        </p>
      </div>
    </div>
  )
}

export default Footer