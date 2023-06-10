import hamburger from '../../assets/images/hamburger.svg'

const Navbar = () => {
    return ( 
        <nav className="p-7 z-30 flex justify-end">
                <div className=''>
                    <img src={hamburger} alt="" />
                </div>
            </nav>
     );
}
 
export default Navbar;