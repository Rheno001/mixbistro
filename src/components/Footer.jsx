import footer from '../assets/foot.svg'
import line from '../assets/line.svg'
import insta from '../assets/insta.svg'
import fb from '../assets/fb.svg'
import tik from '../assets/tik.svg'
import { Link } from 'react-router-dom';
// import noise from '../assets/noise.svg'

const Footer = () => {
    const handleClick = () => {
        window.scrollTo(0, 0); // Scroll to the top
    };

    return (<div className="bg-secondary relative pb-[70px] text-orange">
        {/* <img src={noise} className='absolute z-[100000] w-screen bg-repeat object-cover h-full' alt="" /> */}
        <img src={footer} alt="" className='w-full sm:w-[110%]' />
        <div className=' pt-[76px] flex flex-col items-center gap-[24px]'>
            <div className='flex justify-center items-center px-[20px] sm:px-[0] gap-[50px] text-[25px] font-[600]'>
                <Link onClick={handleClick} to={'/menu'} className='text-[20px] sm:text-[30px]'>Menu</Link>
                <Link onClick={handleClick} to={'/.'} className='text-[20px] sm:text-[30px]'>Our Story</Link>
                <Link onClick={handleClick} to={'/catering'} className='text-[20px] sm:text-[30px]'>Catering</Link>
            </div>

            <div className='flex justify-center items-center'>
                <img src={line} alt="" />
            </div>

            <p className='text-center text-[15px] sm:text-[20px] capitalize'>follow us on social media for latest updates</p>

            <div className='flex justify-center items-center pt-[5px]'>
                <img src={insta} alt="" className='mx-[5px] w-[30px] sm:w-full' />
                <img src={fb} alt="" className='mx-[5px] w-[30px] sm:w-full' />
                <img src={tik} alt="" className='mx-[5px] w-[30px] sm:w-full'/>
            </div>
        </div>
    </div>);
}

export default Footer;