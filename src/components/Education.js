import { useRef } from 'react';
import React from 'react';
import { useScroll, motion } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({ type, time, place, info }) => {
    const target = useRef(null);
    return (
        <><li ref={target} className=' my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col justify-between items-center md:w-[80%]'>
            <LiIcon referance={target} />
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, type: 'spring' }}>
                <h3 className='capitalize text-2xl font-bold dark:text-light sm:text-xl xs:text-lg'>{type}
                </h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm '>
                    {time} | {place}
                </span>
                <p className='font-medium w-full  dark:text-light md:text-sm sm:text-xs'>
                    {info}
                </p>
            </motion.div>

        </li></>
    )
}

const Education = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    );

    return (
        <div className='my-64' >
            <h2 className='font-bold text-8xl mb-32 w-full text-center dark:text-light md:text-6xl xs:text-4xl md:mb-16'>Education</h2>
            <div ref={ref} className='w-[80%] mx-auto relative lg:w-[90%] md:w-full xs:w-full'>
                <motion.div
                                    style={{ scaleY: scrollYProgress }}
                                    className='absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-primaryDark origin-top 
                                    dark:shadow-[0_0_12px_1.5px_rgba(0,255,255,0.4)] 
                                    md:w-[2px] md:left-[30px] xs:left-[20px]'/>
                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Details
                        type="Advanced Diploma in software engineering specialization in AI"
                        time="2023 - 2024"
                        place="Centennial College"
                        info="Focused on Artificial Intelligence and Machine Learning."
                    />
                    <Details
                        type="Full Stack Development Course [MERN Stack]"
                        time="Jan-Dec 2020"
                        place="Udemy"
                        info="Completed a comprehensive course on full stack development."
                    />
                    <Details
                        type="Bachelor of Engineering in Information Technology"
                        time="2017 - 2021"
                        place="GTU University"
                        info="Graduated with honors, specializing in Software Development."
                    />
                    
                </ul>
            </div>
        </div>
    );
};

export default Education;