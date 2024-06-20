import React from 'react'
import { Container } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CircularProgressBar from './CircularProgressBar';
export default function Skills() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className='container p-0 mt-3'>
            <div className='cont p-3 rounded-2 text-center'>
                <h2>Skills</h2>
                <div className="d-flex justify-content-center">

                <p className='w-75 greyParagraph text-justify'>Proficient in MERN stack, particularly skilled in ReactJS and NodeJS. Strong team player, adept at collaborative development within dynamic environments.</p>
                </div>
                <Carousel
                    className='grab'
                    swipeable={true}
                    draggable={true}
                    showDots={false}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    keyBoardControl={true}
                    customTransition="all 2s"
                    transitionDuration={2000}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    // deviceType={this.props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px">
                    <div className='item'>
                        <CircularProgressBar className='' radius={50} progress={95} />
                        <h5>ReactJS</h5>
                    </div>
                    <div className='item'>
                        <CircularProgressBar className='' radius={50} progress={90} />
                        <h5>NodeJS</h5>
                    </div>
                    <div className='item'>
                        <CircularProgressBar className='' radius={50} progress={95} />
                        <h5>Express</h5>
                    </div>
                    <div className='item'>
                        <CircularProgressBar className='' radius={50} progress={90} />
                        <h5>Vite</h5>
                    </div>
                    <div className='item'>
                        <CircularProgressBar className='' radius={50} progress={85} />
                        <h5>Firebase</h5>
                    </div>
                    <div className='item'>
                        <CircularProgressBar className='' radius={50} progress={90} />
                        <h5>Mongo</h5>
                    </div>
                    <div className='item'>
                        <CircularProgressBar className='' radius={50} progress={80} />
                        <h5>SQL</h5>
                    </div>
                </Carousel>

            </div>

        </section>
    )
}
