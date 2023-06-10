import velvet from '../../assets/images/velvet-clouds.png'
import down from '../../assets/images/down.svg'
import lines from '../../assets/images/pattern.svg'
import Navbar from './Navbar'

import { useRef , useEffect } from 'react'
import { useInView, motion } from 'framer-motion'

const HeroSection = () => {
    const text = [
        "NIGHT DRIVE"
    ]

    const text1 = [
        "UK Tour"
    ]

    const body = useRef(null)
    const isInView = useInView(body, {once:true, margin: '75%'})

    const animate = {
        initial: {y: '100%'},
        open: (i) => ({y: "0%", transition: {duration: 0.55, ease: [0.33, 1, 0.68, 1],  delay: 0.5 * i}})
    }

    return ( 
        <section className="h-screen hero bg-center flex flex-col justify-between relative overflow-x-hidden">
            <div className='absolute right-[-23rem] lg:right-[1rem] top-[-12rem] lg:top-[-23rem] w-[800px] lg:w-[1300px]'>
                <img src={lines} alt="pattern" />
            </div>
            <Navbar/>
            <div className="p-1 max-h-full flex flex-col justify-center md:items-center">           
                <div className="p-4 text-white max-w-[30rem] relative">
                    <img src={velvet} alt="velvet clouds" className='absolute w-[10rem] top-[-4rem] left-[-.5rem] md:left-[-5rem]'/>
                    <div className='leading-[7rem] lg:leading-[8rem]'>
                        <p ref={body} className="text-[2.1rem] md:text-[2.5rem] leading-8">
                            {
                                text.map( (phrase, index) => {
                                    return <div key={index} className='lineMask' >
                                                <motion.div 
                                                custom={index} 
                                                variants={animate} 
                                                initial='initial' 
                                                animate={isInView ? "open" : ""}>{phrase}</motion.div>
                                            </div>
                                            }
                                        )
                            }
                        </p>
                        <h1 className="text-[5.7rem] md:text-[7rem] lg:text-[8rem] md:leading-[6.5rem] lg:leading-[7.5rem]">{
                                text1.map( (phrase, index) => {
                                    return <div key={index} className='lineMask' >
                                                <motion.div 
                                                custom={index} 
                                                variants={animate} 
                                                initial='initial' 
                                                animate={isInView ? "open" : ""}>{phrase}</motion.div>
                                            </div>
                                            }
                                        )
                            }</h1>
                        <p className="text-[1.2rem] md:text-[1.5rem] leading-6 md:leading-7">
                            <span className="font-bold">04 MAY - 17 MAY</span>
                            <br />
                            LONDON, GLASGLOW,
                            <br />
                            BIRMINGHAM & MANCHESTER
                        </p>
                    </div>

                    <div className="flex flex-col gap-2 mt-[4rem] md:mt-[2rem] md:flex-row md:max-w-[17rem] lg:max-w-[18rem]">
                        <button className="p-3 w-full rounded bg-[#00FF85] text-black font-bold text-[.8rem]">TICKETS</button>
                        <button className="p-3 w-full rounded bg-white text-black font-bold text-[.8rem]">MORE INFO</button>
                    </div>
                </div>
            </div>
            <div className='flex p-5 justify-center z-30'>
                <img src={down} alt="" />
            </div>
        </section> 
    );
}
export default HeroSection;