import React from 'react';

const Contact = () => {
    return (
        <div className="hero py-8 bg-base-200">
            <div className="hero-content  w-3/4 ">

                <div className="card flex-shrink-0   w-full shadow-2xl bg-base-100">
                    <div className="card-body px-36">
                        <h2 className="text-4xl text-center pb-4 font-semibold">Contact me</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea className="textarea textarea-bordered" placeholder="Write Message"></textarea>

                        </div>
                        <div className=" mt-6">
                            <button className="btn btn-primary">Submit </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;