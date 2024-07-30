import { useState, useEffect } from 'react'
import './App.css'
import Loader from './components/Loader'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet, useLocation } from 'react-router-dom'

function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

export default function App() {

  // Creating state for loader
  const [isLoading, setIsLoading] = useState(true)

  useScrollToTop();

  useEffect(() => {
    let contentLoaded = false;
    let timer;

    const handleLoad = () => {
      contentLoaded = true;
      timer = setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Loader load={isLoading} />
      <div className={`${isLoading ? 'opacity-0 overflow-hidden max-h-screen' : 'opacity-100'} min-h-screen flex flex-col transition-opacity duration-1000 text-white`}>
        <Header />
        <Outlet isLoading={isLoading} />
        <Footer />
      </div>
    </>
  )
}
