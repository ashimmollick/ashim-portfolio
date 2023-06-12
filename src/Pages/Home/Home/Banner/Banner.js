import React from 'react';
import banner from '../../../../assets/ashim.png';

const Banner = () => {
    return (

        <div>
            <div className="hero min-h-screen bg-base-200 px-8 " id='home'>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={banner} data-aos="fade-up-left" className="rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h2 className="text-3xl font-bold">Hi, I'm Ashim Mollick</h2>
                        <h1 className="text-5xl font-bold py-3">Front-end Web Developer</h1>
                        <p className='py-3'>Expert In React,JavaScript, Node.js, MongoDB,Tailwin, HTML, CSS,  etc. I completed many Projects using HTML, CSS, JavaScript, React, Node.js, and MongoDB</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;