import React, { useState } from 'react'
import { motion } from 'framer-motion';
import "../css/Project.css";
import { Nav, Row, Tab } from 'react-bootstrap';
import ProjectCard from './ProjectCard';

export default function Projects() {
    const FrontEnd = [{
        title: "VetRo",
        imageUrl: "https://ssniper.sirv.com/Images/portfolio%20pictures/vetro.png",
        link: "https://vetro.netlify.app/",
        describtion: "(Work in progress) veterinary assistant Graduation project"
    }, {
        title: "Mealify",
        imageUrl: "https://ssniper.sirv.com/Images/portfolio%20pictures/4.png",
        link: "https://noureldin-ahmed-fullstack.github.io/Assignment-5/",
        describtion: "Front-End Resturant project"
    }, {
        title: "Ecommarce",
        imageUrl: "https://ssniper.sirv.com/Images/portfolio%20pictures/2.png",
        link: "https://ecommarce-nour.netlify.app/",
        describtion: "React Ecommarce project with NodeJS api"
    }, {
        title: "DevFolio",
        imageUrl: "https://ssniper.sirv.com/Images/portfolio%20pictures/5.png",
        link: "https://noureldin-ahmed-fullstack.github.io/Assignment-6/",
        describtion: "Front-End Portfolio project"
    }, {
        title: "Fokir",
        imageUrl: "https://ssniper.sirv.com/Images/portfolio%20pictures/7.png",
        link: "https://noureldin-ahmed-fullstack.github.io/Assignment-4/",
        describtion: "Front-End Portfolio project"
    }, {
        //     title: "Realtime Weather app",
        //     imageUrl:"https://ssniper.sirv.com/Images/portfolio%20pictures/6.png",
        //     link: "https://noureldin-ahmed-fullstack.github.io/Assignment-11/",
        //     describtion: "Realtime Weather app Front-End Fully Functional Real-time whether system using wheather api. "
        // }, {
        title: "Yummy",
        imageUrl: "https://ssniper.sirv.com/Images/portfolio%20pictures/3.png",
        link: "https://noureldin-ahmed-fullstack.github.io/Yummy/",
        describtion: "Front end Recipe assistant"
    },]
    const BackEnd = [{
        title: "Ecommarce NodeJS server",
        imageUrl: "https://ssniper.sirv.com/Images/portfolio%20pictures/b1.webp",
        link: "https://github.com/Noureldin-Ahmed-FullStack/Wuzzuf-app",
        describtion: "My first NodeJS app; made this for learning purposes"
    }, {
        title: "Wuzzuf NodeJS",
        imageUrl: "https://ssniper.sirv.com/Images/portfolio%20pictures/wuzzuf.jpg",
        link: "https://github.com/Noureldin-Ahmed-FullStack/Ecommerce-server",
        describtion: "just a wuzzuf clone NodeJS app I was working on for learning Node & ExpressJS"
    }]
    const [isVisible, setIsVisible] = useState(Array(FrontEnd.length).fill(false));

    const toggleVisibility = (index) => {
        setIsVisible(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    return (

        <section id="projects" className="mb-3  route">
            <div className="container cont">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="title-box text-center">
                            <h3 className="title-a lul-title mt-4 mb-3" >
                                Projects
                            </h3>

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div>
                            <div className="container">
                                <div className="service-content">

                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant='pills' className='mb-4' defaultActiveKey="/home">

                        <Nav.Item>
                            <Nav.Link eventKey={"first"}>Frontend</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey={"second"}>Backend</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey={"third"}>Asp.NET</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <h2 className="lul-title mb-3">My Front-End Projects</h2>
                            {/* <p>Assignments given by <a className=" darkLink" target="_blank" href="https://www.facebook.com/Routelearning">Route Center</a> <em className=''>Eng: </em><a className="darkLink" target="_blank" href="https://www.facebook.com/ahmedmu3ti"><strong>Ahmed Mu3ti</strong></a>.</p> */}
                            <Row className='gy-3 pb-2'>
                                {FrontEnd.map((item, index) => (

                                    <ProjectCard
                                        key={index}
                                        {...FrontEnd[index]}
                                    />
                                ))}
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <h2 className="lul-title mb-3">My Back-End Projects</h2>
                            {/* <p>Assignments given by <a className=" darkLink" target="_blank" href="https://www.facebook.com/Routelearning">Route Center</a> <em className=''>Eng: </em><a className="darkLink" target="_blank" href="https://www.facebook.com/ahmedmu3ti"><strong>Ahmed Mu3ti</strong></a>.</p> */}
                            <Row className='gy-3 pb-2'>
                                {BackEnd.map((item, index) => (
                                    <ProjectCard
                                        key={index}
                                        {...BackEnd[index]}
                                    />
                                ))}
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                            <Row>
                                <div>
                                    <div className="col-md-12">
                                        <div >
                                            <div className="container">

                                            </div>
                                            <div className="service-content">
                                                <h2 className="lul-title">KarimStore</h2>
                                                <p>
                                                    My personal CRUD app
                                                    <a target="_blank" title='KarimStore' href="https://github.com/SSniperghosTT/KarimStore"><i className="fa-brands fa-github myIco" /></a>
                                                </p>
                                                <p>I created my First CRUD app using Asp.net with MVC 5, the goal was to
                                                    make an online shopping website for a small super market. the GitHub link can only show you the code;
                                                    If
                                                    you would like to view the
                                                    application; I have a video showcasing the app.
                                                </p>
                                                <div className=" mb-3">
                                                    {/* <img className='w-100 rounded-3' src="src/assets/YT.png" alt="" /> */}
                                                    <ProjectCard
                                                        title="ASP.NET APP" link="https://youtu.be/sLnUgg14i-A?si=inn4GgCKqKTJhr3z" describtion="Watch on Youtube!" imageUrl="https://ssniper.sirv.com/Images/portfolio%20pictures/YT.png" tooltip={"Watch on Youtube!"}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </Row>
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>





                {/* <div className="CappedHeight">

                    <div className="row">
                        {FrontEnd.map((item, index) => (
                            <div className="col-lg-6" key={index}>
                                <div className="service-box wow bounceInLeft">
                                    <div className="service-content flex-column">
                                        <div className='d-flex justify-content-center align-items-center mb-3'>

                                            <a className='frameTitle lul-title' target="_blank" href={item.link}>{item.title}</a>
                                            <button onClick={() => toggleVisibility(index)} className="btn btn-outline-light myShow"><i className="fa-solid fa-arrow-down-wide-short" style={{ fontSize: 25 }} /></button>
                                        </div>
                                        <motion.iframe
                                            className='w-100'
                                            src={item.link}
                                            initial={{ height: 0 }}
                                            animate={{ height: isVisible[index] ? 600 : 0 }}
                                            transition={{ duration: 0.3 }} // Duration of the animation (in seconds)
                                        >
                                        </motion.iframe>

                                        <p className="s-description">
                                            {item.desc}  <a target="_blank" style={{ margin: '0 10px' }} className="btn btn-success text-light" href={item.link}>Visit site</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div> */}
            </div>
        </section>

    )
}
