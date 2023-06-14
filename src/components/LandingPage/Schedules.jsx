import schedule from '../../assets/images/SCHEDULE.svg'

    const Dates = [
        {
            date: '04 MAY',
            location: 'THE 02 london',
        },
        {
            date: '06 MAY',
            location: 'THE 02 london',
        },
        {
            date: '07 MAY',
            location: 'The O2 london',
        },
        {
            date: '13 MAY',
            location: 'OVO HYDRO, Glasglow',
        },
        {
            date: '14 MAY',
            location: 'Resorts World, Birmingham',
        },
        {
            date: '16 MAY',
            location: 'AO Arena, Manchester',
        },
        {
            date: '17 MAY',
            location: 'AO Arena, Manchester',
        },
    ]

const Schedules = () => {
    return ( 
        <section className="relative">

            <div className='p-5 py-[5rem] md:py-[4rem] lg:py-[4rem] lg:pl-[30%] text-white flex flex-col gap-5 lg:w-[80%] lg:flex-row lg:m-auto relative'>
                <div className='lg:-rotate-90 lg:absolute lg:top-[200px] lg:left-[80px] xl:left-[230px] h-[62px] w-[300px] lg:w-[345px] lg:h-[70px]'>
                    <img src={schedule} alt="" className='w-full h-full'/>
                </div>
                <ul className='min-h-[50vh] md:min-h-[30vh] lg:w-[100%]'>
                    {
                        Dates.map((date , index) => {
                            return <li key={index} className='py-3 uppercase flex flex-col gap-2 md:flex-row md:justify-between md:items-center
                                                            border-y-[0.5px] border-collapse border-dashed border-[#ffffff54]'>
                                        <h3 className='text-[21px]'><span className='font-bold'>{date.date}</span>{` - ${date.location}`}</h3>
                                        <button className='w-full md:w-[7rem] p-2 rounded text-[.9rem] font-semibold text-black bg-white'>TICKETS</button>
                                    </li>
                        })
                    }
                </ul>
            </div>
        </section>
     );
}
 
export default Schedules;