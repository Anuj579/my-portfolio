import React from 'react'
import about_bg from '../../assets/about bg.png'
import { Link } from "react-router-dom";
import { Breadcrumbs, Tooltip } from "@material-tailwind/react";
import SkillBox from './SkillBox';
import htmlIcon from '../../assets/html-logo.svg';
import cssIcon from '../../assets/css-logo.svg';
import jsIcon from '../../assets/js-logo.svg';
import tailwindIcon from '../../assets/tailwind-logo.svg';
import bootstrapIcon from '../../assets/bootstrap-logo.svg';
import reactIcon from '../../assets/react-logo.svg';
import pythonIcon from '../../assets/python-logo.svg';
import djangoIcon from '../../assets/django-logo.svg';
import wordpressIcon from '../../assets/wordpress-logo.svg';
import figmaIcon from '../../assets/figma-logo.svg';
import vscodeIcon from '../../assets/vscode-logo.svg';
import githubIcon from '../../assets/github-logo.svg';
import educationIcon from '../../assets/education-icon.svg';
import certificationIcon from '../../assets/certification-icon.svg';
import eyeIcon from '../../assets/eye.svg';
import CustomButton from '../CustomButton';
import Connect from '../Connect';

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
      <section className='container px-4 mx-auto'>
        {/* Know who I am div */}
        <div className='py-20'>
          <h1 className='font-cairo font-bold text-4xl text-center md:text-left mt-10'>Know Who I Am</h1>
          <hr className='border-b-4 border-secondary w-40 mt-3 mb-14 mx-auto md:mx-0' />
          <p className='text-accent'>Hi, I'm Anuj Chaudhary, a passionate web developer based in Haryana, India, with a knack for creating engaging and interactive websites. Currently pursuing my BCA through online education, I specialize in both front-end and back-end development. When I'm not coding, I enjoy exploring new design trends and staying updated with the latest in tech.</p>
        </div>

        {/* Areas of Expertise div */}
        <div className="py-20">
          <h1 className='font-cairo font-bold text-4xl text-center md:text-left mt-10'>Areas of Expertise</h1>
          <hr className='border-b-4 border-secondary w-40 mt-3 mb-14 mx-auto md:mx-0' />
          <p className='text-accent'>I have honed a diverse skill set through rigorous education and hands-on experience in various projects. My expertise spans multiple domains, enabling me to tackle complex challenges effectively. Below are some key areas where I excel, showcasing my ability to deliver high-quality results.</p>
          <div className='flex flex-wrap justify-center gap-12 my-14'>
            <Tooltip
              content="HTML"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
            >
              <div ><SkillBox icon={htmlIcon} className='bg-htmlColor border-htmlColor' /></div>
            </Tooltip>
            <Tooltip
              content="CSS"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}>
              <div className='cursor-default'><SkillBox icon={cssIcon} className='bg-cssColor border-cssColor' /></div>
            </Tooltip>
            <Tooltip
              content="JavaScript"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}>
              <div><SkillBox icon={jsIcon} className='bg-jsColor border-jsColor' /></div>
            </Tooltip>
            <Tooltip
              content="Tailwind CSS"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}>
              <div><SkillBox icon={tailwindIcon} className='bg-tailwindColor border-tailwindColor' /></div>
            </Tooltip>
            <Tooltip
              content="Bootstrap"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}>
              <div><SkillBox icon={bootstrapIcon} className='bg-bootstrapColor border-bootstrapColor' /></div>
            </Tooltip>
            <Tooltip
              content="React JS"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}>
              <div><SkillBox icon={reactIcon} className='bg-reactColor border-reactColor' /></div>
            </Tooltip>
            <Tooltip
              content="Python"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}>
              <div><SkillBox icon={pythonIcon} className='bg-pythonColor border-pythonColor' /></div>
            </Tooltip>
            <Tooltip
              content="Django"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}>
              <div><SkillBox icon={djangoIcon} className='bg-djangoColor border-djangoColor' /></div>
            </Tooltip>

          </div>
        </div>

        {/* Tools I play with div */}
        <div className="py-20">
          <h1 className='font-cairo font-bold text-4xl text-center md:text-left mt-10'>Tools I play With</h1>
          <hr className='border-b-4 border-secondary w-40 mt-3 mb-14 mx-auto md:mx-0' />
          <p className='text-accent'>I leverage a variety of powerful tools to streamline my workflow and enhance productivity. From coding and design to version control and content management, these tools play a pivotal role in my development process. Here are a few key tools I frequently use: WordPress for robust content management, Figma for intuitive design and prototyping, Visual Studio Code for efficient coding, and GitHub for seamless version control and collaboration.</p>
          <div className='flex flex-wrap justify-center gap-12 my-14'>
            <Tooltip
              content="WordPress"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}>
              <div><SkillBox icon={wordpressIcon} className='bg-wordpressColor border-wordpressColor' /></div>
            </Tooltip>
            <Tooltip
              content="Figma"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}>
              <div><SkillBox icon={figmaIcon} className='bg-figmaColor border-figmaColor' /></div>
            </Tooltip>
            <Tooltip
              content="VS Code"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}>
              <div><SkillBox icon={vscodeIcon} className='bg-vscodeColor border-vscodeColor' /></div>
            </Tooltip>
            <Tooltip
              content="GitHub"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}>
              <div><SkillBox icon={githubIcon} className='bg-githubColor border-githubColor' /></div>
            </Tooltip>
          </div>
        </div>

        {/* Education and certifications div */}
        <div className="py-20">
          <h1 className='font-cairo font-bold text-4xl text-center md:text-left mt-10'>Education and Certifications</h1>
          <hr className='border-b-4 border-secondary w-48 mt-3 mb-14 mx-auto md:mx-0' />
          <p className='text-accent'>My formal education and additional certifications have equipped me with a solid foundation in web development.</p>
          <div className='flex justify-center md:gap-20 flex-col md:flex-row my-10'>
            <div className='mb-5'>
              <h2 className='font-cairo text-2xl font-semibold border-b-4 border-secondary w-max'>Education:</h2>
              <p className='font-medium flex items-start gap-2 my-7 text-accent'><img src={educationIcon} alt="degree-icon" className='mt-1' /><span>Bachelor of Computer Applications (BCA) <br /> <span className='font-extralight'>Mangalayatan University, Aligarh, India
                (Currently Pursuing)</span></span></p>
            </div>
            <div>
              <h2 className='font-cairo text-2xl font-semibold border-b-4 border-secondary w-max'>Certifications:</h2>
              <p className='font-medium flex items-start gap-2 my-7 text-accent'><img src={certificationIcon} alt="certification-icon" className='mt-1' /><span>Web Designing Technology <br /> <span className='font-extralight'>Incapp, 2022</span></span></p>
              <p className='font-medium flex items-start gap-2 my-7 text-accent'><img src={certificationIcon} alt="certification-icon" className='mt-1' /><span>Python Technology <br /> <span className='font-extralight'>Incapp, 2023</span></span></p>
              <p className='font-medium flex items-start gap-2 my-7 text-accent'><img src={certificationIcon} alt="certification-icon" className='mt-1' /><span>Django Technology <br /> <span className='font-extralight'>Incapp, 2023</span></span></p>
            </div>
          </div>

        </div>
        <hr className='border-[#ffffff25]' />

        {/* View Resume */}
        <div className='py-20 flex items-center flex-wrap gap-10'>
          <p className='text-accent'>Explore my detailed resume to learn more about my professional journey and skills.</p>
          <a href="https://youtube.com" target='_blank'><CustomButton
            text="View My Resume"
            icon={eyeIcon}
          /></a>
        </div>

        {/* Let's Connect div */}
        <div className='mb-14 py-20'>
          <Connect />
        </div>
      </section>
    </>
  )
}

export default About
