import React from 'react'
import Heading1 from '../Headings/Heading1'
import { Link } from 'react-router-dom'

const Team = () => {

    const teams = [
        {
            name: "Blockchain",
            icon: "./images/blockchain.png"
        },
        {
            name: "Core (EE)",
            icon: "./images/electrical.png"
        },
        {
            name: "Web",
            icon: "./images/web.png"
        },
        {
            name: "Design",
            icon: "./images/design.png"
        },
        {
            name: "Content",
            icon: "./images/content.png"
        },
        {
            name: "PR & Marketing",
            icon: "./images/marketing.png"
        },
        {
            name: "Social Media",
            icon: "./images/social.png"
        },
        {
            name: "Event",
            icon: "./images/event.png"
        }
    ]



    return (
        <div className='pt-20'>
            <Heading1 text1={"A community of"} text2={"builders"} />
            <div className='flex items-center lg:flex-row md:flex-row flex-col justify-center lg:gap-x-16 md:gap-x-8 w-full mt-6'>
                <div className='flex flex-col items-center justify-center gap-5 mt-5'>
                    {teams.slice(0, 4).map((team, idx) => <div key={idx} className='flex lg:w-96 md:w-80 w-72 items-center bg-[#0a0a0a] border-gray-800 hover:border-gray-700 border p-2.5 rounded-2xl gap-4'>
                        <div className='bg-gray-900 p-1.5 rounded'>
                            <img src={team.icon} alt="blockchain" className='h-8 w-8' />
                        </div>
                        <div>
                            <p className='lg:text-xl md:text-xl text-lg text-gray-200 font-semibold pr-10'>{team.name} Team</p>
                        </div>
                    </div>)}
                </div>

                <div className='flex flex-col items-center justify-center gap-5 mt-5'>
                    {teams.slice(4, 8).map((team, idx) => <div key={idx} className='flex lg:w-96 md:w-80 w-72 items-center bg-[#0a0a0a] border-gray-800 hover:border-gray-700 border p-2.5 rounded-2xl gap-4'>
                        <div className='bg-gray-900 p-1.5 rounded'>
                            <img src={team.icon} alt="blockchain" className='h-8 w-8' />
                        </div>
                        <div>
                            <p className='lg:text-xl md:text-xl text-lg text-gray-200 font-semibold pr-10'>{team.name} Team</p>
                        </div>
                    </div>)}
                </div>
            </div>

            <div className='flex items-center justify-center mt-10'>
            <Link to='/team'>
                <button className='border-sky-500 text-sky-500 border hover:bg-sky-500 px-8 py-2 rounded-full font-medium ease-in transition-all delay-[10ms] hover:text-white'>
                    Meet the Team
                </button>
            </Link>
            </div>
        </div>
    )
}

export default Team