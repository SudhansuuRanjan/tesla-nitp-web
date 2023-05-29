import React, { useState } from 'react'
import Heading1 from '../Headings/Heading1'

const Faq = () => {
    return (
        <div className='pt-20'>
            <Heading1 text1={"Frequently Asked"} text2={" Questions"} />

            <div className='flex flex-col items-center justify-center gap-4 my-16'>
                <FaqCard />
                <FaqCard />
                <FaqCard />
                <FaqCard />
            </div>
        </div>
    )
}

const FaqCard = ({ data }) => {
    const [show, setShow] = useState(false);
    return (
        <div className='flex lg:w-[70%] md:w-[80%] w-[95%] transition-all delay-[15ms] ease-in-out  bg-[#0a0a0a] border-gray-800 hover:border-gray-700 border lg:p-5 md:p-5 p-3 rounded-2xl gap-0 flex-col'>
            <div onClick={()=>setShow((show)=>!show)} className='flex justify-between items-center cursor-pointer'>
                <h3 className='font-semibold lg:text-lg md:text-lg text-base'>
                    Why do you need to join T.E.S.L.A. Club? What are the benefits?
                </h3>
                <button className={`${show && 'rotate-180'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 hover:text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>
            <div className={`overflow-hidden transition-all delay-[15ms] ease-in-out ${show ? 'h-fit mt-4 my-2':'h-0'}`}>
                <p className='text-gray-400 text-sm w-[95%]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsa placeat pariatur, ullam est modi. Adipisci maxime corrupti, at pariatur architecto doloribus odio inventore nisi ad aspernatur cupiditate deserunt quasi iste accusantium nesciunt quisquam quibusdam hic provident ipsam voluptatibus laborum libero? Aliquid suscipit libero minima repellat. Soluta natus cupiditate molestiae.
                </p>
            </div>
        </div>
    )
}

export default Faq