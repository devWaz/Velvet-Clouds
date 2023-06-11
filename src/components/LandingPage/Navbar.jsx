import hamburger from '../../assets/images/hamburger.svg'
import instagram from '../../assets/images/instagram.svg'
import twitter from '../../assets/images/twitter.svg'
import spotify from '../../assets/images/spotify.svg'

const Navbar = () => {
    return ( 
        <nav className="p-7 z-30 flex justify-end lg:justify-between">
            <div className='lg:hidden md:hidden'>
                <img src={hamburger} alt="" />
            </div>

            <ul className='hidden text-white md:flex md:mr-auto justify-center items-center gap-7'>
                <a href='#' className='font-semibold text-[14px]'>INFO</a>
                <a href='#' className='font-semibold text-[14px]'>SCHEDULE</a>
                <a href='#' className='font-semibold text-[14px]'>CONTACT</a>
            </ul>

            <div className='hidden md:flex gap-7 justify-center items-center lg:ml-auto'>
                <img src={instagram} alt="instagram" />
                <img src={twitter} alt="twitter" />
                <img src={spotify} alt="spotify" />
            </div>
            <div></div>
        </nav>
     );
}
 
export default Navbar;