import React from 'react';
import MyProjects from '../Myprojects/MyProjects';
import About from './About/About';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import MySkill from './MySkill/MySkill';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <MyProjects></MyProjects>
            <MySkill></MySkill>
            <Contact></Contact>
        </div>
    );
};

export default Home;