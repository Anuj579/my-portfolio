import React, { useState } from "react";
import './Header.css'
import { Link } from "react-router-dom";
import {
  Drawer,
  IconButton,
} from "@material-tailwind/react";
import CustomButton from '../CustomButton';
import { ThemeProvider } from "@material-tailwind/react";
import logo from '../../assets/logo.svg'
import envelopeicon from '../../assets/envelope.svg'

function Header() {
  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const [scrolledNavbar, setScrolledNavbar] = useState(false)
  function scrollHandler() {
    if (window.scrollY > 20) {
      setScrolledNavbar(true);
    } else {
      setScrolledNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);


  const drawerWidth = window.innerWidth * 0.85;
  const theme = {
    drawer: {
      defaultProps: {
        size: drawerWidth,
        overlay: true,
        placement: "left",
        overlayProps: undefined,
        className: "drawer",
        dismiss: undefined,
        onClose: undefined,
        transition: {
          type: "tween",
          duration: 0.3,
        },
      },
      styles: {
        base: {
          drawer: {
            position: "fixed",
            zIndex: "z-[9999]",
            pointerEvents: "pointer-events-auto",
            boxSizing: "box-border",
            width: "w-full",
            boxShadow: "shadow-2xl shadow-blue-gray-900/10",
            backgroundColor: "bg-primary"
          },
          overlay: {
            position: "fixed",
            inset: "inset-0",
            width: "w-full",
            height: "h-screen",
            pointerEvents: "pointer-events-auto",
            zIndex: "z-[9995]",
            backgroundColor: "bg-black",
            backgroundOpacity: "bg-opacity-30",
            backdropBlur: "backdrop-blur-sm",
          },
        },
      },
    },
  };


  return (
    <>
      <nav className={`p-4 fixed top-0 w-full ${scrolledNavbar && 'bg-primary shadow-md shadow-black'} transition-all z-[9999]`}>
        <div className="md:container mx-auto w-full flex justify-between md:justify-between items-center ">
          {/* Logo */}
          <Link to="/">
            <img src={logo} className="h-12" alt="" />
          </Link>

          {/* Menu Button (for smaller screens) */}
          <button
            id="menu-toggle"
            className={`text-white focus:outline-none md:hidden ${open ? "hidden" : "block"}`}
            onClick={openDrawer}
          >
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>

          {/* Navigation Links */}
          <div className="hidden md:block text-lg">
            <ul >
              <div className="flex gap-8 lg-link font-medium text-[20px transition-all">
                <li><Link to="/" className="py-2 "><i className="fa-solid fa-house me-1 relative bottom-[1px]"></i> <span>Home</span></Link></li>
                <li><Link to="/about" className="py-2  "><i className="fa-solid fa-user me-1 relative bottom-[1px]"></i> <span>About</span></Link></li>
                <li><Link to="/portfolio" className="py-2 "><i className="fa-solid fa-briefcase me-1"></i> <span>Portfolio</span></Link></li>
                <li><Link to="/contact" className="py-2  "><i className="fa-solid fa-envelope me-1"></i> <span>Contact</span></Link></li>
              </div>
            </ul>
          </div>
        </div>
      </nav>

      {/* Drawer for smaller screens */}
      <div className="md:hidden">
        <ThemeProvider value={theme}>
          <Drawer open={open} onClose={closeDrawer} className="p-4">
            <div className="pb-4 flex items-center justify-between border-b border-[#ffffff25]">
              <Link to="/">
                <img src={logo} className="h-12" alt="" />
              </Link>
              <IconButton variant="text" className="text-white" onClick={closeDrawer}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-8 w-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </IconButton>
            </div>
            <div className="font-medium text-[18px]">
              <li className="list-none"><Link to="/" onClick={closeDrawer} className="block py-4"><i className="fa-solid fa-house text-[20px] me-3"></i> Home</Link></li>
              <li className="list-none"><Link to="/about" onClick={closeDrawer} className="block py-4"><i className="fa-solid fa-user text-[20px] me-4"></i> About</Link></li>
              <li className="list-none"><Link to="/portfolio" onClick={closeDrawer} className="block py-4"><i className="fa-solid fa-briefcase text-[20px] me-3"></i> Portfolio</Link></li>
              <li className="list-none"><Link to="/contact" onClick={closeDrawer} className="block py-4"><i className="fa-solid fa-envelope text-[20px] me-3"></i> Contact</Link></li>
            </div>
            <div className=" mt-auto mb-4">
              <a href="mailto:anujchaudhary3112@gmail.com">
                <CustomButton
                  text="email me"
                  icon={envelopeicon}
                  className='w-6'
                />
              </a>
              <hr className="border-[#ffffff25] my-5" />
              <ul className="flex flex-wrap items-center gap-x-3 ">
                <Link><li className='border-2 rounded-full hover:scale-110 hover:border-secondary transition-all duration-500'><svg xmlns="http://www.w3.org/2000/svg" className='w-[34px] h-[34px] p-2' fill='white' viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg></li></Link>
                <Link><li className='border-2 rounded-full hover:scale-110 hover:border-secondary transition-all duration-500'><svg xmlns="http://www.w3.org/2000/svg" className='w-[34px] h-[34px] p-2' fill='white' viewBox="0 0 448 512"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" /></svg></li></Link>
                <Link><li className='border-2 rounded-full hover:scale-110 hover:border-secondary transition-all duration-500'><svg xmlns="http://www.w3.org/2000/svg" className='w-[34px] h-[34px] p-2' fill='white' viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg></li></Link>
              </ul>
            </div>
          </Drawer>
        </ThemeProvider>
      </div>
    </>
  );
}

export default Header;
