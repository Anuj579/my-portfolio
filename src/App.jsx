import { useEffect } from 'react'
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

  useScrollToTop();

  return (
    <>
      <div className={`min-h-screen flex flex-col transition-opacity duration-1000 text-white`}>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}
