import { Link } from 'react-router-dom'
import { FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { useQuery } from '@tanstack/react-query';
import { getCounter } from '../../services/counter';
import CountUp from 'react-countup';


const Footer = () => {
  const date = new Date;
  const year = date.getFullYear();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['counter'],
    queryFn: () => getCounter(),
    staleTime: Infinity
  })


  return (
    <div className="bg-[#0b0b0b] text-sm w-[100%] mt-[10rem]">

      <div className="mb-10 w-[90%] grid gap-2 md:gap-4 lg:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 m-[auto] items-start justify-items-center">

        <div data-aos="fade-up" className='mt-10 w-[100%] md:w-[100%] lg:w-[100%] order-1 md:order-1 lg:order-1'>

          <Link to="/">
            <img src="/images/logo.svg" alt="logo" className='h-14 mb-2 w-auto' height={55} width={150}/>
          </Link>

          <p className='max-w-[17rem] py-3 text-base'>Tesla is the most active technical club of NIT Patna.</p>
          <div className='flex gap-3 py-2 '>
            <a aria-label="Tesla Instagram" style={{ textDecoration: "none" }} target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/tesla_nitp/" >
              <FaInstagram className='transition ease-in delay-50 text-pink-500 visited:text-pink-500 hover:text-pink-600 hover:scale-[110%]' size={30} />
            </a>
            <a aria-label="Tesla Facebook" style={{ textDecoration: "none" }} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/tesla-club-nitp/" >
              <FaLinkedinIn className='transition ease-in delay-50 text-blue-500 visited:text-blue-500 hover:text-blue-600 hover:scale-[110%]' size={30} />
            </a>
            <a aria-label="Tesla Twitter" style={{ textDecoration: "none" }} target="_blank" rel="noopener noreferrer" href="https://twitter.com/T_E_S_L_Aclub" >
              <FaTwitter className='transition ease-in delay-50 text-sky-500 visited:text-sky-500 hover:text-sky-600 hover:scale-[110%]' size={30} />
            </a>
          </div>
        </div>

        <div data-aos="fade-up" className='mt-10 w-[100%] md:w-[100%] lg:w-[100%] order-2 md:order-2 lg:order-2'>
          <div className='flex items-center justify-start'><h1 className='font-extrabold text-2xl text-blue-700 mr-3'>|</h1><h1 className='text-lg font-semibold'>Useful Links</h1></div>
          <ul className='mt-4 flex flex-col gap-2 text-base'>
            <li className='hover:text-blue-600'><Link style={{ textDecoration: "none" }} to="/news"><p className='text-gray-400 hover:text-sky-500'>News</p></Link></li>
            <li className='hover:text-blue-600'><Link style={{ textDecoration: "none" }} to="/events"><p className='text-gray-400 hover:text-sky-500'>Events</p></Link></li>
            <li className=' hover:text-blue-600'><Link style={{ textDecoration: "none" }} to="/team"><p className='text-gray-400 hover:text-sky-500'>Team</p></Link></li>
            <li className=' hover:text-blue-600'><Link style={{ textDecoration: "none" }} to="/gallery"><p className='text-gray-400 hover:text-sky-500'>Gallery</p></Link></li>
            <li className='hover:text-blue-600'><Link style={{ textDecoration: "none" }} to="/admin/dashboard"><p className='text-gray-400 hover:text-sky-500'>Admin</p></Link></li>
          </ul>
        </div>

        <div data-aos="fade-up" className='mt-10 w-[100%] md:w-[100%] lg:w-[100%] order-2 md:order-2 lg:order-2'>
          <div className='flex items-center justify-start'><h1 className='font-extrabold text-2xl text-blue-700 mr-3'>|</h1><h1 className='text-lg font-semibold'>Must Check</h1></div>
          <ul className='mt-4 flex flex-col gap-2 text-base'>
            <li className='hover:text-blue-600'><Link style={{ textDecoration: "none" }} to="/resources/web3">
              <p className='text-gray-400 hover:text-sky-500'>Web3</p></Link></li>
            <li className='hover:text-blue-600'><Link style={{ textDecoration: "none" }} to="/resources/webdev"><p className='text-gray-400 hover:text-sky-500'>Web Dev</p></Link></li>
            <li className=' hover:text-blue-600'><Link style={{ textDecoration: "none" }} to="/resources/courses"><p className='text-gray-400 hover:text-sky-500'>Free Courses</p></Link></li>
            <li className=' hover:text-blue-600'><Link style={{ textDecoration: "none" }} to="/resources/notes"><p className='text-gray-400 hover:text-sky-500'>Notes</p></Link></li>
            <li className=' hover:text-blue-600'><Link style={{ textDecoration: "none" }} to="/resources/opportunities"><p className='text-gray-400 hover:text-sky-500'>Opportunities</p></Link></li>
          </ul>
        </div>

        <div data-aos="fade-up" className='mt-10 w-[100%] md:w-[100%] lg:w-[100%] order-3 md:order-3 lg:order-3 text-base'>
          <div className='flex items-center justify-start'><h1 className='font-extrabold text-2xl text-blue-700 mr-3'>|</h1><h1 className='text-lg font-semibold'>Contact Us</h1></div>
          <p className='max-w-[16rem] pt-4 text'>NIT Patna, Ashok Rajpath, Bihta, Patna, Bihar-800005, India</p>
          <p className='pt-2'>Ph : <a style={{ textDecoration: "none" }} href="tel:+919876512345" className='text-blue-700 ml-2 font-semibold'><span className='hover:text-gray-400 text-sky-500'>+91 90087 45678</span></a></p>
          <p className='pt-2'>Mail : <a style={{ textDecoration: "none" }} href="mailto:tesla.club@nitp.ac.in" className='text-blue-700 ml-2 font-semibold'><span className='hover:text-gray-400 text-sky-500'>tesla.club@nitp.ac.in</span></a></p>
        </div>

      </div>

      <div className="w-[90%] m-[auto] bg-gray-800 h-[1px]"></div>
      <div className="m-[auto] py-7 text-gray-500 font-medium text-sm gap-4 flex flex-col md:flex-row lg:flex-row justify-between items-center w-[90%]">
        <p className='lg:order-1 md:order-1 order-2 text-gray-400'>
          © {year} T.E.S.L.A NITP. All Rights Reserved.
        </p>

        {
          isLoading ? <div className='bg-[#091218] border-gray-800 border px-4 py-1.5 rounded-xl lg:order-2 md:order-2 order-1'>
            <div className='flex items-center gap-2'><span className='text-gray-400'>Total Visitors : </span> <div className='w-14'>...</div></div>
            <div className='flex items-center gap-2'><span className='text-gray-400'>Unique Visitors : </span> <div className='w-14'>...</div></div>
          </div> :
            isError ? <></>
              :
              <div className='bg-[#091218] border-gray-800 border px-4 pr-2 py-1.5 rounded-xl lg:order-2 md:order-2 order-1'>
                <div className='flex items-center gap-2'><span className='text-gray-400'>Total Visitors : </span> <div className='w-10 text-sky-600'><CountUp end={data[0].total} enableScrollSpy={true} /></div></div>
                <div className='flex items-center gap-2'><span className='text-gray-400'>Unique Visitors : </span> <div className='w-10 text-sky-600'><CountUp end={data[0].unique} enableScrollSpy={true} /></div></div>
              </div>
        }

        <div className="flex flex-col gap-1 order-3">
          <p className='text-gray-400'>
          Designed & Developed by <a style={{ textDecoration: "none" }} className="font-medium text-blue-500" href="https://sudhanshur.vercel.app" target='_blank'>
            <span className='text-sky-500'>Sudhanshu Ranjan </span>
          </a>
          </p>
          <p className='text-gray-400'>
            Managed by the <span className='text-sky-500'>TESLA Web Team</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
