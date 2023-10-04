import React from 'react';
import react from '../../../../assets/react.a85d127d.png';
import node from '../../../../assets/node.png';
import mongo from '../../../../assets/mongodb.png';
import html from '../../../../assets/html5.png';
import css from '../../../../assets/css3.png';
import bootstrap from '../../../../assets/bootstrap.png';
import tailwin from '../../../../assets/tailwin.png';
import javascrip from '../../../../assets/javascrip.png';



const MySkill = () => {
    return (
        <section className='px-8 py-10' id='myskill'>
            <h4 className="">THE SKILLS I HAVE GAINED AS A DEVELOPER</h4>
            <h2 className="text-4xl pb-8 font-semibold">My Skill</h2>
            <div className='grid lg:grid-cols-2   '>
                <div className=' grid lg:grid-cols-2 gap-2'>
                    <div className='flex border p-5 my-2'>
                        <img className='w-10 pr-2 ' src={javascrip} alt="" />
                        <h4 className="text-3xl font-semibold">Javascript</h4>
                    </div>
                    <div className='flex border p-5 my-2'>
                        <img className='w-10 pr-2 ' src={react} alt="" />
                        <h4 className="text-3xl font-semibold">React.js</h4>
                    </div>
                    <div className='flex border p-5 my-2'>
                        <img className='w-10 pr-2 ' src={node} alt="" />
                        <h4 className="text-3xl font-semibold">Node.js</h4>
                    </div>
                    <div className='flex border p-5 my-2'>
                        <img className='w-10 pr-2 ' src={mongo} alt="" />
                        <h4 className="text-3xl font-semibold">MongoDB</h4>
                    </div>


                    <div className='flex border p-5 my-2'>
                        <img className='w-10 pr-2 ' src={html} alt="" />
                        <h4 className="text-3xl font-semibold">HTML5</h4>
                    </div>
                    <div className='flex border p-5 my-2'>
                        <img className='w-10 pr-2 ' src={css} alt="" />
                        <h4 className="text-3xl font-semibold">Vanilla CSS</h4>
                    </div>
                    <div className='flex border p-5 my-2'>
                        <img className='w-10 pr-2 ' src={bootstrap} alt="" />
                        <h4 className="text-3xl font-semibold">Bootstrap</h4>
                    </div>
                    <div className='flex border p-5 my-2'>
                        <img className='w-10 pr-2 ' src={tailwin} alt="" />
                        <h4 className="text-3xl font-semibold">Tailwin</h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MySkill;