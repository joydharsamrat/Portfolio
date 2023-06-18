import React from 'react';
import Banner from './Banner/Banner';
import { ContactMe } from './ContactMe/Contact';
import ProjectsSummary from './Projects/ProjectsSummary';
import Skills from './Skills/Skills';
import About from './About/About';
import Experience from './Experience/Experience';

const Home = () => {
    return (
        <div className='home'>
            <svg className='fixed stroke stroke-gray-700 -z-50' viewBox="0 0 786 753" fill="none">
                <path d="M597.5 355.5C597.5 474.757 492.773 571.5 363.5 571.5C234.227 571.5 129.5 474.757 129.5 355.5C129.5 236.243 234.227 139.5 363.5 139.5C492.773 139.5 597.5 236.243 597.5 355.5Z" />
                <path d="M58.3481 63L386.348 381L714.348 699" />
                <line x1="0.348039" y1="116.641" x2="656.348" y2="752.641" />
                <line x1="129.348" y1="0.641017" x2="785.348" y2="636.641" />
            </svg>


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