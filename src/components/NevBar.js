import Link from 'next/link';
import React from 'react';
import Logo from './Logo';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedInIcon, SunIcon, MoonIcon } from './Icons';
import useThemeSwitcher from './hook/useThemeSwitcher';

const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-[1px] inline-block bg-black absolute left-0 -bottom-0.5 
            group-hover:w-full transition-[width] ease duration-300 dark:bg-light ${router.asPath === href ? 'w-full' : 'w-0'}`}>
                &nbsp;
            </span>
        </Link>
    );
}

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
    const router = useRouter();

    const handleClick = () => {
        toggle();
        router.push(href);
        window.scrollTo(0, 0);
    }

    return (
        <button href={href} className={`${className} relative group text-light dark:text-dark my-2` } onClick={handleClick}>
            {title}
            <span className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 
            group-hover:w-full transition-[width] ease duration-300 dark:bg-dark ${router.asPath === href ? 'w-full' : 'w-0'}`}>
                &nbsp;
            </span>
        </button>
    );
}

const NevBar = () => {

    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = React.useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <header 
            className='w-full px-32 py-8 font-medium items-center justify-between flex
             bg-light dark:bg-dark text-dark dark:text-light border-b-2 
             border-solid border-dark dark:border-light relative z-10 lg:px-16 md:px-12 lg:py-10 sm:px-8'>

                <button onClick={handleClick} className='flex-col items-center justify-center hidden lg:flex'>
                    <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-in h-0.5 w-6 rounded-sm  ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                    <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-in h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                    <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-in h-0.5 w-6 rounded-sm  ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
                </button>

                <div className='w-full items-center justify-between flex lg:hidden'>
                    <nev>
                        <CustomLink href="/" title="Home" className='mr-4' />
                        <CustomLink href="/about" title="About" className='mx-4' />
                        <CustomLink href="/projects" title="Projects" className='mx-4' />
                        <CustomLink href="/contact" title="Contact" className='ml-4' />
                    </nev>

                    <nev className='flex items-center justify-center flex-wrap'>
                        <motion.a href="https://github.com/DhruviMandaviya"
                            target={"_blank"}
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-7 mr-4" ><GithubIcon /></motion.a>
                        <motion.a href="https://www.linkedin.com/in/dhruvimandaviya/"
                            target={"_blank"}
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-7 mr-4"><LinkedInIcon /></motion.a>

                        <button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
                            className={`flex items-center justify-center rounded-full p-1 
                        ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
                            {
                                mode === 'dark'
                                    ? <SunIcon className=' fill-dark' />
                                    : <MoonIcon className='  fill-dark' />
                            }
                        </button>
                    </nev>
                </div>

                {
                    isOpen ?
                        <motion.div
                        initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ duration: 0.2, type: "spring" }}
                         className='min-w-[70vw] flex-col flex items-center justify-between fixed z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md shadow-lg py-32 dark:text-dark text-light'>
                            <nev className="flex items-center justify-center flex-col">
                                <CustomMobileLink href="/" title="Home" className='' toggle={handleClick} />
                                <CustomMobileLink href="/about" title="About" className='' toggle={handleClick} />
                                <CustomMobileLink href="/projects" title="Projects" className='' toggle={handleClick} />
                                <CustomMobileLink href="/contact" title="Contact" className='' toggle={handleClick} />
                            </nev>

                            <nev className='flex items-center justify-center flex-wrap mt-5'>
                                <motion.a href="https://github.com/DhruviMandaviya"
                                    target={"_blank"}
                                    whileHover={{ y: -3 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="w-6 mx-4 rounded-full" ><GithubIcon /></motion.a>
                                <motion.a href="https://www.linkedin.com/in/dhruvimandaviya/"
                                    target={"_blank"}
                                    whileHover={{ y: -3 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="w-7 mr-4"><LinkedInIcon /></motion.a>

                                <button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
                                    className={`flex items-center justify-center rounded-full p-1 
                        ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
                                    {
                                        mode === 'dark'
                                            ? <SunIcon className=' fill-dark' />
                                            : <MoonIcon className='  fill-dark' />
                                    }
                                </button>
                            </nev>
                        </motion.div>
                        : null
                }

                <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                    <Logo />
                </div>
            </header>
        </>
    );
};

export default NevBar;
