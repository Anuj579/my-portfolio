import React from 'react'
import gradient from '../../assets/radial gradient.webp'
import githubhicon from '../../assets/github-icon.svg'
import linkicon from '../../assets/link-icon.svg'
import CustomButton from '../CustomButton';

function ProjectCard({ laptopImg, mobileImg, title, techStack = [], description, demoLink, codeLink, className }) {
    return (
        <div className={`rounded-md relative pt-8 pb-10 mt-14 w-[340px] h-full bg-[#010b139f] border border-[#ffffff25] md:shadow-custom-card ${className}`}>
            <img src={gradient} alt="gradient" className={`absolute -top-28 w-96 hidden md:block`} />
            <div className='relative -top-16'>
                <img src={laptopImg} alt="project-screenshot-laptop" />
                <img src={mobileImg} alt="project-screenshot-mobile" className='h-44 absolute  top-10 right-0' />
            </div>
            <div className='text-center mx-5 flex flex-col items-center flex-grow'>
                <h2 className='text-2xl mb-2 font-semibold'>{title}</h2>
                <p className='text-sm mb-4 text-secondary line-clamp-1'>{techStack.join(" / ")}</p>
                <p className='text-accent text-base mb-8 line-clamp-6'>{description}</p>

                {/* Buttons */}
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
