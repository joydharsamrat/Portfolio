import React from 'react';
import '../About/about.css'

const About = () => {
    return (
        <div className='aboutContainer px-2 lg:px-10' id='about'>
            <div data-aos="fade-up" className='text-white dark:text-white mb-12 py-5' >
                <h1 className='mt-12 mb-12 text-3xl lg:text-5xl font-bold '>About Me</h1>
                <div className='text-justify '>
                    <p>
                        I am Samrat Joydhar, a dedicated web developer based in Khulna, Bangladesh. With a strong passion for web development and a thirst for knowledge, I am constantly seeking new opportunities to expand my skills and stay updated with industry trends. As a quick learner, I am able to adapt to new technologies and embrace innovative solutions.
                    </p>
                    <p>
                        Throughout my journey as a web developer, I have gained proficiency in various front-end technologies, including HTML, CSS, JavaScript, React.js, Bootstrap, Tailwind CSS, Next.js, Redux, and Framer Motion. On the back-end, I am experienced in working with Express.js and MongoDB. Additionally, I am proficient in utilizing tools such as Git, VS Code, Firebase, Netlify, and NPM to streamline development processes.
                    </p>
                    <p>
                        I have completed the Complete Web Development Course from Programming Hero, earning a certificate in the process. I have worked on several full-stack and front-end projects throughout the course.
                    </p>
                    <p>
                        During my internship at Insitu Agritech I independently developed a website for the company using Next.js, Express.js, and MongoDB. I successfully resolved issues and optimized website functionality to ensure optimal performance.
                    </p>

                    <p>
                        I am fluent in Bangla as my native language, and I am comfortable communicating in both English and Hindi.
                    </p>

                    <p>
                        I am enthusiastic about collaborating with like-minded professionals and contributing to challenging projects that push the boundaries of web development. If you are seeking a passionate and adaptable web developer, I would be delighted to connect with you. Please feel free to reach out to me via phone or email, or explore my portfolio, GitHub, or LinkedIn profiles for more information on my work.
                    </p>

                    <p>
                        Thank you for considering my profile, and I look forward to the possibility of working together.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;