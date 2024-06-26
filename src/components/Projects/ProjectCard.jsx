import React from 'react'
import gradient from '../../assets/radial gradient.png'
import eyeicon from '../../assets/eye.svg'
import CustomButton from '../CustomButton';

function ProjectCard({ laptopImg, mobileImg, title, description }) {
    return (
        <div className='rounded-md relative pt-8 pb-16 md:pb-10 mt-14 w-[340px] bg-[#0c1821] border border-gray-600 md:border-none md:shadow-custom-card'>
            <img src={gradient} alt="gradient" className='absolute -top-28 w-96' />
            <div className='relative -top-16'>
                <img src={laptopImg} alt="project1" className='object-cover object-center' />
                <img src={mobileImg} alt="project1" className='h-44 absolute object-cover object-center top-10 right-0' />
            </div>
            <div className='text-center mx-5 flex flex-col items-center'>
                <h2 className='text-2xl mb-4 font-semibold'>{title}</h2>
                <p className='text-accent text-base mb-8'>{description}</p>
                <CustomButton
                    text="View Details"
                    icon={eyeicon}
                />
            </div>

        </div>
    )
}

export default ProjectCard
