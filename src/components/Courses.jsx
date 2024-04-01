import React from 'react'

export default function Courses() {
  return (
    <section id="courses">
      <div className="courses">
        <div className="container cont my-5">
          <div className="row container">
            <h3 className="lul-title text-center mt-4">Courses</h3>
            <div className="col-md-6">
              <h4 className="lul-title mt-3">Russian Culture Center:</h4>
              <h5 className="lul-title">Web Developing Diploma</h5>
              <h6 className="lul-title">Course content:</h6>
              <ul>
                <li>Database &amp; SQL</li>
                <li>Programing language Core</li>
                <li>[HTML5, CSS3 , C#]</li>
                <li>Front-End and Back-End Fundamentals</li>
                <li>Bootstrap</li>
              </ul>
              <div className="d-flex justify-content-center">
                <div className="w-75">
                  <div className="row ">
                    <div className="col-lg-6 mb-4">
                      <a className="my-link vbox-item" data-gall="gallery01" target='_blank' href="https://iili.io/Jw2fEqg.png"><img className="w-100 rounded shadow-lg " src="https://iili.io/Jw2fEqg.png" /></a>
                    </div>
                    <div className="col-lg-6">
                      <a className="my-link vbox-item" data-gall="gallery01" target='_blank' href="https://iili.io/Jw2fEqg.png"><img className="w-100 rounded shadow-lg " src="https://iili.io/Jw2fEqg.png" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h4 className="lul-title mt-3">Route center: Full-Stack Diploma</h4>
              <h5 className="lul-title d-flex align-items-center">
                Front-End Part <span className="mySpan" />
              </h5>
              <h6 className="lul-title">Course content:</h6>
              <ul>
                <li>[HTML5, CSS3 , JS]</li>
                <li>Web development Basics</li>
                <li>Advanced Web development Concepts</li>
                <li>jQuery, bootstrap</li>
                <li>React (My specy)</li>
              </ul>
              <div className="d-flex justify-content-center">
                <div className="w-50">
                  <div className="row ">
                    <a className="my-link vbox-item" data-gall="gallery02" target='_blank' href="https://iili.io/Jw2fEqg.png"><img className="w-100 my-3 rounded shadow-lg " src="https://iili.io/Jw2fEqg.png" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <h3 className="lul-title text-center">Back-End Part</h3>
              <div className="row">
                <div className="d-flex justify-content-center">
                  <div className="dd">
                    <div className="text-center">
                      <h4>Node.JS:</h4>
                      <h6>Node + SQL (mySql)</h6>
                      <h6>Node + MongoDB</h6>
                      <h6>GraphQL</h6>
                      <h6>Docker</h6>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
