import React, { useState } from 'react'
import Heading1 from '../Headings/Heading1'

const Faq = () => {

    const faqs = [
        {
            question: "Why do you need to join T.E.S.L.A. Club? What are the benefits?",
            answer:"Joining T.E.S.L.A. Club at NIT Patna offers networking opportunities with like-minded individuals, skill development in electrical engineering and blockchain, industry exposure through guest lectures and field visits, project-based learning, and participation in competitions and hackathons. Stay updated with the latest trends in these fields and enhance your career prospects by becoming a member of T.E.S.L.A. Club.",
            id: "0"
        },
        {
            question: "How can I join T.E.S.L.A. Club?",
            answer:"You can join T.E.S.L.A. Club by filling out the membership form available on our website. You can also join our Discord server to stay updated with the latest events and activities of the club.",
            id: "1"
        },
        {
            question: "Do we get to learn new technologies own our own or there will be sessions?",
            answer:"We conduct regular sessions on various topics related to electrical engineering and blockchain. We also conduct workshops and hackathons to help you learn new technologies and apply your knowledge to solve real-world problems.",
            id: "2"
        },
        {
            question:"What are the activities and events organized by T.E.S.L.A. Club?",
            answer:"T.E.S.L.A. Club organizes various events and activities throughout the year, including guest lectures, workshops, hackathons, competitions, and field visits. We also conduct regular sessions on various topics related to electrical engineering and blockchain.",
            id: "3"
        },
        {
            question:"Can I participate in club activities if I have no prior knowledge or experience in electrical engineering or blockchain?",
            answer:"Yes, you can participate in club activities even if you have no prior knowledge or experience in electrical engineering or blockchain. We conduct regular sessions on various topics related to electrical engineering and blockchain to help you learn new technologies and apply your knowledge to solve real-world problems.",
            id: "4"
        }
    ]


    return (
        <div className='pt-20'>
            <Heading1 details={"We have compiled some commonly asked questions and their answers to provide you with the information you need. If you have any additional inquiries, feel free to reach out to us."} text1={"Frequently Asked"} text2={" Questions"} />

            <div className='flex flex-col items-center justify-center gap-4 my-16'>
                {
                    faqs.map((faq) => <FaqCard key={faq.id} data={faq} />)
                }
            </div>
        </div>
    )
}

const FaqCard = ({ data }) => {
    const [show, setShow] = useState(false);
    return (
        <div data-aos="fade-up" className='flex lg:w-[70%] md:w-[80%] w-[95%] transition-all delay-[15ms] ease-in-out  bg-[#0a0a0a] border-gray-800 hover:border-gray-700 border lg:p-5 md:p-5 p-3 rounded-2xl gap-0 flex-col'>
            <div onClick={()=>setShow((show)=>!show)} className='flex justify-between items-center cursor-pointer'>
                <h3 className='font-semibold lg:text-lg md:text-lg text-base pr-5'>
                    {data.question}
                </h3>
                <button className={`transition-all delay-75 ease-in-out ${show && '-rotate-180'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 hover:text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>
            <div className={`overflow-hidden transition-all delay-[15ms] ease-in-out ${show ? 'h-fit mt-4 my-2':'h-0'}`}>
                <p className='text-gray-400 text-sm w-[95%]'>
                    {
                        data.answer
                    }
                </p>
            </div>
        </div>
    )
}

export default Faq