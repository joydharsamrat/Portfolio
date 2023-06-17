import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion'
import Progress from '../../../components/progress';


const Skills = () => {
    const ref = useRef(null)
    const isInView = useInView(ref)
    return (
        <div ref={ref} data-aos="fade-up" className='dark:text-gray-100 mb-10' id='skills'>
            <h1 className='mt-12 mb-5 text-3xl lg:text-5xl font-bold'>Skills I Have</h1>

            <div className='my-20 grid md:grid-cols-2 lg:grid-cols-3 gap-20 '>

                <div className='flex flex-col items-center justify-center gap-5'>
                    <motion.div initial={{ scale: .1 }} animate={isInView ? { rotateX: 360, scale: 1 } : 'none'} transition={{ delay: .5, duration: 1 }} className="radial-progress bg-white dark:bg-gray-600 p-5 dark:text-gray-300" style={{ "--value": 60 }}>
                        <motion.p whileHover={{ scale: 1.3 }} className='p-3 h-16 w-16   rounded-full flex items-center justify-center '>
                            <img className='rounded-full' src="https://i.ibb.co/yn9t0Mx/js.png" alt="" />
                        </motion.p>
                    </motion.div>
                    <div>
                        <p>60%</p>
                        <h1 className='text-3xl font-bold'>JAVASCRIPT</h1>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center gap-5'>
                    <motion.div initial={{ scale: .1 }} animate={isInView ? { rotateX: 360, scale: 1 } : 'none'} transition={{ delay: .8, duration: 1 }} className="radial-progress bg-white dark:bg-gray-600 p-5 dark:text-gray-300" style={{ "--value": 70 }}>
                        <motion.p whileHover={{ scale: 1.3 }} className='p-3  h-16 w-16  rounded-full flex items-center justify-center'>
                            <img src="https://i.ibb.co/V2VLD4Y/react.png" alt="" />
                        </motion.p>
                    </motion.div>
                    <div>
                        <p>70%</p>
                        <h1 className='text-3xl font-bold'>REACT</h1>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center gap-5'>
                    <motion.div initial={{ scale: .1 }} animate={isInView ? { rotateX: 360, scale: 1 } : 'none'} transition={{ delay: 1, duration: 1 }} className="radial-progress bg-white dark:bg-gray-600 p-5 dark:text-gray-300" style={{ "--value": 55 }}>
                        <motion.p whileHover={{ scale: 1.3 }} className='p-3  h-16 w-16  rounded-full flex items-center justify-center '>
                            <img src="https://i.ibb.co/PgBcrJX/express.webp" alt="" />
                        </motion.p>
                    </motion.div>
                    <div>
                        <p>55%</p>
                        <h1 className='text-3xl font-bold'>EXPRESS JS</h1>
                    </div>
                </div>


            </div>

            <div className='grid md:grid-cols-2 gap-2'>
                <div>
                    <Progress targetValue={90} isInView={isInView} title={'HTML5'}></Progress>                </div>
                <div>
                    <Progress targetValue={75} isInView={isInView} title={'CSS3'}></Progress>                </div>

                <div>
                    <Progress targetValue={65} isInView={isInView} title={'NEXT.JS'}></Progress>                </div>
                <div>
                    <Progress targetValue={45} isInView={isInView} title={'MONGODB'}></Progress>
                </div>
                <div>
                    <Progress targetValue={75} isInView={isInView} title={'REDUX'}></Progress>
                </div>

            </div>


        </div>
    );
};

export default Skills;