import lines from '../../assets/images/pattern2.svg'

const InfoSection = () => {
    return ( 
        <section className="h-screen relative">
            <div className='absolute left-[-15rem] md:left-[-7rem] lg:left-[-1rem] top-[-7rem] lg:top-[-10rem] w-[650px] lg:w-[1050px]'>
                <img src={lines} alt="pattern"/>
            </div>
        </section>
     );
}
 
export default InfoSection;