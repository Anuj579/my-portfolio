import React from 'react'
import portfolio_bg from '../../assets/portfolio bg.png'
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <>
      <section className='bg-cover bg-center bg-no-repeat min-h-[45vh] md:min-h-[65vh] flex flex-col justify-center items-center shadow-lg shadow-black  bg-opacity-80' style={{ backgroundImage: `url(${portfolio_bg})` }}>
        <h1 className='text-4xl font-cairo md:text-[40px] lg:text-5xl font-bold mb-3 mt-14'>Portfolio</h1>
        <Breadcrumbs
          separator={<p className='text-white'>/</p>}
          className='bg-transparent '>
          <Link to="/" className="opacity-60 text-white text-base" style={{ fontWeight: '400' }}>
            HOME
          </Link>
          <Link to="/portfolio" className='text-white text-base' style={{ fontWeight: '400' }}>PORTFOLIO</Link>
        </Breadcrumbs>
      </section>
    </>
  )
}

export default Portfolio
