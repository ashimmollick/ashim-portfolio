import React from 'react';
import resume from '../../../../assets/Ashim KM Resume.pdf';
const About = () => {
    return (
        <div className='py-10 px-8'>

            <div className='text-center py-4'>
                <h4 className="">My introduction</h4>
                <h2 className="text-4xl font-semibold">About Me</h2>
            </div>

            <div className="hero" id='about'>


                <div className="hero-content flex-col lg:flex-row">
                <img src="https://placeimg.com/260/400/arch " className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                    <h1 className="text-5xl font-bold">Full Stack Web Developer</h1>
                    <p className="py-6">I am a self-motivated Full Stack Developer with knowledge in React.js, Node.js, Express.js, Google Authentication, MongoDB, JavaScript, HTML, CSS, Bootstrap, Tailwind and mobile responsive web development.</p>
                        <button className="btn btn-outline btn-secondary"><a href={resume} download="resume">Resume</a></button>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default About;