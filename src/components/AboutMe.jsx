import React from 'react'
import "../css/AboutMe.css";
import pic1 from '../Img/AboutImage3.png';
import Reveal from './Reveal';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export default function AboutMe() {

  return (

    <div id='about' className="container rounded-2 my-3 cont p-5 pt-3">
      <div className="row">
        <div className="col-sm-12">
          <div className="box-shadow-full">
            <h2 className='text-center my-3'>More about me</h2>
            <div className="row">
              <div className="col-md-5">
                <div className="row">
                </div>
                <div className="skill-mf my-2">
                  <p className="title-s lul-title">Skills</p>
                  <ul>
                    <Reveal><li>Programming Languages: JavaScript, C#</li></Reveal>
                    <Reveal><li>Web Technologies: NodeJS, React, Firebase</li></Reveal>
                    <Reveal><li>Databases: mongoDB, MS SQL, Firestore DB</li></Reveal>
                    <Reveal><li>Version Control: Git</li></Reveal>
                    <Reveal><li>Problem Solving and Analytical Skills</li></Reveal>
                    <Reveal><li>Strong Communication and Teamwork Skills</li></Reveal>
                    <Reveal><li>Attention to Detail and Time Management</li></Reveal>
                    <Reveal><li>Languages : Arabic (Native speaker) <br />
                      {/* <div className="progress">
                        <div className="progress-bar customBg" role="progressbar" style={{ width: '100%' }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>100%</div>
                      </div> */}
                      and English (Fluent Speaker)
                      {/* <div className="progress">
                        <div className="progress-bar customBg" role="progressbar" style={{ width: '100%' }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>100%</div>
                      </div> */}
                    </li></Reveal>
                  </ul>
                </div>
              </div>
              <div className="col-md-1" />
              <div className="col-md-6 wow BounceInRight" style={{ visibility: 'visible', animationName: 'bounceInRight' }}>
                <div className="about-me pt-4 pt-md-0">

                  <div className="title-box-2">
                    <h5 className="title-left lul-title">
                      Education
                    </h5>
                  </div>
                  <Reveal>
                    <p className="lead text-left">
                      <span className="makeBold">University: </span>
                      High Institute of Culture and Science [Undergrade], Bachelor of Science in Computer Science, [2024].
                    </p>
                  </Reveal>
                  <div className="title-box-2">
                    <h5 className="title-left lul-title">
                      Courses done:
                    </h5>
                  </div>
                  <Reveal>
                    <p className="lead">
                      Russian Culture Center: Web Development Diploma
                    </p>
                    <p className="lead lol">
                      Route Center: <a className='darkLink text-decoration-none' target="_blank" href="https://drive.google.com/file/d/10Gaw1bTCEkAmWiZolVl1mQXwldf5uKyB/view?usp=sharing">Full-Stack
                        Web Development Diploma</a>
                    </p>
                  </Reveal>
                  <a href="pdfs/My_CV.pdf" target="_blank" download>
                    <button id="cvBtn" className="btn text-light orange w-100">Download CV</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="libGroup" className="w-100 row">

        <div id="libraries " className={` title-box-2 col-md-6`}>
          <TrackVisibility once>
            {({ isVisible }) =>
              <div className={`${isVisible ? "animate__animated animate__fadeInLeft d-static" : "d-none"}`}>

                <h5 className="title-left lul-title pt-2">
                  Frontend Libraries I use
                </h5>
                <ul>
                  <li>Bootstrap</li>
                  <li>jQuery</li>
                  <li>Framer-motion</li>
                  <li>React-Router-Dom</li>
                  <li>React-Pro-Sidebar</li>
                  <li>ParticlesJS</li>
                  <li>Fontawesome</li>
                  <li>React-Firebase-hooks</li>
                  <li>Toastfy &amp; react-toastify</li>
                  <li>Moment.js</li>
                </ul>
              </div>


            }
          </TrackVisibility>
        </div>

        <div id="libraries " className="title-box-2 col-md-6">
          <TrackVisibility once>
            {({ isVisible }) =>
              <div className={`${isVisible ? "animate__animated animate__fadeInRight d-static" : "d-none"}`}>

                <h5 className="title-left lul-title pt-2">
                  Backend Libraries I use
                </h5>
                <ul>
                  <li>Firesore</li>
                  <li>Nodemailer</li>
                  <li>Express</li>
                  <li>Axios</li>
                  <li>Socket.IO</li>
                  <li>Joi</li>
                  <li>jsonwebtoken</li>
                  <li>GraphQL </li>
                  <li>Nodemon </li>
                  <li>Mongoose</li>
                  <li>Sequelize</li>
                  <li>Bcrypt</li>
                </ul>
              </div>

            }
          </TrackVisibility>
        </div>
      </div>
    </div >

  )
}
