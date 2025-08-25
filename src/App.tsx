import './App.css'
import { Route, Routes } from 'react-router-dom';
import Nav from './assets/Components/Nav/Nav'
import Home from './assets/Views/Home/Home'
import Projects from './assets/Views/Projects/Projects';
import Discovery from './assets/Views/Discovery/Discovery';
import Data from './assets/Views/Data/Data';
import Footer from './assets/Components/Footer/Footer';
import { useEffect, useRef, useState } from 'react';

function App() {

  const navRef = useRef<HTMLElement | null>(null)
  const mainRef = useRef<HTMLDivElement | null>(null)
  const footerRef = useRef<HTMLElement | null>(null)

  const [mainHeight, setMainHeight] = useState<number>()

  useEffect(() => {
    if (navRef && navRef.current && footerRef && footerRef.current) {
      const docHeight = document.body.offsetHeight 
      const windowHeight = window.innerHeight || document.body.clientHeight
      const maxHeight = Math.max(docHeight, windowHeight)
      const navHeight = navRef.current.offsetHeight
      const footerHeight = footerRef.current.offsetHeight
      const fillNeeded = maxHeight - navHeight - footerHeight
      setMainHeight(fillNeeded)
    }
  }, [navRef, footerRef])

  return (
    <>
      <Nav navRef={navRef} />
      <div className="main-container" ref={mainRef} style={{ minHeight: `${mainHeight}px` }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/code" element={<Projects />} />
          <Route path="/discovery" element={< Discovery />} />
          <Route path="/data" element={< Data />} />
          <Route path="/*" element={<div>Error</div>} />
        </Routes>
      </div>
      <Footer footerRef={footerRef} />
    </>
  )
}

export default App
