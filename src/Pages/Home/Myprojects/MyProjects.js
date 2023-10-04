import React from 'react';
import headphones from '../../../assets/headphones-1.png';
import layer from '../../../assets/layer.jpg';
import websb from '../../../assets/websb.jpg';
import quiz from '../../../assets/quiz text.webp';
import gim from '../../../assets/gimactive.jpg';
import five from '../../../assets/naymar.jpg';
const MyProjects = () => {
    return (
        <div className='px-8 py-10' id='project'>
            <h4 className="">VISIT MY PROJECT AND GIVE YOUR FEEDBACK</h4>
            <h2 className="text-4xl pb-8 font-semibold">My Projects</h2>

            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className="card card-compact  bg-base-100 shadow-xl">
                    <figure><img className='w-[380px] h-[250px]' src={headphones} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h4 className="text-xl">MERN Stack</h4>
                        <h2 className="card-title text-4xl font-semibold">Headphone Relase </h2>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary"><a href="https://headphone-relase.web.app" target="_blank">Live Site</a></button>

                        </div>
                    </div>
                </div>
                <div className="card card-compact  bg-base-100 shadow-xl">
                    <figure><img className='w-[380px] h-[250px]' src={layer} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h4 className="text-xl">MERN Stack</h4>
                        <h2 className="card-title text-4xl font-semibold">Criminal Lawyer </h2>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary"><a href="https://criminal-lawyer-1756d.web.app" target="_blank">Live Site</a></button>

                        </div>
                    </div>
                </div>
                <div className="card card-compact  bg-base-100 shadow-xl">
                    <figure><img className='w-[380px] h-[250px]' src={websb} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h4 className="text-xl">Full Stack</h4>
                        <h2 className="card-title text-4xl font-semibold">Learn With Programming</h2>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary"><a href=" https://shofol-academy-school.web.app/" target="_blank">Live Site</a></button>

                        </div>
                    </div>
                </div>
                <div className="card card-compact  bg-base-100 shadow-xl">
                    <figure><img src={quiz} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h4 className="text-xl">Front End React</h4>
                        <h2 className="card-title text-4xl font-semibold">Learn With Quiz</h2>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary"><a href="https://idyllic-dasik-4d5733.netlify.app/" target="_blank">Live Site</a></button>

                        </div>
                    </div>
                </div>

                <div className="card card-compact  bg-base-100 shadow-xl">
                    <figure><img src={gim} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h4 className="text-xl">Front End React</h4>
                        <h2 className="card-title text-4xl font-semibold">Gim Active Club </h2>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary"><a href="https://ubiquitous-meerkat-9f96a3.netlify.app/" target="_blank">Live Site</a></button>

                        </div>
                    </div>
                </div>
                <div className="card card-compact  bg-base-100 shadow-xl">
                    <figure><img className='w-[380px] h-[250px]' src={five} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h4 className="text-xl">Java Script Dom</h4>
                        <h2 className="card-title text-4xl font-semibold">Select Best Five </h2>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary"><a href="https://magical-meerkat-a19f3b.netlify.app/" target="_blank">Live Site</a></button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;