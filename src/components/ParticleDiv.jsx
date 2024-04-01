import React, { useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo } from "react";
import "../css/ParticleDiv.css";
// import { loadBasic } from "@tsparticles/basic";

import particlesOptions from "../particles.json";
export default function ParticleDiv() {
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
    <div className="behindParticles merienda d-flex flex-column">
      {init && <Particles id="tsparticles" options={options} />}
      <img className='MainLogo' src={require('../Img/BG Logo.png')} alt="" />
      <h1 className='bgText'>Noureldin</h1>
      <h5 className='kopius'>Web Developer</h5>
    </div>
  )
}
