import React, { useState, useEffect, useContext } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { MyContext } from './ContextProvider';

function App() {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const { darkMode, setDarkmode } = useContext(MyContext);
    const [visible, setVisible] = useState(true);
    const [isDark, setIsDark] = useState(false);

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
    const toggleDarkmode = () => {
        const bodyElement = document.querySelector("body");
        const dataTheme = bodyElement.getAttribute("data-theme");

        if (dataTheme === "dark") {
            // Do something if data-theme is "dark"
            console.log("Dark theme is active.");
            setLightmodeFunc()
        } else {
            // Do something else if data-theme is not "dark"
            console.log("Dark theme is not active.");
            setDarkmodeFunc()
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        } else {
            scrollToTop()
        }
    };
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setIsDark(currentScrollPos > window.innerHeight);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    return (
        <Navbar expand="lg" className={`${visible ? '' : 'd-none'} ${isDark ? 'bg-dark' : ''} Merienda`} variant={'dark'} fixed="top" style={{ transition: 'all 0.6s' }}>
            <Container>
                <Navbar.Brand href="#" className='d-flex align-items-center'><img src={require("../Img/BG Logo.png")} className='icon me-3' />Noureldin</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <ul className="navbar-nav ms-auto font-1">
                        <li className="nav-item myNavColor mx-2"><a className="nav-link cursor" onClick={() => scrollToSection("top")} >HOME</a></li>
                        <li className="nav-item myNavColor mx-2"><a className="nav-link cursor" onClick={() => scrollToSection("about")} >ABOUT</a></li>
                        <li className="nav-item myNavColor mx-2"><a className="nav-link cursor" onClick={() => scrollToSection("courses")} >COURSES</a></li>
                        <li className="nav-item myNavColor mx-2"><a className="nav-link cursor" onClick={() => scrollToSection("projects")} >PROJECTs</a></li>
                        <li className="nav-item myNavColor mx-2"><a className="nav-link cursor" onClick={() => scrollToSection("ContactMe")} >Contact me</a></li>
                        <li className="nav-item myNavColor "><a title='Github' href='https://github.com/Noureldin-Ahmed-FullStack' target='_blank' className="nav-link cursor" ><i className='fa-brands fa-github'></i></a></li>
                        <li className="nav-item myNavColor "><a title='Linkedin' href='https://www.linkedin.com/in/noureldin-ahmed-7849801a7/' target='_blank' className="nav-link cursor" ><i className='fa-brands fa-linkedin'></i></a></li>
                        <li className="nav-item myNavColor "><a title='Darkmode' className="nav-link cursor" onClick={() => toggleDarkmode()} ><i className={`${darkMode ? 'fa' : 'fa-regular'} fa-moon`}></i></a></li>
                    </ul>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default App;
