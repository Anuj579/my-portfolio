import React, { useState, useEffect } from 'react'
import homeIllustration from '../../assets/home-illustration.svg'

function Home() {
  const [loaded, setloaded] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setloaded(true)
    }, 1000);
  }, [])



  return (
    <section className='home-hero-section pt-20 pb-10'>
      <div className='container flex flex-wrap md:flex md:flex-nowrap justify-between items-center mx-auto my-10 px-4 text-white '>
        <div>
          <h1 className='text-[40px] font-josefin-slab font-black'>Hi There! <br /> I'm <span className='text-secondary relative whitespace-nowrap'><svg aria-hidden="true" id="name-underline" viewBox="0 0 297 33" className={`absolute left-0 top-2/3 h-[0.58em] w-full fill-transparent ${loaded ? "block" : "hidden"} stroke-[#9ceaff9d] stroke-[3.5]`} preserveAspectRatio="none"><path d="M0.999989 20.5C79.5 4.5 85.5 5.5 85.5 5.5C354.5 -9.50001 -56.5262 35.0001 216.5 22.8813C235.5 22.0379 266.931 23.7779 296.5 31" /></svg> <span>Anuj Chaudhary</span></span> </h1>
          <p className='mt-5 text-lg'>This is a simple example of a Landing Page site built with Next.js and Tailwind CSS.</p>
        </div>
        <div>
          <img src={homeIllustration} className='h-[400px]' alt="homepage-illustration" />
        </div>
      </div>
    </section>
  )
}

export default Home
