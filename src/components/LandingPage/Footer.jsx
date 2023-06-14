import pattern from '../../assets/images/pattern3.svg'
import velvet from '../../assets/images/velvet-clouds.png'
import xide from '../../assets/images/xide.svg'

const Footer = () => {
    return ( 
        <footer className="relative bg-[#1D1D1D]">
            <div className='absolute hidden z-0 left-[-10rem] md:left-[0rem] lg:left-[12rem] top-[-2rem] xl:top-[-3rem] lg:top-[-2rem] 
                            w-[700px] md:w-[950px] lg:w-[950px] xl:w-[1190px]'>
                <img src={pattern} alt="pattern" className='w-full h-full'/>
            </div>
            <div className='pt-[4rem] xl:pt-[6rem] px-4 md:px-6 pb-4'>
                <div className='flex justify-between items-center'>
                    <img src={velvet} alt="" className='z-30 w-[173px] xl:w-[217px]'/>
                    <img src={xide} alt="" className='z-30 xl:w-[100px]'/>
                </div>
                <p className='text-white text-[14px] text-center mt-[3rem]'>Velvet Clouds Night Drive UK Tour website. 
                                    <br className='md:hidden'/> All rights reserved © 2023. Designed by <a href="" className='underline font-semibold'>XIDE.</a></p>
            </div>
        </footer>
     );
}
 
export default Footer;