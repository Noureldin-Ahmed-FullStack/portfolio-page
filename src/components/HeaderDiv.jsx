import React from 'react'
import Reveal from './Reveal'
import { TypeAnimation } from 'react-type-animation'
import TrackVisibility from 'react-on-screen'

export default function HeaderDiv() {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        } else {
          // scrollToTop()
        }
      };
    return (
        <div className='w-100 HeaderBG text-left bg-danger d-flex flex-column justify-content-center '>
            {/* <img className='w-100 position-absolute top-0 end-0' src="https://ssniper.sirv.com/Images/my%20portfolio/portfolio-bg.jpg" loading='eager' alt="Background Image" draggable={'false'} /> */}
            <div className='row w-100 justify-content-between z-3 '>
                <div className="col-md-8 ps-5 d-flex flex-column justify-content-center">
                    <Reveal>
                        <h1>welcome to my Portfolio</h1>
                    </Reveal>
                    <Reveal>
                        <h2>
                            <TypeAnimation
                                className=' typer'
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    "Hi! I'm Nour",
                                    2000, // wait 1s before replacing "Mice" with "Hamsters"
                                    "Hi! I'm  a Web Developer",
                                    1000,
                                    "Hi! I'm  a M.E.R.N stack engineer",
                                    1000,
                                    "Hi! I'm  a Full stack web Developer",
                                    1000,
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ fontSize: '1.5em', display: 'inline-block' }}
                                repeat={Infinity}
                            />
                        </h2>
                    </Reveal>

                    <p className='aboutParagraph'>
                        Motivated computer science student proficient in JavaScript, MS SQL, HTML, CSS, Bootstrap, and React, eager to apply skills in dynamic team environments for real-world software development experience.
                    </p>

                    {/*  */}
                    <div id="container" className=' '>
                        <button className="learn-more learnBTN w-100 " onClick={() => scrollToSection("ContactMe")}>
                            <span className="circle" aria-hidden="true">
                                <span className="icon arrow" />
                            </span>
                            <span className="learnBTN-text">Contact me</span>
                        </button>
                    </div>

                    {/*  */}

                </div>
                <div className="col-md-4 d-flex merienda flex-column justify-content-center align-items-center my-order-md-first">
                    <div className='LogoImage'>
                        <TrackVisibility once>
                            {({ isVisible }) =>
                                <div className={`${isVisible ? "animate__animated animate__rollIn d-static" : "d-none"}`}>
                                    <img className='MainLogo' src={'../Img/BG Logo.png'} alt="" />
                                </div>}
                        </TrackVisibility>
                    </div>
                    {/* <h1 className='bgText'>Noureldin</h1> */}

                </div>

            </div>
        </div>
    )
}
