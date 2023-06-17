import React from 'react';
import Banner from './Banner/Banner';
import { ContactMe } from './ContactMe/Contact';
import ProjectsSummary from './Projects/ProjectsSummary';
import Skills from './Skills/Skills';
import About from './About/About';
import Experience from './Experience/Experience';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <hr className='border border-white dark:border-gray-600' />
            <About></About>
            <hr className='border border-white dark:border-gray-600' />
            <Experience></Experience>
            <hr className='border border-white dark:border-gray-600' />
            <Skills></Skills>
            <hr className='border border-white dark:border-gray-600' />
            <ProjectsSummary></ProjectsSummary>
            <hr className='border border-white dark:border-gray-600' />
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;