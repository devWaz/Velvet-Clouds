import lines from '../../assets/images/pattern2.svg'
import info from '../../assets/images/INFO.svg'

const InfoSection = () => {
    return ( 
        <section className="relative min-h-[50vh]">
            <div className='absolute left-[-15rem] md:left-[-7rem] lg:left-[-1rem] top-[-7rem] lg:top-[-10rem] w-[650px] lg:w-[1050px]'>
                <img src={lines} alt="pattern"/>
            </div>

            <div className='p-5 py-[5rem] lg:py-[6rem] text-white flex flex-col gap-5 lg:w-[60%] lg:flex-row lg:m-auto relative'>
                <div className='lg:-rotate-90 lg:absolute lg:top-[150px] lg:left-[-110px] lg:w-[154px] lg:h-[70pxpx]'>
                    <img src={info} alt="" className='w-full h-full'/>
                </div>
                <div>
                    <h3 className=' text-[2rem] lg:text-[48px] leading-8 lg:leading-[52px]'>Experience a transcendent musical odyssey as Velvet Clouds, the captivating post-rock band renowned for their 
                        atmospheric soundscapes, embarks on an unforgettable UK tour. 
                    </h3>
                    <p className='text-[18px] lg:text-[20px] lg:leading-[28px] mt-10'>Join us between May 4th and May 17th for an immersive journey into the depths of sound and emotion. Velvet Clouds 
                        will weave their enchanting melodies, pulsating rhythms, and soaring crescendos, enveloping you in a symphony of ethereal beauty.
                        <br/>
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