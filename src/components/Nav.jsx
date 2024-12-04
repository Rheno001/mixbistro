import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom';



const Nav = () => {

    const handleClick = () => {
        window.scrollTo(0, 0); // Scroll to the top
    };

    return (<>
        <div className="bg-secondary px-[80px] py-[30px] text-accent font-[600] text-[25px] w-full flex justify-between items-center">
            <Link className='w-[33%] flex justify-start items-start' onClick={handleClick} to={'/menu'}>
                Menu
            </Link>
            <Link className='w-[33%] flex justify-center items-center' onClick={handleClick} to={'/'}><img src={logo} alt="" /></Link>

            <div className='flex w-[33%] items-center justify-end gap-[50px]'>
                <Link onClick={handleClick} to={'/'}>Our Story</Link>
                <Link onClick={handleClick} to={'/catering'}>Catering</Link>
            </div>
        </div>
    </>);
}

export default Nav;