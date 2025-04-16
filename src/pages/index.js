import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profileImage from '../../public/images/profile/profile.png'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import{LinkArrow} from '@/components/Icons'
import TransitionEffect from '@/components/TransitionEffect'

export default function Home() {
  return (
    <>
      <Head>
        <title>DM | Home</title>
        <meta name="description" content="created by Dhruvi Mandaviya" />
      </Head>
      <TransitionEffect />
      <main className='flex text-dark items-center min-h-screen w-full dark:text-light '>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className='flex items-center w-full lg:flex-col'>
          
            <div className='w-1/2 flex flex-col self-center items-center lg:w-full lg:text-center md:order-2 '>
              <AnimatedText text={"Crafting Scalable Solutions with Code and Passion"} 
              className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl' />
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
              I’m Dhruvi Mandaviya, a full-stack developer specializing in building responsive, high-performance web and mobile applications. Explore my portfolio to see how I combine modern technologies, clean design, and real-world problem solving.</p>
              <div className='flex lg:self-center self-start items-center mt-2'>
              <Link href="/Dhruvi_Mandaviya_Resume.pdf" target="_blank" 
              className='flex item-center bg-dark dark:bg-light dark:text-dark text-white 
              font-bold p-3 rounded-lg hover:bg-white hover:text-black border-2 border-solid border-transparent
               hover:border-black md:p-2 md:px-4 md:text-base sm:p-2 sm:px-3 sm:text-sm'
                download={true} src>
                  Resume <LinkArrow className={"!w-6 ml-1"} />
              </Link>
              <Link href="/contact" 
              className='ml-4 text-lg font-medium capitalize text-dark underline
               dark:text-light md:text-base'>
                  Contact
              </Link>
            </div>
            </div>
            <div className='w-1/2 md:w-full '>
              <Image src={profileImage} 
              className="w-full h-auto lg:hidden md:inline-block md:w-full  md:order-1 " 
              alt="Dhruvi Mandaviya" 
              priority 
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw">
              </Image>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
