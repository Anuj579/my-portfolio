import React from 'react'
import gradient from '../../assets/radial gradient.png'
import githubhicon from '../../assets/github-icon.svg'
import linkicon from '../../assets/link-icon.svg'
import CustomButton from '../CustomButton';

function ProjectCard({ laptopImg, mobileImg, title, description, demoLink, codeLink, className }) {
    return (
        <div className='rounded-md relative pt-8 pb-16 md:pb-10 mt-14 w-[340px] bg-[#0c1821] border border-gray-600 md:border-none md:shadow-custom-card'>
            <img src={gradient} alt="gradient" className={`absolute -top-28 w-96 ${className}`} />
            <div className='relative -top-16'>
                <img src={laptopImg} alt="project1" className='object-cover object-center' />
                <img src={mobileImg} alt="project1" className='h-44 absolute object-cover object-center top-10 right-0' />
            </div>
            <div className='text-center mx-5 flex flex-col items-center'>
                <h2 className='text-2xl mb-4 font-semibold'>{title}</h2>
                <p className='text-accent text-base min-h-36 mb-8'>{description}</p>
                <div className='flex flex-wrap gap-8 justify-center'>
                    <a href={demoLink} target='_blank'>
                        <CustomButton
                            text="Demo"
                            icon={linkicon}
                            className='w-[18px]'
                        />
                    </a>
                    <a href={codeLink} target='_blank'>
                        <CustomButton
                            text="Code"
                            icon={githubhicon}
                            className='w-5'
                        />
                    </a>
                </div>
            </div>

        </div>
    )
}

export default ProjectCard
