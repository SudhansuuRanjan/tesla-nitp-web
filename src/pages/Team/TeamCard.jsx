import React from 'react'
import { FaTwitter, FaGithub, FaInstagram, FaLinkedinIn, FaDiscord } from 'react-icons/fa'

const TeamCard = ({ member }) => {
    return (
        <div className='border border-gray-700 bg-[#121212] p-5 rounded-lg'>
            <div>
                <img className='h-[5rem] w-[5rem] rounded-full' src={member.image} alt={member.image} />
            </div>
            <div className='font-lg font-semibold'>
                {member.name}
            </div>
            <div>
                {member.position}
            </div>
            <div>
                {member.email}
            </div>

            <div className='flex gap-2 items-center'>
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