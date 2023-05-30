import React from 'react'
import { FaTwitter, FaGithub, FaInstagram, FaLinkedinIn, FaDiscord } from 'react-icons/fa'

const TeamCard = ({ member }) => {
    return (
        <div className='border border-gray-700 bg-[#121212] p-5 rounded-lg transition-all delay-[30ms] ease-in-out hover:scale-[101%]' id="Team_main_1">

            <div>

                <img className='h-[5rem] w-[5rem] rounded-full' id='Team_img' src={member.image} alt={member.image} />
            </div>


            <div className='font-lg font-semibold' id='Team_name'>
                {member.name}
            </div>
            <div className='Team_Position'>
                {member.position}
            </div>
            <div className='Team_about'>
                {member.about}
            </div>
            <div className='Team_email'>
                {member.email}
            </div>

            <div className='flex gap-4 items-center' id="Team_icon">
                <a href={member.github}>
                    <FaGithub size={22} />
                </a>
                <a href={member.twitter}>
                    <FaTwitter size={22} />
                </a>
                <a href={member.instagram}>
                    <FaInstagram size={22} />
                </a>
                <a href={member.linkedin}>
                    <FaLinkedinIn size={22} />
                </a>
                <a href={member.discord}>
                    <FaDiscord size={22} />
                </a>
            </div>
        </div>
    )
}

export default TeamCard