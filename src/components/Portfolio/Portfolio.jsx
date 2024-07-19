import React, {useState} from 'react'
import portfolio_bg from '../../assets/portfolio bg.png'
import proj1laptop from '../../assets/proj1-laptop.png'
import proj1mobile from '../../assets/proj1-mobile.png'
import proj2laptop from '../../assets/proj2-laptop.png'
import proj2mobile from '../../assets/proj2-mobile.png'
import proj3laptop from '../../assets/proj3-laptop.png'
import proj3mobile from '../../assets/proj3-mobile.png'
import proj4laptop from '../../assets/proj4-laptop.png'
import proj4mobile from '../../assets/proj4-mobile.png'
import proj5laptop from '../../assets/proj5-laptop.png'
import proj5mobile from '../../assets/proj5-mobile.png'
import proj6laptop from '../../assets/proj6-laptop.png'
import proj6mobile from '../../assets/proj6-mobile.png'
import proj7laptop from '../../assets/proj7-laptop.png'
import proj7mobile from '../../assets/proj7-mobile.png'
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import ProjectCard from './ProjectCard';
import Connect from '../Connect'

function Portfolio() {
  const [showAll, setShowAll] = useState(false);
  
  const projects = [
    {
      laptopImg: proj1laptop,
      mobileImg: proj1mobile,
      title: "IceCreamsCorner Web App",
      description: "Developed an online ice cream shop using Django. Features include user authentication, shopping cart with quantity limits, order placement, and order history. Responsive design ensures a seamless experience across devices.",
      demoLink:"https://anuj459.pythonanywhere.com/",
      codeLink:"https://github.com/Anuj579/IceCreamsCorner_webapp"
    },
    {
      laptopImg: proj2laptop,
      mobileImg: proj2mobile,
      title: "Time Tracer Website",
      description: "A web app for tracking time, offering countdown and elapsed time functionalities. Input a target date to see remaining or elapsed time, with a user-friendly and responsive design.",
      demoLink:"https://timetracer9.netlify.app/",
      codeLink:"https://github.com/Anuj579/TimeTracer"
    },
    {
      laptopImg: proj3laptop,
      mobileImg: proj3mobile,
      title: "Tax Calculator",
      description: "A web app for calculating income after tax deductions. Input your gross income, extra income, and age group to get accurate results, displayed in INR. Includes user-friendly error handling and supports multiple tax rates.",
      demoLink:"https://taxcalculator99.netlify.app/",
      codeLink:"https://github.com/Anuj579/Tax-calculator"
    },
    {
      laptopImg: proj4laptop,
      mobileImg: proj4mobile,
      title: "Todo App",
      description: "An intuitive Todo application allowing easy theme switching between light and dark modes. It lets you add, edit, and delete tasks with the ability to manage multiple items simultaneously and clear selected tasks with a single click.",
      demoLink:"https://mytodoapp9.netlify.app/",
      codeLink:"https://github.com/Anuj579/ToDo-App-ReactJS"
    },
    {
      laptopImg: proj5laptop,
      mobileImg: proj5mobile,
      title: "User Info Viewer",
      description: "A React-based app showcasing user details fetched from an API. Features include a list of users with avatars, detailed information in a dialog box, and a custom scrollbar for enhanced UX.",
      demoLink:"https://userinfoviewer.netlify.app/",
      codeLink:"https://github.com/Anuj579/User-info-viewer"
    },
    {
      laptopImg: proj6laptop,
      mobileImg: proj6mobile,
      title: "Responsive Design",
      description: "A sleek, responsive website built with React and Bootstrap. Showcases my frontend skills with a clean, professional design and seamless responsiveness across various devices.",
      demoLink:"https://responsivereactsite.netlify.app/",
      codeLink:"https://github.com/Anuj579/Responsive-react-site"
    },
    {
      laptopImg: proj7laptop,
      mobileImg: proj7mobile,
      title: "Demo UI Design",
      description: "A professionally designed, responsive website created to highlight front-end development skills. This project utilizes HTML, CSS, and Bootstrap to deliver a visually appealing and functional design.",
      demoLink:"https://atgworldui.netlify.app/",
      codeLink:"https://github.com/Anuj579/ATG-World-UI-design"
    },
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <>
      <section className='bg-cover bg-center bg-no-repeat min-h-[45vh] md:min-h-[65vh] flex flex-col justify-center items-center shadow-lg shadow-black bg-opacity-80' style={{ backgroundImage: `url(${portfolio_bg})` }}>
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
          <p className='text-accent'>Welcome to my portfolio! Here you'll find a selection of my recent projects, showcasing my skills in web development and design. From sleek, responsive websites to interactive applications, each project reflects my commitment to quality and innovation. I invite you to explore my work and see how I can bring your ideas to life.</p>
          <div className='flex justify-center items-center flex-wrap gap-20 my-16'>
            {visibleProjects.map((project, index) => (
              <ProjectCard
                key={index}
                laptopImg={project.laptopImg}
                mobileImg={project.mobileImg}
                title={project.title}
                description={project.description}
                demoLink={project.demoLink}
                codeLink={project.codeLink}
              />
            ))}
          </div>
          <div className='flex justify-center'>
            <button
              onClick={() => setShowAll(!showAll)}
              className=' text-white py-2 rounded-lg hover:underline'
            >
              {showAll ? 'Show Less...' : 'Load More...'}
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
