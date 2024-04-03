import React from 'react'

export default function Courses() {
  return (
    <section id="courses">
      <div className="courses">
        <div className="container cont my-5">
          <div className="row container">
            <h3 className="lul-title text-center mt-4">Courses</h3>
            <h4 className="lul-title mb-3 text-center">Route center: Full-Stack Diploma</h4>
            <div className="col-md-4 my-text-md-center pb-3">
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

            </div>
            <div className="col-md-4 pb-3">
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

            </div>
            <div className="col-md-4">
              <div className="d-flex justify-content-center">
                <div className="w-100">
                  <div className="row ">
                    <a className="my-link vbox-item" data-gall="gallery02" target='_blank' href="https://iili.io/Jw2fEqg.png"><img className="w-100 rounded shadow-lg " src="https://iili.io/Jw2fEqg.png" /></a>
                  </div>
                </div>
              </div>

            </div>

            <div className="col-md-12">
              <h4 className="lul-title mt-3 text-center">Russian Culture Center: Web Developing Diploma</h4>
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


            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
