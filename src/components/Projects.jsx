import React, { useState } from 'react'
import { motion } from 'framer-motion';
import "../css/Project.css";

export default function Projects() {
    const Data = [{
        title: "Mealify",
        link: "https://noureldin-ahmed-fullstack.github.io/Assignment-5/",
        desc: "Front-End Resturant project"
    }, {
        title: "DevFolio",
        link: "https://noureldin-ahmed-fullstack.github.io/Assignment-6/",
        desc: "Front-End Portfolio project"
    }, {
        title: "Realtime Weather app",
        link: "https://noureldin-ahmed-fullstack.github.io/Assignment-11/",
        desc: "Realtime Weather app Front-End Fully Functional Real-time whether system using wheather api. "
    }, {
        title: "VetRo",
        link: "https://vetro.netlify.app/",
        desc: "Graduation project vetrinary assitant app"
    },]
    const [isVisible, setIsVisible] = useState(Array(Data.length).fill(false));

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
                            <h3 className="title-a lul-title" style={{ marginTop: 50 }}>
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
                    <h2 className="lul-title">My Route Front-End Projects</h2>
                    <p>Assignments given by <a className=" darkLink" target="_blank" href="https://www.facebook.com/Routelearning">Route Center</a> <em className=''>Eng: </em><a className="darkLink" target="_blank" href="https://www.facebook.com/ahmedmu3ti"><strong>Ahmed Mu3ti</strong></a>.</p>
                </div>
                <div className="CappedHeight">

                    <div className="row">
                        {Data.map((item, index) => (
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
                                            {/* <iframe className="w-100 " id="Frame1" src={item.link} title="description" /> */}
                                        </motion.iframe>

                                        <p className="s-description">
                                            {item.desc}  <a target="_blank" style={{ margin: '0 10px' }} className="btn btn-success text-light" href={item.link}>Visit site</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>

    )
}
