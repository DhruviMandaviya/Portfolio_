import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { GithubIcon } from '@/components/Icons';
import ChatBot from '../../public/images/projects/chatBot.jpg';
import project1 from '../../public/images/projects/image.jpg';
import project2 from '../../public/images/projects/Project-2.png';
import portfolio from '../../public/images/projects/portfolio.jpg';
import OkCupid from '../../public/images/projects/OkCupid.png';
import ElectricVehicle from '../../public/images/projects/ElectricVehicle.png';
import quiz from '../../public/images/projects/Quiz.png';
import FramerImage from '@/components/FramerImage';
import TransitionEffect from '@/components/TransitionEffect';


const FeaturedProjects = ({ type, title, summary, img, link, github }) => {
    return (
        <article className='w-full flex items-center justify-between rounded-3xl border border-solid
         border-dark bg-light shadow-2xl p-12 relative dark:bg-dark dark:border-light
         lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 '>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark  dark:bg-light 
            rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[2rem]' />
            <Link href={link} target='_blank'
                className='w-1/2 cursor-pointer overflow-hidden rounded-lg relative lg:w-full '>
                <FramerImage
                    priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                    src={img} alt={title} className='w-full h-auto'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }} />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-semibold text-xl dark:text-primaryDark xs:text-sm'>
                    {type}
                </span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-2xl '>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>
                <div className="mt-2 flex items-center">
                    <Link href={github} target='_blank' className='w-10'><GithubIcon /></Link>
                    <Link href={link} target='_blank'
                        className='ml-4 rounded-lg bg-dark text-light dark:text-dark
                     dark:bg-light p-2 px-6 text-lg font-semibold sm:p-2 sm:px-4'
                    >Visit Project</Link>
                </div>
            </div>
        </article>

    );
};

const Project = ({ title, type, img, link, github }) => {
    return (
        <article
            className='h-full w-full flex flex-col items-center justify-between rounded-2xl border border-solid
         border-dark bg-light shadow-2xl p-6 relative dark:bg-dark dark:border-light xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem]
             bg-dark rounded-br-3xl dark:bg-light md:-right-2 
                md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]' />
            <Link href={link} target='_blank'
                className='w-full cursor-pointer scale-100 object-contain 
                overflow-hidden rounded-2xl '>
                <FramerImage
                    src={img}
                    alt={title}
                    width={500}
                    height={500}
                    className="rounded-2xl w-full h-[300px] object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                />

            </Link>
            <div className='w-full flex flex-col items-start justify-between pl-6'>
                <span className='text-primary dark:text-primaryDark 
                font-semibold text-xl '>
                    {type}
                </span>
                <Link href={link} target='_blank'
                    className='hover:underline underline-offset-2 md:text-base'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light lg:text-2xl'>{title}</h2>
                </Link>
                <div className="mt-2 flex items-center justify-between w-full">
                    <Link href={github} target='_blank' className='w-10 md:w-6'><GithubIcon /></Link>
                    <Link href={link} target='_blank'
                        className='ml-4 rounded-lg bg-dark text-light  dark:bg-light dark:text-dark 
                    p-2 px-6 text-lg font-semibold md:text-base'>Visit</Link>
                </div>

            </div>

        </article>

    );
}



const Projects = () => {
    return (
        <><Head>
            <title> DM | Projects</title>
            <meta name="description" content="Learn more about my Projects on this page." />
        </Head>
            <TransitionEffect />
            <main className='mb-16 flex flex-col items-center justify-center w-full dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText className='lg:!text-7xl mb-16 sm:mb-8 sm:!text-6xl xs:!text-4xl' text="From Concept to Code — My Digital Footprint." />
                    <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                    <div className='col-span-12'>
                            <FeaturedProjects 
                            title="React Portfolio Website"
                                type="Portfolio Website"
                                github="https://github.com/DhruviMandaviya/Portfolio_" link="https://github.com/DhruviMandaviya/Portfolio_"
                                summary="A modern portfolio website built with Next.js, Tailwind CSS, and Framer Motion. It features smooth animations, dynamic background effects, a clean and responsive design, and seamless page transitions. Showcasing full-stack projects, AI integrations, and cross-platform mobile apps with a focus on performance and user experience."
                                img={portfolio} />
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProjects title="AI-Powered Travel Planning Tool"
                                type="Full Stack Web Application"
                                github="/pageNotFound" link="/pageNotFound"
                                summary="AI-powered travel planning and recommendation tool tailored for travel agencies, bloggers, and frequent travelers. Designed and implemented features for automated itinerary generation, real-time travel insights, and intelligent recommendations using integrated travel APIs." img={project2} />

                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project title="AI ChatBot – Intelligent Conversational Assistant"
                                type="Cross-platform Mobile Applictaion"
                                github="https://github.com/DhruviMandaviya/ChatBot" link="https://github.com/DhruviMandaviya/ChatBot"
                                img={ChatBot}
                                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts." />
                        </div>
                        <div className='col-span-6 sm:col-span-12 '>
                            <Project title="Test Our Bond"
                                type="Android Mobile Applictaion"
                                github="https://github.com/DhruviMandaviya/TestOurBond" link="https://github.com/DhruviMandaviya/TestOurBond"
                                img={quiz}
                                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts." />
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProjects title="Job Portal – End-to-End Job Search & Recruitment Platform"
                                type="Full Stack Web Application"
                                github="https://github.com/DhruviMandaviya/JobPortal" link="https://github.com/DhruviMandaviya/JobPortal"
                                summary="A full-stack web application designed to streamline the job search and recruitment process. The platform allows job seekers to browse and apply for jobs, while employers can post vacancies and manage applications." img={project1} />
                        </div>

                        <div className='col-span-12'>
                            <FeaturedProjects title="OkCupid Data Visualization – Analyzing Dating Trends & User Preferences"
                                type="Data Visualization Project"
                                github="https://public.tableau.com/app/profile/dhruvi.mandaviya/viz/OkCupid_17267606085110/Ok" link="https://public.tableau.com/app/profile/dhruvi.mandaviya/viz/OkCupid_17267606085110/Ok"
                                summary="A data visualization project focused on analyzing OkCupid user profile data to uncover insights into dating behaviors, preferences, and demographic patterns. The project involved processing and visualizing data to identify key trends in user interactions, lifestyle choices, and compatibility factors." 
                                img={OkCupid} />
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProjects title="Electric Vehicle Data Analysis – Exploring Trends in EV Adoption"
                                type="Data Visualization Project"
                                github="https://public.tableau.com/app/profile/dhruvi.mandaviya/viz/ElectricVehicleDataAnalysis_17254788409350/Dashboard2" 
                                link="https://public.tableau.com/app/profile/dhruvi.mandaviya/viz/ElectricVehicleDataAnalysis_17254788409350/Dashboard2"
                                summary="A data analysis project designed to explore and visualize trends in electric vehicle (EV) adoption across regions and vehicle types. The project focused on analyzing key factors such as vehicle make, model, battery range, and geographic distribution to identify emerging market trends and consumer preferences."
                                img={ElectricVehicle} />
                        </div>

                    </div>
                </Layout>
            </main>
        </>
    );
};

export default Projects;