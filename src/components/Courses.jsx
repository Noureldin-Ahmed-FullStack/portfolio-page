import React, { useState } from 'react'
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Zoom from '@mui/material/Zoom';
import { Tooltip } from '@mui/material';

import ImageModal from './ImageModal';
import '../css/ModalStyles.css';
import { AnimatePresence, motion } from 'framer-motion';
import Modal from './Modal Stuff/Modal';
import IconnedButton from './IconnedButton';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
export default function Courses() {
  const [modalOpen, setModalOpen] = useState(false);

  const [LightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleOpenLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };
  const Images = ["https://ssniper.sirv.com/Images/CV/1.png", "https://ssniper.sirv.com/Images/CV/2.png", "https://ssniper.sirv.com/Images/CV/1.jpg"]
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  return (
    <section id="courses">
      {LightboxOpen && (
        <Lightbox
          open={LightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={Images.map((url) => ({ src: url }))}
          index={currentIndex}
          on={{ click: ({ index }) => setCurrentIndex(index) }}
        />
      )}
      <div className="courses">
        <div className="container d-flex justify-content-center cont my-5">
          <div className="row container">
            <div>
              {/* <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="save-button"
                onClick={() => (modalOpen ? close() : open())}
              >
                Launch modal
              </motion.button> */}
              {/* <AnimatePresence
                // Disable any initial animations on children that
                // are present when the component is first rendered
                initial={false}
                // Only render one component at a time.
                // The exiting component will finish its exit
                // animation before entering component is rendered
                mode='wait'
                // Fires when all exiting nodes have completed animating out
                onExitComplete={() => null}
              >
                {modalOpen && <Modal modalOpen={modalOpen} animation={"dropIn"} handleClose={close} >
                  <h1>Hi, very cool!</h1>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae ullam blanditiis voluptas perspiciatis. Quaerat sed non aspernatur inventore, rerum quis tempore similique do</p>
                  <input type="text" className='form-control' placeholder='your personal data please 😇'/>
                </Modal>}
              </AnimatePresence> */}
              {/* <IconnedButton /> */}
            </div>
            <h3 className="lul-title text-center mt-4">Courses</h3>
            <h4 className="lul-title mb-3 text-center">Route center: Full-Stack Diploma</h4>
            <div className="col-md-4 my-text-md-center pb-3">
              <TrackVisibility once>
                {({ isVisible }) =>
                  <div className={`${isVisible ? "animate__animated animate__fadeInLeft d-static" : "d-none"}`}>
                    <h5 className="lul-title ">
                      Front-End Part
                    </h5>
                    <div className="mt-3">
                      <h6>[HTML5, CSS3 , JS]</h6>
                      <h6>Web development Basics</h6>
                      <h6>Advanced Web development Concepts</h6>
                      <h6>jQuery, bootstrap</h6>
                      <h6>React (My speciality)</h6>
                    </div>
                  </div>}
              </TrackVisibility>

            </div>
            <div className="col-md-4 pb-3">
              <TrackVisibility once>
                {({ isVisible }) =>
                  <div className={`${isVisible ? "animate__animated animate__fadeInUp d-static" : "d-none"}`}>
                    <h5 className="lul-title text-center">Back-End Part</h5>
                    <div className="mt-3">
                      <div className="text-center">
                        <h4>Node.JS:</h4>
                        <h6>Node + SQL (mySql)</h6>
                        <h6>Node + MongoDB</h6>
                        <h6>GraphQL</h6>
                        <h6>Docker</h6>
                      </div>
                    </div>
                  </div>}
              </TrackVisibility>

            </div>
            <div className="col-md-4">
              <TrackVisibility once>
                {({ isVisible }) =>
                  <div className={`${isVisible ? "animate__animated animate__fadeInRight d-static" : "d-none"}`}>
                    <div className="d-flex justify-content-center">
                      <Tooltip followCursor TransitionComponent={Zoom} title="Click for full view">
                        <img onClick={() => handleOpenLightbox(0)} className="w-100 rounded shadow-lg cursor" src="https://ssniper.sirv.com/Images/CV/1.png" />
                      </Tooltip>
                      {/* <ImageModal
                        imageUrl="https://ssniper.sirv.com/Images/CV/1.png"
                        thumbnailUrl="https://ssniper.sirv.com/Images/CV/1.png"
                        alt="certificate"
                      /> */}
                    </div>
                  </div>}
              </TrackVisibility>
            </div>

            <h4 className="lul-title mt-3 text-center">Russian Culture Center: Web Developing Diploma</h4>
            <div className="col-md-8">
              <TrackVisibility once>
                {({ isVisible }) =>
                  <div className={`${isVisible ? "animate__animated animate__fadeInLeft d-static" : "d-none"}`}>
                    <h6 className="lul-title">Course content:</h6>
                    <ul>
                      <li>[HTML5, CSS3 , C#]</li>
                      <li>Database &amp; SQL</li>
                      <li>Front-End and Back-End Fundamentals</li>
                      <li>Bootstrap</li>
                      <li>Programing language Core</li>
                      <li>entity framework</li>
                      <li>Asp.NET Core</li>
                    </ul>
                  </div>}
              </TrackVisibility>

            </div>
            <div className="col-md-4">
              <TrackVisibility once>
                {({ isVisible }) =>
                  <div className={`${isVisible ? "animate__animated animate__fadeInLeft d-static" : "d-none"}`}>
                    <a className="my-link vbox-item" data-gall="gallery02" target='_blank' href="https://ssniper.sirv.com/Images/CV/2.png">
                      <Tooltip followCursor TransitionComponent={Zoom} title="Click for full view">
                        <div className=' RCC_certificate'>
                          <img onClick={() => handleOpenLightbox(1)} className="w-100 rounded shadow-lg cursor" src="https://ssniper.sirv.com/Images/CV/2.png" />
                        </div>
                      </Tooltip>
                    </a>
                  </div>}
              </TrackVisibility>

            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
