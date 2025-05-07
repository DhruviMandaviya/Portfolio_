import { useRef } from 'react';
import React from 'react';
import { useScroll, motion } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({ position, company, companyLink, time, address, work }) => {
    const target = useRef(null);
    return (
        <><li ref={target} className=' my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col justify-between items-center md:w-[80%]'>
            <LiIcon referance={target} />
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, type: 'spring' }}>
                <h3 className='capitalize text-2xl font-bold dark:text-light sm:text-xl xs:text-lg '>{position}&nbsp;
                    <a href={companyLink}
                        className='text-primary dark:text-primaryDark capitalize'
                        target='_blank' > @{company}</a>
                </h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm '>
                    {time} | {address}
                </span>
                <p className='font-medium w-full dark:text-light md:text-sm sm:text-xs'>
                    {work}
                </p>
            </motion.div>

        </li></>
    )
}

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    );

    return (
        <div className='my-64' >
            <h2 className='font-bold text-8xl mb-32 w-full text-center  dark:text-light md:text-6xl xs:text-4xl md:mb-16'>Experience</h2>
            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full xs:w-full'>
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-primaryDark origin-top 
                    dark:shadow-[0_0_12px_1.5px_rgba(0,255,255,0.4)] 
                    md:w-[2px] md:left-[30px] xs:left-[20px]'/>
                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Details position="Mobile & Web Developer"
                        company="Freelance"
                        time="Jun 2021 - Present"
                        address="Remote"
                        work="Delivered end-to-end web and mobile solutions for clients across industries. Specialized in building scalable applications using Python (Django/Flask) for backend, SQL databases, and React.js/React Native for frontend and mobile interfaces. Developed e-commerce platforms, booking systems, and AI-integrated applications. Handled client communication, requirement analysis, deployment, and maintenance, ensuring timely delivery and high client satisfaction." />
                    <Details position="Mobile App Developer"
                        companyLink="https://www.instanceit.com/"
                        company="Instance It Solution"
                        time="Jan 2020 - Dec 2022"
                        address="India"
                        work="Worked with various clients to design, develop, and deploy native and cross-platform mobile applications across Android, iOS, Flutter, and React Native. Delivered customized solutions, maintained code quality, and implemented user-centric designs. Notable projects include e-commerce apps, booking systems, and social media platforms." />
                    <Details position="Full Stack Developer Intern"
                        company="Wipro"
                        companyLink="https://www.wipro.com/en-IN/overview/"
                        time="Jan 2019 - Dec 2020"
                        address="India"
                        work="Worked on end-to-end development of web applications using Python (Django/Flask) for backend and React.js for frontend. Collaborated with the design team to create responsive, user-friendly interfaces and implemented RESTful APIs to handle dynamic data flow. Managed SQL databases and integrated third-party APIs to enhance functionality. Participated in agile sprints, code reviews, and deployment processes." />
                </ul>
            </div>
        </div>
    );
};

export default Experience;
