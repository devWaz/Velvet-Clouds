import lines from '../../assets/images/pattern2.svg'
import info from '../../assets/images/INFO.svg'
import { text , join } from '../../utiils/texts'

import { useRef } from 'react'
import { useInView, motion } from 'framer-motion'



const InfoSection = () => {

    const body = useRef(null)
    const isInView = useInView(body, {once:true , margin: '-35%'})

    const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

    const firstName = {
        initial: {
          y: 0,
        },
        animate: {
          y: 0,
          transition: {
            delayChildren: 0.6,
            staggerChildren: 0.04,
            staggerDirection: -1,
          },
        },
      };

    const letter = {
        initial: {y: '100%'},
        open: {
            y: 0,
            transition: { duration: 1, ...transition },
          },
    }

    return ( 
        <section className="relative min-h-[50vh]">
            <div className='absolute left-[-15rem] md:left-[-7rem] lg:left-[-1rem] top-[-7rem] lg:top-[-10rem] w-[650px] lg:w-[1050px]'>
                <img src={lines} alt="pattern"/>
            </div>

            <div className='p-5 py-[5rem] lg:py-[6rem] text-white flex flex-col gap-5 lg:w-[60%] lg:flex-row lg:m-auto relative'>
                <div className='lg:-rotate-90 lg:absolute lg:top-[150px] lg:left-[-110px] h-[62px] w-[135px] lg:w-[154px] lg:h-[70pxpx]'>
                    <img src={info} alt="" className='w-full h-full'/>
                </div>
                <div>
                    <motion.h3 ref={body} className='text-[2rem] lg:text-[48px] leading-8 lg:leading-[52px]'>
                        {
                            text.map( (phrase, index) => {
                                return <motion.div key={index} variants={firstName} className='lineMask' >
                                            <motion.div 
                                            custom={index} 
                                            variants={letter} 
                                            initial='initial' 
                                            animate={isInView ? "open" : ""}>{phrase}</motion.div>
                                        </motion.div>
                                        }
                                    )
                            }
                    </motion.h3>
                    <p className='text-[18px] lg:text-[20px] lg:leading-[28px] mt-10'>
                        {
                            join.map( (phrase, index) => {
                                return <motion.div key={index} variants={firstName} className='lineMask' >
                                            <motion.div 
                                            custom={index} 
                                            variants={letter} 
                                            initial='initial' 
                                            animate={isInView ? "open" : ""}>{phrase}</motion.div>
                                        </motion.div>
                                        }
                                    )
                            }
                        <br />
                        Step into a world where music transcends boundaries and transports you to realms unknown. Through their latest album and timeless 
                        favorites, Velvet Clouds will captivate your senses, evoking powerful emotions and leaving an indelible mark on your soul.
                    </p>
                </div>
            </div>
        </section>
     );
}
 
export default InfoSection;