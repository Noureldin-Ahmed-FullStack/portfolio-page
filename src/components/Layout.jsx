import React, { useContext, useEffect } from 'react'
import ParticleDiv from './ParticleDiv'
import AboutMe from './AboutMe'
import Navbar from './Navbar'
import Courses from './Courses'
import Projects from './Projects'
import ExtraButtons from './ExtraButtons'
import { MyContext } from './ContextProvider.jsx'
import Skills from './Skills'
import ContactMe from './ContactMe'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import HeaderDiv from './HeaderDiv.jsx'

export default function Layout() {
  const { darkMode, setDarkmode } = useContext(MyContext);
  const setDarkmodeFunc = () => {
    setDarkmode(false);
    document.querySelector("body").setAttribute('data-theme', 'dark')
    const theme = localStorage.setItem('theme', "dark")
  }
  const setLightmodeFunc = () => {
    setDarkmode(true);
    document.querySelector("body").setAttribute('data-theme', 'light')
    const theme = localStorage.setItem('theme', "light")
  }
  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme == "light") {
      setLightmodeFunc()
    } else {
      setDarkmodeFunc()
    }
  }, [])

  return (
    <div className='flex-grow-1 w-100'>
      <Navbar />
      <ExtraButtons />
      <ToastContainer />
      {/* <ParticleDiv /> */}
      <HeaderDiv />
      <div className="container">
        <Skills />
        <AboutMe />
        <Courses />
        <Projects />
        <ContactMe />
      </div>

    </div>
  )
}
