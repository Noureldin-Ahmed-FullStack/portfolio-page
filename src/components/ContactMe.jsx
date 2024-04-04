import React, { useEffect, useState, useMemo } from 'react'
import '../css/ContactMe.css';
import contactImg from '../Img/contact-img.svg';
import { Col, Row } from 'react-bootstrap';

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";


export default function ContactMe() {
    const stars = useMemo(() => {
        // using an empty options object will load the default options, which are static particles with no background and 3px radius, opacity 100%, white color
        // all options can be found here: https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html
        return {

            fullScreen: {
                enable: false, // enabling this will make the canvas fill the entire screen, it's enabled by default
                zIndex: 0, // this is the z-index value used when the fullScreen is enabled, it's 0 by default
            },
            interactivity: {
                events: {
                    onClick: {
                        enable: true, // enables the click event
                        mode: "push", // adds the particles on click
                    },
                    resize: true,
                    onHover: {
                        enable: true, // enables the hover event
                        mode: "repulse", // make the particles run away from the cursor
                    },
                },
                modes: {
                    push: {
                        quantity: 1, // number of particles to add on click
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                },
            },
            particles: {
                number: {
                    value: 355,
                    density: {
                        enable: true,
                        value_area: 789.1476416322727
                    }
                },
                color: {
                    value: "#ffffff"
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000"
                    },
                    polygon: {
                        nb_sides: 5
                    },
                    image: {
                        src: "img/github.svg",
                        width: 100,
                        height: 100
                    }
                },
                opacity: {
                    value: 0.48927153781200905,
                    random: false,
                    anim: {
                        enable: true,
                        speed: 0.2,
                        opacity_min: 0,
                        sync: false
                    }
                },
                size: {
                    value: 2,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0,
                        sync: false
                    }
                },
                line_linked: {
                    enable: false,
                    distance: 150,
                    color: "#ffffff",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 0.2,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "bubble"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 83.91608391608392,
                        size: 1,
                        duration: 3,
                        opacity: 1,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        }

    }, []);
    const [init, setInit] = useState(false);

    useEffect(() => {
        if (init) {
            return;
        }

        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);
    return (

        <section id="ContactMe">
            <div className="courses ">
                <div className="container contactCont my-5">
                    {init && <Particles id="contactparticles" options={stars} />}
                    <div className="row justify-content-center highIndex py-3">
                        <Row className='w-100'>
                            <Col md={6} className='disappear-sm'>
                                <img src={contactImg} className='w-100' />
                            </Col>
                            <Col md={6} className='d-flex flex-column'>
                                <h2 className='mb-3'>Get in touch</h2>
                                <div className="w-100 flex-grow-1 contact">
                                    <form className='w-100 h-100  d-flex flex-column'>
                                        <Row className=' g-2'>
                                            <Col className=''>
                                                <input className='' placeholder='First Name' type="text" name="" id="" />
                                            </Col>
                                            <Col className=''>
                                                <input className='' placeholder='Last Name' type="text" name="" id="" />
                                            </Col>
                                        </Row>
                                        <Row className=' g-2'>
                                            <Col className=''>
                                                <input className='' placeholder='Email Address' type="text" name="" id="" />
                                            </Col>
                                            <Col className=''>
                                                <input className='' placeholder='Phone No.' type="text" name="" id="" />
                                            </Col>
                                        </Row>
                                        <Row className='my-2 flex-grow-1'>
                                            <Col className='d-flex flex-column'>
                                                <textarea className=' flex-grow-1' placeholder='Message' type="text" name="" id="" />
                                            </Col>
                                        </Row>
                                        <button className='m-0 rounded-3 border-0'><span>Send</span></button>
                                    </form>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </section>
    )
}
