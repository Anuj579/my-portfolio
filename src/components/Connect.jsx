import React from 'react'
import CustomButton from './CustomButton';
import send from '../assets/send.svg'
import triangle from '../assets/triangle.svg'
import arrow from '../assets/arrow.svg'

function Connect() {
    return (
        <div className='rounded-md py-12 md:py-16 px-2 text-center flex flex-col items-center shadow-xl bg-black shadow-[#00000057] relative' >
            <img src={triangle} alt="triangle" className='h-4 md:h-5 absolute left-[10%] top-[20%] animate-rotate-up-down-left' />
            <img src={triangle} alt="triangle" className='h-4 md:h-5 absolute right-[10%] top-[30%] rotate-[78deg] animate-rotate-up-down-right' />
            <img src={triangle} alt="triangle" className='h-4 md:h-5 absolute left-2/4 bottom-[5%] rotate-[-90deg] animate-rotate-left-right' />
            <h1 className='text-4xl font-josefin-slab font-bold mb-5'>Let's <span className='underline text-secondary'>Connect</span></h1>
            <p className='text-accent relative'>Have a project in mind or just want to chat? Drop me a message!</p>
            <img src={arrow} alt="arrow-img" className='translate-x-10 mt-4 md:mt-7 mb-2  ' />
            <CustomButton
                text="Send a message"
                icon={send}
            />
        </div>
    )
}

export default Connect
