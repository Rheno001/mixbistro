import footer from '../assets/foot.svg'
import line from '../assets/line.svg'
import insta from '../assets/insta.svg'
import fb from '../assets/fb.svg'
import tik from '../assets/tik.svg'
import instaMob from '../assets/instaMob.svg'
import fbMob from '../assets/fbMob.svg'
import tikMob from '../assets/tikMob.svg'
import footerBg from '../assets/footerBg.png'
import { Link } from 'react-router-dom';
// import noise from '../assets/noise.svg'

const Footer = () => {
    const handleClick = () => {
        window.scrollTo(0, 0); // Scroll to the top
    };

    return (<div className="bg-secondary relative pb-[70px] text-orange">
<<<<<<< HEAD
        {/* <img src={noise} className='absolute z-[100000] w-screen bg-repeat object-cover h-full' alt="" /> */}
        <img src={footer} alt="" className='w-full sm:w-[110%]' />
        <div className=' pt-[30px] flex flex-col items-center gap-[24px]'>
            <div className='flex justify-center items-center px-[20px] sm:px-[0] gap-[50px] text-[25px] font-[600]'>
                <Link onClick={handleClick} to={'/menu'} className='relative z-[10000] text-[20px] sm:text-[30px]'>Menu</Link>
                <Link onClick={handleClick} to={'/.'} className='relative z-[10000] text-[20px] sm:text-[30px]'>Our Story</Link>
                <Link onClick={handleClick} to={'/catering'} className='relative z-[10000] text-[20px] sm:text-[30px]'>Catering</Link>
=======
        {/* <div className='absolute bg-[#A5513D]  z-[0] w-full object-cover h-full' alt="" /> */}
        <img src={footer} alt="" className='relative hidden lg:block z-[10] w-full sm:w-[110%]' />
        <img src={footerBg} alt="" className='relative lg:hidden z-[10] w-full sm:w-[110%]' />
        <div className='relative z-[10] pt-[10px] lg:pt-[76px] flex flex-col items-center gap-[24px]'>
            <div className='flex justify-center items-center px-[20px] sm:px-[0] gap-[30px] lg:gap-[50px] text-[25px] font-[600]'>
                <Link onClick={handleClick} to={'/menu'} className='text-[14px] lg:text-[20px] text-accent lg:text-orange sm:text-[30px]'>Menu</Link>
                <Link onClick={handleClick} to={'/.'} className='text-[14px] lg:text-[20px] text-accent lg:text-orange sm:text-[30px]'>Our Story</Link>
                <Link onClick={handleClick} to={'/catering'} className='text-[14px] lg:text-[20px] text-accent lg:text-orange sm:text-[30px]'>Catering</Link>
>>>>>>> fd5e025a1532a0c1270c12cedc504b38c40106b4
            </div>

            <div className='hidden lg:flex justify-center items-center'>
                <img src={line} alt="" />
            </div>

            <p className='text-center text-[14px] lg:text-[15px] text-white lg:text-orange sm:text-[20px] capitalize'>follow us on social media for latest updates</p>

            <div className='hidden lg:flex justify-center items-center pt-[5px]'>
                <img src={insta} alt="" className='mx-[5px] w-[30px] sm:w-full' />
                <img src={fb} alt="" className='mx-[5px] w-[30px] sm:w-full' />
                <img src={tik} alt="" className='mx-[5px] w-[30px] sm:w-full' />
            </div>
            <div className='flex lg:hidden justify-center items-center pt-[5px]'>
                <img src={instaMob} alt="" className='mx-[5px] w-[30px] sm:w-full' />
                <img src={fbMob} alt="" className='mx-[5px] w-[30px] sm:w-full' />
                <img src={tikMob} alt="" className='mx-[5px] w-[30px] sm:w-full' />
            </div>
        </div>
    </div>);
}

export default Footer;