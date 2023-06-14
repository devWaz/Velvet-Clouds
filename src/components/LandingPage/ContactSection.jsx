import contact from '../../assets/images/CONTACT.svg'

const ContactSection = () => {
    return ( 
        <section className="relative">

            <div className='p-5 py-[5rem] lg:py-[6rem] text-white flex flex-col gap-5 lg:w-[60%] lg:flex-row lg:m-auto relative'>
                <div className='lg:-rotate-90 lg:absolute lg:top-[190px] xl:top-[220px] lg:left-[-150px] xl:left-[-180px] h-[62px] w-[277px] lg:w-[254px] xl:w-[316px] lg:h-[70px]'>
                    <img src={contact} alt="" className='w-full h-full'/>
                </div>
                <div className='w-full min-h-[40vh]'>
                    <p>
                        Fill out the booking form below to ask any questions, or reach out to us directly at 
                        <span className='underline cursor-pointer text-[1.2rem]'> help@velvetclouds.com</span> with any questions or concerns. 
                    </p>
                    <form className='mt-5 flex flex-col gap-7'>
                        <div className='flex flex-col'>
                            <label className=' font-semibold text-[.9rem]'>Full Name</label>
                            <input type="text" placeholder='Full Name' className='mt-2 p-2 bg-[#ffffff0c] outline-none'/>
                        </div>

                        <div className='flex flex-col'>
                            <label className=' font-semibold text-[.9rem]'>Email</label>
                            <input type="text" placeholder='Email' className='mt-2 p-2 bg-[#ffffff0c] outline-none'/>
                        </div>

                        <div className='flex flex-col'>
                            <label className=' font-semibold text-[.9rem]'>Phone</label>
                            <input type="text" placeholder='Phone' className='mt-2 p-2 bg-[#ffffff0c] outline-none'/>
                        </div>

                        <div className='flex flex-col'>
                            <label className=' font-semibold text-[.9rem]'>Message</label>
                            <textarea placeholder='Message' className='mt-2 p-2 bg-[#ffffff0c] outline-none h-[177px]'/>
                        </div>

                        <button className='p-3 rounded-md bg-[#00FF85] text-black font-semibold md:w-[10rem]'>SUBMIT</button>
                    </form>
                </div>
            </div>
        </section>
     );
}
 
export default ContactSection;