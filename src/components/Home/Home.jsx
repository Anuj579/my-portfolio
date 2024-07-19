import React, { useState, useEffect } from 'react'
import './Home.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, EffectCreative, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import homeIllustration from '../../assets/home-illustration.svg'
import profile from '../../assets/profile img.png'
import gradient from '../../assets/radial gradient.png'
import whitegradient from '../../assets/white radial gradient.png'
import uiux from '../../assets/ui-ux.jpg'
import frontend from '../../assets/frontend.jpg'
import backend from '../../assets/backend.jpg'
import proj1laptop from '../../assets/proj1-laptop.png'
import proj1mobile from '../../assets/proj1-mobile.png'
import triangle from '../../assets/triangle.svg'
import { Link } from 'react-router-dom'
import ServiceCard from './ServiceCard'
import ProjectCard from '../Portfolio/ProjectCard'
import Connect from '../Connect'
import TypeEffect from './TypeEffect';

function Home({ isLoading }) {
  const [waitingTime, setWaitingTime] = useState(false)

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        setWaitingTime(true)
      }, 1800);
    }
  }, [])


  return (
    <>
      <section className='home-hero-section pt-32 pb-20 relative'>
        <img src={triangle} alt="triangle" className='absolute left-[10%] top-[20%] animate-rotate-up-down-left' />
        <img src={triangle} alt="triangle" className='absolute right-[12%] top-[30%] rotate-[78deg] animate-rotate-up-down-right' />
        <img src={triangle} alt="triangle" className='absolute left-2/4 bottom-[10%] rotate-[-90deg] animate-rotate-left-right' />
        <div className='container flex flex-wrap md:flex-nowrap justify-between items-center mx-auto my-10 gap-4 px-4'>
          <div className='relative'>
            <h1 className='text-2xl font-cairo font-semibold tracking-wide'>Hello World! 👋 I am  </h1><span className='text-secondary text-[42px] font-extrabold font-cairo tracking-wide relative sm:whitespace-normal whitespace-nowrap'><svg aria-hidden="true" id="name-underline" viewBox="0 0 297 33" className={`absolute left-0 top-[64%] h-[0.58em] w-full fill-transparent sm:opacity-0  ${waitingTime ? "block" : "hidden"} stroke-[#9fecff4b] stroke-[3.5]`} preserveAspectRatio="none"><path d="M0.999989 20.5C79.5 4.5 85.5 5.5 85.5 5.5C354.5 -9.50001 -56.5262 35.0001 216.5 22.8813C235.5 22.0379 266.931 23.7779 296.5 31" /></svg> <span>Anuj Chaudhary</span></span>
            <h2 className='text-3xl font-extrabold tracking-wide text-accent font-cairo my-7'><TypeEffect /></h2>
            <p className='hover:text-secondary fill-white w-max hover:fill-secondary mt-10 md:mt-14 transition-all duration-300'>
              <Link to={'/about'} className='learn-more-link flex items-center relative font-medium text-lg'><span>Explore my portfolio</span> <svg xmlns="http://www.w3.org/2000/svg" className='h-[18px] fill-inherit ms-3' viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" /></svg></Link>
            </p>
          </div>
          <div>
            <img src={homeIllustration} className='h-[300px] md:h-[400px] mt-10 md:mt-0' alt="homepage-illustration" />
          </div>
        </div>
      </section>

      <section className='container px-4 mx-auto'>
        {/* Get To know me div */}
        <div className='py-20'>
          <div className='flex flex-col items-center'>
            <h1 className='font-cairo font-bold text-center text-4xl mt-10'>Get To Know Me</h1>
            <hr className='border-b-4 border-secondary w-36 mt-3 mb-14 mx-auto md:mx-0' />
          </div>
          <div className='flex flex-col md:flex-row gap-16 items-center'>
            <div>
              <p className='text-accent'>My journey into the world of programming has been a thrilling ride of continuous learning and discovery. I have honed my skills in HTML, CSS, JavaScript, and Python, and I am actively expanding my knowledge in frameworks like React JS and Django.</p><br />
              <p className='text-accent'>I love building dynamic and responsive web applications that provide seamless user experiences. From front-end design to back-end logic, I enjoy the challenge of creating efficient and elegant solutions.</p><br />
              <p className='text-accent'>My interests also include exploring new technologies and frameworks, always aiming to expand my expertise and keep up with the latest trends in web development. Whether it's creating interactive user interfaces or developing robust back-end systems, I am passionate about bringing ideas to life through code.</p>
            </div>
            <div className='relative w-full flex justify-center'>
              <img src={profile} alt="profile-img" className='h-52 z-10' />
              <img src={gradient} alt="gradient" className='absolute -top-16 h-[350px] z-0' />
              <img src={whitegradient} alt="gradient" className='absolute blur-xl h-52  z-0' />
            </div>
          </div>
        </div>

        {/* Services div */}
        <div className='py-20'>
          <div className='flex flex-col items-center'>
            <h1 className='font-cairo font-bold text-4xl mt-10 text-center'>What Can I Do <span className='whitespace-nowrap'>For You</span></h1>
            <hr className='border-b-4 border-secondary w-48 mt-3 mb-14 mx-auto md:mx-0' />
          </div>
          <p className='text-accent '>Explore my expertise and discover how I can help bring your projects to life. With a solid foundation in web development, I offer a blend of creative and technical skills. Whether you need a visually appealing UI/UX design, efficient frontend development with React.js, or robust backend solutions using Python and Django, I am here to support your project. My aim is to create seamless digital experiences that exceed your expectations. Let's collaborate to turn your ideas into reality.</p>
          {/* For smaller screens */}
          <div className="md:hidden mt-14">
            <Swiper
              modules={[EffectCards, Pagination]}
              effect="cards"
              pagination={true}
              grabCursor={true}
              style={{ overflow: 'hidden' }}

            >
              <SwiperSlide className='justify-center' style={{ display: 'flex' }}>
                <ServiceCard
                  image={uiux}
                  title="UI/UX Design"
                  description="Crafting visually appealing and user-friendly designs that provide a seamless and engaging user experience."
                />
              </SwiperSlide>
              <SwiperSlide className='justify-center' style={{ display: 'flex' }}>
                <ServiceCard
                  image={frontend}
                  title="Front-End Development"
                  description="Crafting dynamic and responsive websites using HTML, CSS, JavaScript, and modern frameworks like React.js, Bootstrap, and Tailwind CSS."
                />
              </SwiperSlide>
              <SwiperSlide className='justify-center' style={{ display: 'flex' }}>
                <ServiceCard
                  image={backend}
                  title="Back-End Development"
                  description="Developing robust and scalable backend systems using Django, ensuring your website performs efficiently and securely."
                />
              </SwiperSlide>
            </Swiper>
          </div>

          {/* For larger screens */}
          <div className='hidden md:flex justify-center items-center flex-row gap-14 flex-wrap mt-14'>
            <ServiceCard
              image={uiux}
              title="UI/UX Design"
              description="Crafting visually appealing and user-friendly designs that provide a seamless and engaging user experience."
            />
            <ServiceCard
              image={frontend}
              title="Front-End Development"
              description="Crafting dynamic and responsive websites using HTML, CSS, JavaScript, and modern frameworks like React.js, Bootstrap, and Tailwind CSS."
            />
            <ServiceCard
              image={backend}
              title="Back-End Development"
              description="Developing robust and scalable backend systems using Django, ensuring your website performs efficiently and securely."
            />
          </div>
        </div>

        {/* Highlighted creations div */}
        <div className='py-20'>
          <div className='flex flex-col items-center'>
            <h1 className='font-cairo font-bold text-4xl mt-10 text-center'>Highlighted Creations</h1>
            <hr className='border-b-4 border-secondary w-48 mt-3 mb-14 mx-auto md:mx-0' />
          </div>
          <p className='text-accent mb-6'>Explore my top projects, crafted with passion and creativity, just for you. These highlighted creations showcase my dedication to delivering high-quality web solutions. From innovative UI/UX designs to complex frontend and backend developments, each project demonstrates my ability to bring ideas to life through meticulous attention to detail and cutting-edge technology. Dive into my portfolio to see how I combine aesthetic appeal with functionality to create impactful digital experiences.</p>
          <div className='md:hidden my-10'>
            <Swiper
              modules={[EffectCreative, Pagination]}
              effect="creative"
              creativeEffect={{
                prev: {
                  shadow: true,
                  origin: 'left center',
                  translate: ['-5%', 0, -200],
                  rotate: [0, 100, 0],
                },
                next: {
                  origin: 'right center',
                  translate: ['5%', 0, -200],
                  rotate: [0, -100, 0],
                },
              }}
              pagination={true}
              grabCursor={true}
            >
              <SwiperSlide className='justify-center' style={{ display: 'flex' }}>
                <ProjectCard
                  laptopImg={proj1laptop}
                  mobileImg={proj1mobile}
                  title="E-commerce Website"
                  description="Developed an E-commerce webapp, which have many features including user authentication, add to cart, placing order, order history , selecting quantities of each product and search your choice and many more."
                />
              </SwiperSlide>
              <SwiperSlide className='justify-center' style={{ display: 'flex' }}>
                <ProjectCard
                  laptopImg={proj1laptop}
                  mobileImg={proj1mobile}
                  title="E-commerce Website"
                  description="Developed an E-commerce webapp, which have many features including user authentication, add to cart, placing order, order history , selecting quantities of each product and search your choice and many more."
                />
              </SwiperSlide>
            </Swiper>
          </div>

          {/* Project card for larger screens */}
          <div className='hidden md:flex justify-center items-center gap-20'>
            <ProjectCard
              laptopImg={proj1laptop}
              mobileImg={proj1mobile}
              title="E-commerce Website"
              description="Developed an E-commerce webapp, which have many features including user authentication, add to cart, placing order, order history , selecting quantities of each product and search your choice and many more."
            />
            <ProjectCard
              laptopImg={proj1laptop}
              mobileImg={proj1mobile}
              title="E-commerce Website"
              description="Developed an E-commerce webapp, which have many features including user authentication, add to cart, placing order, order history , selecting quantities of each product and search your choice and many more."
            />
          </div>
        </div>

        {/* Quote div */}
        <div className='py-10 text-center'>
          <h1 className='font-cairo text-3xl md:text-4xl font-semibold'>“If, at first, you do not succeed, call it version 1.0”</h1>
          <p className='mt-6'>- Khayri R.R. Woulfe</p>
        </div>

        {/* Let's Connect div */}
        <div className='mb-14 py-20'>
          <Connect />
        </div>
      </section>
    </>
  )
}

export default Home
