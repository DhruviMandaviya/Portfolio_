import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

const Logo = () => {
    return (
        <div className="flex items-center justify-center mt-2 bg-light dark:bg-dark">
            <MotionLink href="/" 
            className='w-16 h-16 bg-dark dark:border-light border-transparent border border-solid rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg'
                whileHover={{
                    backgroundColor: ["#121212", "rgba(131,58,180,1)", "rgba(253,29,29,1)", "rgba(252,176,69,1)", "rgba(131,58,180,1)", "#121212"],
                    transition: { duration: 2, ease: "easeInOut", repeat: Infinity }
                }}>
                DM
            </MotionLink>
        </div>
    );
};

export default Logo;