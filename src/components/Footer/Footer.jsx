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
            <li className='hover:text-blue-600'><Link  style={{ textDecoration: "none" }} to="/about"><p className='text-gray-400 hover:text-sky-500'>About</p></Link></li>
            <li className='hover:text-blue-600'><Link  style={{ textDecoration: "none" }} to="/news"><p className='text-gray-400 hover:text-sky-500'>News</p></Link></li>
            <li className='hover:text-blue-600'><Link  style={{ textDecoration: "none" }} to="/events"><p className='text-gray-400 hover:text-sky-500'>Events</p></Link></li>
            <li className=' hover:text-blue-600'><Link  style={{ textDecoration: "none" }} to="/team"><p className='text-gray-400 hover:text-sky-500'>Team</p></Link></li>
            <li className=' hover:text-blue-600'><Link  style={{ textDecoration: "none" }} to="/gallery"><p className='text-gray-400 hover:text-sky-500'>Gallery</p></Link></li>
          </ul>
        </div>

        <div className='mt-10 w-[100%] md:w-[100%] lg:w-[100%] order-2 md:order-2 lg:order-2'>
          <div className='flex items-center justify-start'><h1 className='font-extrabold text-2xl text-blue-700 mr-3'>|</h1><h1 className='text-lg font-semibold'>Must Check</h1></div>
          <ul className='mt-4 flex flex-col gap-2 text-base'>
            <li className='hover:text-blue-600'><Link  style={{ textDecoration: "none" }} to="/legals/privacy-policy">
              <p className='text-gray-400 hover:text-sky-500'>Web3</p></Link></li>
            <li className='hover:text-blue-600'><Link  style={{ textDecoration: "none" }} to="/legals/terms-of-service"><p className='text-gray-400 hover:text-sky-500'>Web Dev</p></Link></li>
            <li className=' hover:text-blue-600'><Link  style={{ textDecoration: "none" }} to="/legals/code-of-conduct"><p className='text-gray-400 hover:text-sky-500'>Free Courses</p></Link></li>
            <li className=' hover:text-blue-600'><Link  style={{ textDecoration: "none" }} to="/legals/refund-policy"><p className='text-gray-400 hover:text-sky-500'>Notes</p></Link></li>
            <li className=' hover:text-blue-600'><Link  style={{ textDecoration: "none" }} to="/legals/refund-policy"><p className='text-gray-400 hover:text-sky-500'>Opportunities</p></Link></li>
          </ul>
        </div>

        <div className='mt-10 w-[100%] md:w-[100%] lg:w-[100%] order-3 md:order-3 lg:order-3 text-base'>
          <div className='flex items-center justify-start'><h1 className='font-extrabold text-2xl text-blue-700 mr-3'>|</h1><h1 className='text-lg font-semibold'>Contact Us</h1></div>
          <p className='max-w-[16rem] pt-4 text'>NIT Patna, Ashok Rajpath, Patna, Bihar-800005, India</p>
          <p className='pt-2'>Ph : <a style={{ textDecoration: "none" }} href="tel:+919876512345" className='text-blue-700 ml-2 font-semibold'><span className='hover:text-gray-400 text-sky-500'>+91 90087 45678</span></a></p>
          <p className='pt-2'>Mail : <a style={{ textDecoration: "none" }} href="mailto:tesla@nitp.ac.in" className='text-blue-700 ml-2 font-semibold'><span className='hover:text-gray-400 text-sky-500'>tesla@nitp.ac.in</span></a></p>
        </div>

      </div>

      <div className="w-[90%] m-[auto] bg-gray-800 h-[1px]"></div>
      <div className="m-[auto] pb-8 pt-5 text-gray-600 font-medium text-sm flex flex-col md:flex-row lg:flex-row justify-between items-center w-[90%]">
        <p>
          © {year} Kaizen. All Rights Reserved.
        </p>
        <p>
          Designed & Developed by <a style={{textDecoration:"none"}} className="font-medium text-blue-500" href="#">
            <span className='text-sky-500'>Sudhanshu Ranjan</span>
            </a>.
        </p>
      </div>
    </div>
  )
}

export default Footer