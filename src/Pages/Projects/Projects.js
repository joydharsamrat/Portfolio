import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
    return (
        <div>
            <motion.div
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.6 }}
            >
                <motion.div
                    className="front"
                    initial={{ rotateY: 0 }}
                    animate={{ rotateY: 180 }}
                >
                    <div className='w-96 h-96 bg-green-800'>

                    </div>
                </motion.div>
                <motion.div
                    className="back"
                    initial={{ rotateY: 180 }}
                    animate={{ rotateY: 0 }}
                >
                    <div className='w-96 h-96 bg-red-800'></div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Projects;