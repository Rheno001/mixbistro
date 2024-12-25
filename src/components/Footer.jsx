import footer from '../assets/foot.svg'
import line from '../assets/line.svg'
import insta from '../assets/insta.svg'
import fb from '../assets/fb.svg'
import tik from '../assets/tik.svg'
import instaMob from '../assets/instaMob.svg'
import fbMob from '../assets/fbMob.svg'
import tikMob from '../assets/tikMob.svg'
// import footerBg from '../assets/footerBg.png'
import { Link } from 'react-router-dom';
// import noise from '../assets/noise.svg'

const Footer = () => {
    const handleClick = () => {
        window.scrollTo(0, 0); // Scroll to the top
    };

    return (<div className="bg-secondary relative pb-[70px] text-orange">
        {/* <img src={noise} className='absolute z-[100000] w-screen bg-repeat object-cover h-full' alt="" /> */}
        <img src={footer} alt="" className='w-full sm:w-[110%]' />
        <div className=' pt-[30px] flex flex-col items-center gap-[24px]'>
            <div className='flex justify-center items-center px-[20px] sm:px-[0] gap-[50px] text-[25px] font-[600]'>
                <Link onClick={handleClick} to={'/menu'} className='relative z-[10000000] text-[20px] sm:text-[30px]'>Menu</Link>
                <Link onClick={handleClick} to={'/.'} className='relative z-[10000000] text-[20px] sm:text-[30px]'>Our Story</Link>
                <Link onClick={handleClick} to={'/catering'} className='relative z-[10000000] text-[20px] sm:text-[30px]'>Catering</Link>
            </div>

            <div className='hidden lg:flex justify-center items-center'>
                <img src={line} alt="" />
            </div>

            <p className='text-center text-[14px] lg:text-[15px] text-white sm:text-[20px] capitalize'>follow us on social media for latest updates</p>

            <div className='hidden lg:flex justify-center items-center pt-[5px]'>
                <Link onClick={handleClick} className='w-[33%] flex justify-center relative z-[10000000] items-center' to={'https://www.instagram.com/suyamixbistro/profilecard/?igsh=MW44Z21obWt0M3M1bw=='}>
                    <img src={insta} alt="" />
                </Link>
                <Link onClick={handleClick} className='w-[33%] flex justify-center relative z-[10000000] items-center mx-[10px]' to={'https://www.tiktok.com/@suyamixbistro?_t=8sK1cCG7xKY&_r=1'}>
                    <img src={fb} alt="" />
                </Link>
                <Link onClick={handleClick} className='w-[33%] flex justify-center relative z-[10000000] items-center' to={'https://www.tiktok.com/@suyamixbistro?_t=8sK1cCG7xKY&_r=1'}>
                    <img src={tik} alt="" />
                </Link>
            </div>
            <p className='hidden lg:flex text-center text-[14px] lg:text-[15px] text-white sm:text-[20px] capitalize'>©2025 Suyamixbistro. All rights reserved.</p>
            <div className='flex lg:hidden justify-center items-center pt-[5px]'>
                <Link onClick={handleClick} className='w-[30px] flex justify-center relative z-[10000000] items-center' to={'https://www.instagram.com/suyamixbistro/profilecard/?igsh=MW44Z21obWt0M3M1bw=='}>
                    <img src={instaMob} alt="" />
                </Link>
                <Link onClick={handleClick} className='w-[30px] flex justify-center relative z-[10000000] items-center mx-[10px]' to={'https://www.tiktok.com/@suyamixbistro?_t=8sK1cCG7xKY&_r=1'}>
                    <img src={fbMob} alt="" />
                </Link>
                <Link onClick={handleClick} className='w-[30px] flex justify-center relative z-[10000000] items-center' to={'https://www.tiktok.com/@suyamixbistro?_t=8sK1cCG7xKY&_r=1'}>
                    <img src={tikMob} alt="" />
                </Link>
                
            </div>
            <p className='lg:hidden text-center text-[14px] lg:text-[15px] text-white sm:text-[20px] capitalize'>©2025 Suyamixbistro. All rights reserved.</p>
        </div>
    </div>);
}

export default Footer;