import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import TransitionEffect from '@/components/TransitionEffect';


const PageNotFound = () => {
    return (
        <>
            <Head>
                <title> DM | Project</title>
                <meta name="description" content="Learn more about my Projects on this page." />
            </Head>
            <TransitionEffect />
            <main className='mb-16 flex flex-col items-center justify-center w-full dark:text-light'>
                <Layout>
                    <AnimatedText className='lg:!text-7xl mb-16 sm:mb-8 sm:!text-6xl xs:!text-4xl' text="Cooming Soon...." />
                </Layout>
            </main>
        </>
    );
};

export default PageNotFound;