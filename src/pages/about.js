import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import React,{useEffect, useRef} from 'react';
import Image from 'next/image';
import AboutImage from '../../public/images/profile/image.JPG';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import TransitionEffect from '@/components/TransitionEffect';

const AnimatedNumbers = ({ value,className }) => {

    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue=useSpring(motionValue,{duration:3000});
    const isInValue=useInView(ref,{once:true});

    useEffect(() => {
        if(isInValue){
            motionValue.set(value);
        }
    },[isInValue, value,motionValue]);


   useEffect(() => {
    springValue.on('change',(latest)=>{
        if(ref.current && latest.toFixed(0)<=value){
            ref.current.innerText=latest.toFixed(0);
        }
    })}
    , [springValue, value]);
   
    

    return (
    <span ref={ref} className={`inline-block font-bold dark:text-light ${className}`}>

    </span>
    )
}

const About = () => {
    return (
        <><Head>
            <title> DM | About Me</title>
            <meta name="description" content="Learn more about me on this page." />
        </Head>
        <TransitionEffect />
            <main className='flex w-full flex-col items-center justify-center'>
                <Layout className='pt-10'>
                    <AnimatedText className="text-5xl mb-16 xl:!text-5xl lg:!text-6xl md:!text-5xl sm:!text-4xl sm:mb-8" 
                    text="Code with Vision. Build with Purpose." />
                    <div className='grid w-full flex-col grid-cols-8 gap-16 sm:gap-8 '>
                        <div className='col-span-3 flex flex-col items-start justify-center xl:col-span-4 md:order-2 md:col-span-8'>
                            <h2 className='text-lg  uppercase font-bold text-dark/75 dark:text-light/75'>
                                About Me</h2>
                            <p className='font-medium my-4 dark:text-light'>
                                Hi, I’m Dhruvi Mandaviya — a Full-Stack Developer with 4+ years of experience crafting dynamic, high-performance web and mobile applications. I specialize in building scalable digital solutions from front-end interfaces to robust back-end systems, integrating cutting-edge technologies like AI and RAG models to push boundaries and solve real-world problems.
                            </p>
                            <p className='font-medium my-2  dark:text-light '>
                                With a strong command over cloud services, I thrive on creating products that are not only beautifully designed but also structurally solid and optimized for performance. My development process is rooted in clean architecture, intuitive UX, and modern development practices.
                            </p>
                            <p className='font-medium my-2  dark:text-light'>
                                Whether it’s building a data-driven dashboard, deploying APIs, or architecting a full-stack app from scratch, I bring a holistic, user-focused approach to every project.
                            </p>
                            <p className='font-medium  dark:text-light'>
                                Let’s turn your next big idea into a powerful product!
                            </p>
                        </div>

                        <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light dark:bg-dark dark:border-light p-8 xl:col-span-4 md:order-1 md:col-span-8'>
                            <div className='absolute top-3 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
                            <Image src={AboutImage} alt="Dhruvi Mandaviya" className='w-full h-auto rounded-2xl'  priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                        </div>

                        <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                            <div className='flex flex-col items-end justify-center xl:items-center '>
                                <span className='inline-block text-6xl font-bold  dark:text-light md:text-5xl sm:text-4xl xs:text-3xl' >
                                    <AnimatedNumbers value={15} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base
                                xs:text-sm'>
                                    Satisfied Clinets
                                </h2>
                            </div>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-6xl font-bold  dark:text-light md:text-5xl sm:text-4xl xs:text-3xl'>
                                    <AnimatedNumbers value={10}/>+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base
                                xs:text-sm'>
                                    Projects completed
                                </h2>
                            </div>
                            <div className='flex flex-col items-end justify-center xl:items-center '>
                                <span className='inline-block text-6xl font-bold  dark:text-light md:!text-5xl sm:!text-4xl xs:!text-3xl'>
                                    <AnimatedNumbers value={4}/>+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base
                                xs:text-sm'>
                                     Years of Experience
                                </h2>
                            </div>
                        </div>
                    </div>
                    <Skills />
                    <Experience />
                    <Education  />
                </Layout>
            </main></>
    );
};

export default About;