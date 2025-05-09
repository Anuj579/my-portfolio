import React, { useState } from 'react'
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import ProjectCard from './ProjectCard';
import Connect from '../Connect'
import './Portfolio.css'

function Portfolio() {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      laptopImg: 'https://res.cloudinary.com/djsvc9dqf/image/upload/f_auto,q_auto/blogapp-laptop',
      mobileImg: 'https://res.cloudinary.com/djsvc9dqf/image/upload/f_auto,q_auto/blogapp-mobile',
      title: "BlogOp",
      techStack: ["Next.js", "Tailwind CSS", "MongoDB", "NextAuth"],
      description: "Developed a full-stack blog platform with Next.js and MongoDB. Features secure user authentication, dynamic blog creation, a custom rich text editor, and fully responsive design for all devices.",
      demoLink: "https://blogop.vercel.app/",
      codeLink: "https://github.com/Anuj579/blog-op"
    },
    {
      laptopImg: 'https://res.cloudinary.com/djsvc9dqf/image/upload/f_auto,q_auto/noteapp-laptop',
      mobileImg: 'https://res.cloudinary.com/djsvc9dqf/image/upload/f_auto,q_auto/noteapp-mobile',
      title: "NoteWorthy Web App",
      techStack: ["React.js", "Tailwind CSS", "Django Rest"],
      description: "Built a full-stack note-taking platform using Django and React. Features user authentication, profile management, theme toggling, search functionality, and CRUD operations. Fully responsive for all devices.",
      demoLink: "https://noteworthyonline.netlify.app/",
      codeLink: "https://github.com/Anuj579/notes-app-frontend-react"
    },
    {
      laptopImg: 'https://res.cloudinary.com/dn2xodesd/image/upload/f_auto,q_auto/proj1laptop',
      mobileImg: 'https://res.cloudinary.com/dn2xodesd/image/upload/f_auto,q_auto/proj1mob',
      title: "IceCreamsCorner Web App",
      techStack: ["Bootstrap", "JavaScript", "Django"],
      description: "Developed an online ice cream shop using Django. Features include user authentication, shopping cart with limits, order placement, and history. Responsive design ensures a seamless experience across devices.",
      demoLink: "https://anuj459.pythonanywhere.com/",
      codeLink: "https://github.com/Anuj579/IceCreamsCorner_webapp"
    },
    {
      laptopImg: 'https://res.cloudinary.com/djsvc9dqf/image/upload/v1743868758/melodift-laptop_unknmv.png',
      mobileImg: 'https://res.cloudinary.com/djsvc9dqf/image/upload/v1743868758/melodift-mobile_khmbnv.png',
      title: "Melodift",
      techStack: ["Next.js", "Tailwind CSS", "FFmpeg"],
      description: "An online music converter that transforms any song into a relaxing lofi version. Upload your track to instantly generate chill lofi vibes, with download support and a smooth, responsive UI built using modern web technologies.",
      demoLink: "https://melodift.up.railway.app/",
      codeLink: "https://github.com/Anuj579/melodift"
    },
    {
      laptopImg: 'https://res.cloudinary.com/dn2xodesd/image/upload/f_auto,q_auto/proj2laptop',
      mobileImg: 'https://res.cloudinary.com/dn2xodesd/image/upload/f_auto,q_auto/proj2mob',
      title: "Time Tracer Website",
      techStack: ["HTML", "CSS", "JavaScript"],
      description: "A web app for tracking time, offering countdown and elapsed time functionalities. Input a target date to see the remaining or elapsed time, featuring a user-friendly interface and a responsive, modern design.",
      demoLink: "https://timetracer9.netlify.app/",
      codeLink: "https://github.com/Anuj579/TimeTracer"
    },
    {
      laptopImg: 'https://res.cloudinary.com/dn2xodesd/image/upload/f_auto,q_auto/movieapp-laptop',
      mobileImg: 'https://res.cloudinary.com/dn2xodesd/image/upload/f_auto,q_auto/movieapp-mob',
      title: "Movie Search App",
      techStack: ["Bootstrap", "JavaScript"],
      description: "A movie search application that lets users quickly find movies by title. Featuring responsive design, Bootstrap integration, and dynamic API-driven content with smooth loading states for a clean, user-friendly experience.",
      demoLink: "https://quickmoviesearch.netlify.app/",
      codeLink: "https://github.com/Anuj579/movie-search-app"
    },
    {
      laptopImg: 'https://res.cloudinary.com/dn2xodesd/image/upload/f_auto,q_auto/proj3laptop',
      mobileImg: 'https://res.cloudinary.com/dn2xodesd/image/upload/f_auto,q_auto/proj3mob',
      title: "Tax Calculator",
      techStack: ["Bootstrap", "JavaScript"],
      description: "A web app for calculating income after tax deductions. Input your gross income, extra income, and age group to get accurate results, displayed in INR. Includes user-friendly error handling and supports multiple tax rates.",
      demoLink: "https://taxcalculator99.netlify.app/",
      codeLink: "https://github.com/Anuj579/Tax-calculator"
    },
    {
      laptopImg: 'https://res.cloudinary.com/dn2xodesd/image/upload/f_auto,q_auto/proj4laptop',
      mobileImg: 'https://res.cloudinary.com/dn2xodesd/image/upload/f_auto,q_auto/proj4mob',
      title: "Todo App",
      techStack: ["React.js", "Tailwind CSS"],
      description: "An intuitive Todo application allowing easy theme switching between light and dark modes. It lets you add, edit, and delete tasks with the ability to manage multiple items simultaneously and clear selected tasks with a single click.",
      demoLink: "https://mytodoapp9.netlify.app/",
      codeLink: "https://github.com/Anuj579/ToDo-App-ReactJS"
    },
    {
      laptopImg: 'https://res.cloudinary.com/dn2xodesd/image/upload/f_auto,q_auto/proj6laptop',
      mobileImg: 'https://res.cloudinary.com/dn2xodesd/image/upload/f_auto,q_auto/proj6mob',
      title: "Responsive Design",
      techStack: ["React.js", "Bootstrap"],
      description: "A sleek, responsive website built with React and Bootstrap. It showcases my frontend development skills with a clean, professional design and seamless responsiveness across all various devices and screen sizes.",
      demoLink: "https://responsivereactsite.netlify.app/",
      codeLink: "https://github.com/Anuj579/Responsive-react-site"
    },
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <>
      <section className='portfolio-hero-section relative min-h-[45vh] md:min-h-[65vh] flex flex-col justify-center items-center shadow-lg shadow-black'>
        <h1 className='text-4xl font-cairo md:text-[40px] lg:text-5xl font-bold mb-3 mt-14'>Portfolio</h1>
        <Breadcrumbs separator={<p className='text-white'>/</p>} className='bg-transparent '>
          <Link to="/" className="opacity-60 text-white text-base" style={{ fontWeight: '400' }}>HOME</Link>
          <Link to="/portfolio" className='text-white text-base' style={{ fontWeight: '400' }}>PORTFOLIO</Link>
        </Breadcrumbs>
      </section>
      <section className='container px-4 mx-auto'>
        <div className='py-20'>
          <div className='flex flex-col items-center'>
            <h1 className='font-cairo font-bold text-4xl text-center mt-10'>My Recent Works</h1>
            <hr className='border-b-4 border-secondary w-40 mt-3 mb-14 mx-auto md:mx-0' />
          </div>
          <p className='text-accent'>Explore my portfolio to see a selection of recent projects that highlight my web development and design skills. Each project showcases my commitment to quality and innovation. Check out my work to see how I can bring your ideas to life.</p>
          {/* <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 justify-center items-center gap-20 my-16'> */}
          <div className='flex justify-center items-center flex-wrap gap-20 my-16'>

            {visibleProjects.map((project, index) => (
              <ProjectCard
                key={index}
                laptopImg={project.laptopImg}
                mobileImg={project.mobileImg}
                title={project.title}
                techStack={project.techStack}
                description={project.description}
                demoLink={project.demoLink}
                codeLink={project.codeLink}
              />
            ))}
          </div>
          <div className='flex justify-center'>
            <button
              onClick={() => setShowAll(!showAll)}
              className=' text-white load-link flex items-center font-semibold'
            >
              <span>{showAll ? 'Show Less' : 'Load More'}</span><svg xmlns="http://www.w3.org/2000/svg" className='h-[16px] fill-white ms-3' viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" /></svg>
            </button>
          </div>
        </div>

        {/* Let's Connect div */}
        <div className='py-20'>
          <Connect />
        </div>
      </section>
    </>
  );
}

export default Portfolio;
