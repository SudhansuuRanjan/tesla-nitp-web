import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'
const Footer = () => {
  const date = new Date;
  const year = date.getFullYear();
  return (
    <div className="bg-gray-100 dark:bg-[#0b0b0b] text-sm w-[100%] mt-[10rem]">

      <div className="mb-10 w-[90%] grid gap-2 md:gap-4 lg:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 m-[auto] items-start justify-items-center">

        <div className='mt-10 w-[100%] md:w-[100%] lg:w-[100%] order-1 md:order-1 lg:order-1'>

          <Link href="/">
            <img src="/images/logo.svg" alt="logo" className='h-14 mb-2 w-auto' />
          </Link>

          <p className='max-w-[17rem] py-3 text-base'>Tesla is the most active technical club of NIT Patna.</p>
          <div className='flex gap-3 py-2 '>
            <a style={{ textDecoration: "none" }} href="https://facebook.com" className='transition ease-in delay-50 visited:text-blue-500 text-blue-500 hover:text-blue-600 hover:scale-[110%]'>
              <FaFacebook className='text-blue-600' size={30} />
            </a>
            <a style={{ textDecoration: "none" }} href="https://web.whatsapp.com" className='transition ease-in delay-50 text-green-400 visited:text-green-400 hover:text-green-500 hover:scale-[110%]'>
              <IoLogoWhatsapp size={30} />
            </a>
            <a style={{ textDecoration: "none" }} href="https://instagram.com" className='transition ease-in delay-50 text-pink-500 visited:text-pink-500 hover:text-pink-600 hover:scale-[110%]'>
              <FaInstagram size={30} />
            </a>

          </div>
        </div>

        <div className='mt-10 w-[100%] md:w-[100%] lg:w-[100%] order-2 md:order-2 lg:order-2'>
          <div className='flex items-center justify-start'><h1 className='font-extrabold text-2xl text-blue-700 mr-3'>|</h1><h1 className='text-lg font-semibold'>Useful Links</h1></div>
          <ul className='mt-4 flex flex-col gap-2 text-base'>
            <li className='hover:text-blue-600'><Link className='visited:text-gray-400 text-gray-400 hover:text-sky-500' style={{ textDecoration: "none" }} to="/about">About</Link></li>
            <li className='hover:text-blue-600'><Link className='visited:text-gray-400 text-gray-400 hover:text-sky-500' style={{ textDecoration: "none" }} to="/news">News</Link></li>
            <li className='hover:text-blue-600'><Link className='visited:text-gray-400 text-gray-400 hover:text-sky-500' style={{ textDecoration: "none" }} to="/events">Events</Link></li>
            <li className=' hover:text-blue-600'><Link className='visited:text-gray-400 text-gray-400 hover:text-sky-500' style={{ textDecoration: "none" }} to="/team">Team</Link></li>
            <li className=' hover:text-blue-600'><Link className='visited:text-gray-400 text-gray-400 hover:text-sky-500' style={{ textDecoration: "none" }} to="/gallery">Gallery</Link></li>
          </ul>
        </div>

        <div className='mt-10 w-[100%] md:w-[100%] lg:w-[100%] order-2 md:order-2 lg:order-2'>
          <div className='flex items-center justify-start'><h1 className='font-extrabold text-2xl text-blue-700 mr-3'>|</h1><h1 className='text-lg font-semibold'>Must Check</h1></div>
          <ul className='mt-4 flex flex-col gap-2 text-base'>
            <li className='hover:text-blue-600'><Link className='visited:text-gray-400 text-gray-400 hover:text-sky-500' style={{ textDecoration: "none" }} to="/legals/privacy-policy">Web3</Link></li>
            <li className='hover:text-blue-600'><Link className='visited:text-gray-400 text-gray-400 hover:text-sky-500' style={{ textDecoration: "none" }} to="/legals/terms-of-service">Web Dev</Link></li>
            <li className=' hover:text-blue-600'><Link className='visited:text-gray-400 text-gray-400 hover:text-sky-500' style={{ textDecoration: "none" }} to="/legals/code-of-conduct">Free Courses</Link></li>
            <li className=' hover:text-blue-600'><Link className='visited:text-gray-400 text-gray-400 hover:text-sky-500' style={{ textDecoration: "none" }} to="/legals/refund-policy">Notes</Link></li>
            <li className=' hover:text-blue-600'><Link className='visited:text-gray-400 text-gray-400 hover:text-sky-500' style={{ textDecoration: "none" }} to="/legals/refund-policy">Opportunities</Link></li>
          </ul>
        </div>

        <div className='mt-10 w-[100%] md:w-[100%] lg:w-[100%] order-3 md:order-3 lg:order-3 text-base'>
          <div className='flex items-center justify-start'><h1 className='font-extrabold text-2xl text-blue-700 mr-3'>|</h1><h1 className='text-lg font-semibold'>Contact Us</h1></div>
          <p className='max-w-[16rem] pt-4 text'>NIT Patna, Ashok Rajpath, Patna, Bihar-800005, India</p>
          <p className='pt-2'>Ph : <a style={{ textDecoration: "none" }} href="tel:+919876512345" className='text-blue-700 ml-2 font-semibold'>+91 90087 45678</a></p>
          <p className='pt-2'>Mail : <a style={{ textDecoration: "none" }} href="mailto:tesla@nitp.ac.in" className='text-blue-700 ml-2 font-semibold'>tesla@nitp.ac.in</a></p>
        </div>

      </div>

      <div className="w-[90%] m-[auto] bg-gray-800 h-[2px]"></div>
      <div className="m-[auto] pb-8 pt-5 text-gray-800 dark:text-gray-400 dark:font-light flex flex-col md:flex-row lg:flex-row justify-between items-center w-[90%] text-base">
        <p>
          © {year} Kaizen. All Rights Reserved.
        </p>
        <p>
          Designed & Developed by <a className="text-base font-medium text-blue-500" href="#">Sudhanshu Ranjan</a>.
        </p>
      </div>
    </div>
  )
}

export default Footer