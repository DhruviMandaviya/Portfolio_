import React , { useRef }  from 'react';
import { motion,useInView } from 'framer-motion';

const ABC = ({ name, x, y }) => {
    return (
        <motion.div className='flex items-center justify-center rounded-full bg-dark
                 text-light py-3 px-6 shadow-dark cursor-pointer font-semibold dark:bg-light
                  dark:text-dark dark:shadow-light absolute lg:py-2 lg:px-4 md:text-sm md:py-1.5 
                  md:px-3 xs:py-1 xs:px-2 xs:text-xs
                  '
            whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0 }}
            animate={{ x: x, y: y , transition: { duration: 1.5 }}}
            viewport={{ once:true}}
            >
            {name}
        </motion.div>
    )
}

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div ref={ref}>
            <h2 className='font-bold text-8xl mt-60 w-full text-center  dark:text-light md:text-6xl md:mt-32'>Skills</h2>
            <div className='w-full flex justify-center mt-10 items-center h-screen rounded-md relative 
            bg-circularLight dark:bg-circularDark lg:h-[80vh] md:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg 
            md:bg-circularLightMd md:dark:bg-circularDarkMd xs:bg-circularLightSm xs:dark:bg-circularDarkSm '>
               
                {isInView && (
                    <>
                        <motion.div className='flex items-center justify-center rounded-full bg-dark
                        text-light p-8 shadow-dark cursor-pointer font-semibold dark:bg-light
                         dark:text-dark dark:shadow-light lg:p-6 md:p-4 xs:p-2 xs:text-xs'
                           whileHover={{ scale: 1.05 }}> web
                       </motion.div>
                       <ABC name="css" x="-5vw" y="-7vw" />
                       <ABC name="html" x="-33vw" y="2vw" />
                       <ABC name="javascript" x="-27vw" y="-25vw" />
                       <ABC name="react" x="23vw" y="9vw" />
                       <ABC name="next" x="40vw" y="-7vw" />
                       <ABC name="tailwind css" x="-10vw" y="-25vw" />
                       <ABC name="figma" x="-6vw" y="-16vw" />
                       <ABC name="github" x="34vw" y="2vw" />
                       <ABC name="firebase" x="4vw" y="25vw" />
                       <ABC name="nodejs" x="-20vw" y="-17vw" />
                       <ABC name="express" x="13vw" y="0vw" />
                       <ABC name="mongodb" x="-38vw" y="-7vw" />
                       <ABC name="python" x="5vw" y="-12vw" /> 
                       <ABC name="java" x="29vw" y="18vw" />
                       <ABC name="c++" x="-22vw" y="-10vw" />
                       <ABC name="vueJs" x="-30vw" y="15vw" />
                       <ABC name="SQL" x="-10vw" y="15vw" />
                       <ABC name="php" x="15vw" y="-20vw" />
                       <ABC name="graphql" x="23vw" y="-9vw" />
                       <ABC name="docker" x="-19vw" y="0vw" />
                       <ABC name="kubernetes" x="12vw" y="19vw" />
                       <ABC name="aws" x="-5vw" y="7vw" />
                       <ABC name="azure" x="-25vw" y="7vw" />
                       <ABC name="Android" x="5vw" y="-25vw" />
                       <ABC name="iOS" x="27vw" y="-18vw" />
                       <ABC name="React Native" x="37vw" y="-25vw" />
                       <ABC name="PostMan" x="9vw" y="11vw" />
                       <ABC name="linux" x="-18vw" y="22vw" />
                       <ABC name="Bootstrap" x="33vw" y="26vw" />
                       <ABC name="Flutter" x="-35vw" y="20vw" />
                       <ABC name="Kotlin" x="-42vw" y="-15vw" />
                       <ABC name="Django" x="-32vw" y="-16vw" />
                       <ABC name="Flask" x="39vw" y="-15vw" />
                    </>
                )}
            </div>

        </div>
    );
};

export default Skills;