import React, { useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { loadSlim } from "tsparticles-slim";
import { TypeAnimation } from 'react-type-animation';
import Reveal from './Reveal';
import { useCallback, useMemo } from "react";
import "../css/ParticleDiv.css";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
// import { loadBasic } from "@tsparticles/basic";

import particlesOptions from "../particles.json";
export default function ParticleDiv() {
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
  const options = useMemo(() => {
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
          value: 300,
          density: {
            enable: true,
            value_area: 800
          }
        },
        links: {
          enable: true,
          distance: 110,
          color: '#fff',
          opacity: 0.5,
          width: 1
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#ff0000'
          },
          polygon: {
            nb_sides: 5
          },
          image: {
            src: '',
            width: 100,
            height: 100
          }
        },
        move: {
          enable: true,
          speed: 2,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 3000,
            rotateY: 3000
          }
        },
        opacity: {
          value: { min: 0.2, max: 0.4 },
          random: true,
          anim: {
            enable: true,
            speed: 2,
            opacity_min: 0,
            sync: false
          }
        },
        size: {
          value: { min: 3, max: 5 },
          random: false,
          anim: {
            enable: false,
            speed: 20,
            size_min: 0,
            sync: false
          }
        },
      },

    };
  }, []);
  const [init, setInit] = useState(false);
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      // scrollToTop()
    }
  };
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
    <div className="behindParticles text-left d-flex flex-column">
      {init && <Particles id="tsparticles" options={options} />}
      <div className='row w-100 justify-content-between'>
        <div className="col-md-7 ps-5 d-flex flex-column justify-content-center">
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
          <div id="container" className=' w-50'>
            <button className="learn-more learnBTN w-100">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow" />
              </span>
              <span className="learnBTN-text">Learn More</span>
            </button>
          </div>

          {/*  */}

        </div>
        <div className="col-md-5 d-flex merienda flex-column justify-content-center align-items-center my-order-md-first">
          <div className='LogoImage'>
            <TrackVisibility once>
              {({ isVisible }) =>
                <div className={`${isVisible ? "animate__animated animate__rollIn d-static" : "d-none"}`}>
                  <img className='MainLogo' src={require('../Img/BG Logo.png')} alt="" />
                </div>}
            </TrackVisibility>
          </div>
          {/* <h1 className='bgText'>Noureldin</h1> */}

        </div>

      </div>

    </div>
  )
}
