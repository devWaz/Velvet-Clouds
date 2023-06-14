import photo from '../../assets/images/wendy-wei1.jpg'

const PhotoSection = () => {
    return ( 
        <section className="min-h-[40vh] lg:h-[80vh]">
            <img src={photo} alt="photo" className='w-full h-[336px] md:h-full lg:h-full object-cover'/>
        </section>
     );
}
 
export default PhotoSection;