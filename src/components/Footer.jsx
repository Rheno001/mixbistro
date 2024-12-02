import footer from '../assets/foot.svg'
import line from '../assets/line.svg'
import insta from '../assets/insta.svg'
import fb from '../assets/fb.svg'
import tik from '../assets/tik.svg'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (<div className="bg-secondary pb-[70px] text-orange">
        <img src={footer} alt="" className='w-[110%]' />
        <div className=' pt-[76px] flex flex-col items-center gap-[24px]'>
            <div className='flex justify-center items-center gap-[50px] text-[25px] font-[600]'>
                <Link to={'/menu'}>Menu</Link>
                <Link to={'/.'}>Our Story</Link>
                <Link to={'/catering'}>Catering</Link>
            </div>

            <div className='flex justify-center items-center'>
                <img src={line} alt="" />
            </div>

            <p className='text-center text-[20px] capitalize'>follow us on social media for latest updates</p>

            <div className='flex justify-center items-center pt-[5px]'>
                <img src={insta} alt="" />
                <img src={fb} alt="" />
                <img src={tik} alt="" />
            </div>
        </div>
    </div>);
}

export default Footer;