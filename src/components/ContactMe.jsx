import React, { useEffect, useState, useMemo } from 'react'
import '../css/ContactMe.css';
import contactImg from '../Img/contact-img.svg';
import { Col, Row } from 'react-bootstrap';
import * as Yup from 'yup';

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import axios from 'axios';
import { toast } from 'react-toastify';


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
    const [formErrors, setFormErrors] = useState(null);
    const [isSending, setIsSending] = useState(false);

    const SchemaValidation = Yup.object().shape({
        name: Yup.string().min(2, "Name must be at least 2 characters").max(20, "Name must cant be more than 20 characters").required("Name is required"),
        email: Yup.string().email("Invalid email address").required("Email is required"),
        phone: Yup.string().required("Phone is required").matches(/^[\+]?[(]?[0-9]{2,4}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,8}$/, "phone not valid"),
    });

    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log(e.target[0].value);
        const body = {
            'name': e.target[0].value + " " + e.target[1].value,
            'email': e.target[2].value,
            'phone': e.target[3].value,
            'message': e.target[4].value,
            'reciver': "noureldin2662002@gmail.com"
        };
        setIsSending(true)
        const user = await SchemaValidation.validate(body, { strict: true }).catch((err) => {
            console.log(err.message);
            setFormErrors(err.message)
            setIsSending(false)
        })
        if (user) {
            let res = await axios.post(`https://ecommerce-server-tll5.onrender.com/ContactMe`, body).catch((err) => {
                console.log(err);
                setFormErrors(err)
                toast.error(err, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setIsSending(false)

            })
            if (res) {
                console.log(res);
                setFormErrors(null)
                toast.success(`sent`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setIsSending(false)
                e.target[0].value = null
                e.target[1].value = null
                e.target[2].value = null
                e.target[3].value = null
                e.target[4].value = null

            }
        }else{
            
            setIsSending(false)
        }


    }

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
                                {formErrors && <div className='d-flex align-items-end mb-2 p-1 bg-danger-subtle text-danger-emphasis border-1 rounded-1'><h5 className='m-0 pe-1'>{formErrors}</h5> <h6 className='m-0 '>something wrong?</h6></div>}

                                <div className="w-100 flex-grow-1 contact">
                                    <form onSubmit={handleSubmit} className='w-100 h-100  d-flex flex-column'>
                                        <Row className=' g-2'>
                                            <Col className=''>
                                                <input required={false} className='' placeholder='First Name' type="text" name="Firstname" id="Firstname" />
                                            </Col>
                                            <Col className=''>
                                                <input required={false} className='' placeholder='Last Name' type="text" name="LastName" id="LastName" />
                                            </Col>
                                        </Row>
                                        <Row className=' g-2'>
                                            <Col className=''>
                                                <input required={false} className='' placeholder='Email Address' type="email" name="mail" id="mail" />
                                            </Col>
                                            <Col className=''>
                                                <input required={false} className='' placeholder='Phone No.' type="tel" name="" id="" />
                                            </Col>
                                        </Row>
                                        <Row className='my-2 flex-grow-1'>
                                            <Col className='d-flex flex-column'>
                                                <textarea required={true} className=' flex-grow-1' placeholder='Message' type="text" name="" id="" />
                                            </Col>
                                        </Row>
                                        <button className='m-0 rounded-3 border-0'><span><i className='fa fa-paper-plane pe-2'></i>{(isSending && "Sending...") || "Send"}</span></button>
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
