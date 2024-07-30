import React from 'react'
import CustomButton from './CustomButton';
import send from '../assets/send.svg'
import triangle from '../assets/triangle.svg'
import arrow from '../assets/arrow.svg'

function Connect() {
    return (
        <div className='rounded-xl py-12 md:py-16 px-2 flex flex-col items-center shadow-lg  bg-gradient-to-tr from-primary to-[#010b139a] shadow-[#44adf813] relative mb-14' >
            <img src={triangle} alt="triangle" className='h-4 md:h-5 absolute left-[10%] top-[20%] animate-rotate-up-down-left' />
            <img src={triangle} alt="triangle" className='h-4 md:h-5 absolute right-[10%] top-[30%] rotate-[78deg] animate-rotate-up-down-right' />
            <img src={triangle} alt="triangle" className='h-4 md:h-5 absolute left-2/4 bottom-[5%] rotate-[-90deg] animate-rotate-left-right' />
            <p className='text-white relative text-4xl md:text-[44px] text-center font-bold font-cairo mx-3 tracking-wide'>Let's create something <i>amazing</i> together!</p>
            <img src={arrow} alt="arrow-img" className='translate-x-10 mt-4 md:mt-7 mb-2  ' />
            <CustomButton
                text="Send a message"
                icon={send}
                className='w-6'
                to='/contact'
            />
        </div>
    )
}

export default Connect
