import React from 'react'
import about_bg from '../../assets/about bg.png'
import { Link } from "react-router-dom";
import { Breadcrumbs } from "@material-tailwind/react";

function About() {
  return (
    <>
      <section className='bg-cover bg-center bg-no-repeat min-h-[45vh] md:min-h-[65vh] flex flex-col justify-center items-center shadow-lg shadow-black  bg-opacity-80' style={{ backgroundImage: `url(${about_bg})` }}>
        <h1 className='text-4xl font-cairo md:text-[40px] lg:text-5xl font-bold mb-3 mt-14'>About Me</h1>
        <Breadcrumbs
          separator={<p className='text-white'>/</p>}
          className='bg-transparent '>
          <Link to="/" className="opacity-60 text-white text-base" style={{ fontWeight: '400' }}>
            HOME
          </Link>
          <Link to="/about" className='text-white text-base' style={{ fontWeight: '400' }}>ABOUT</Link>
        </Breadcrumbs>
      </section>
    <div className='container px-4 mx-auto my-8'>
      <h1 className='font-cairo font-bold text-4xl text-center mx-16 my-10'>Know Who <span className='text-secondary whitespace-nowrap underline'>I Am</span></h1>
      <p className='text-accent md:text-center'>Hi, I'm Anuj Chaudhary, a passionate web developer based in Haryana, India, with a knack for creating engaging and interactive websites. Currently pursuing my BCA through online education, I specialize in both front-end and back-end development. When I'm not coding, I enjoy exploring new design trends and staying updated with the latest in tech.</p>
    </div>
    </>
  )
}

export default About
