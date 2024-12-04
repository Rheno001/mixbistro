import { useState } from 'react'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        window.scrollTo(0, 0); // Scroll to the top
    };

    return (
        <div className="bg-secondary w-full relative z-[300]">
            <div className="px-4 lg:px-[80px] py-[30px] text-accent font-[600] text-[25px] flex flex-row-reverse lg:flex-row justify-between items-center">
                {/* Hamburger Menu Button - Only visible on mobile/tablet */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden flex flex-col gap-1.5"
                >
                    <span className={`block h-0.5 w-6 bg-accent transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block h-0.5 w-6 bg-accent transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block h-0.5 w-6 bg-accent transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
                {/* Desktop Navigation */}
                <Link onClick={handleClick} className='hidden lg:flex w-[33%] justify-start items-start' to={'/menu'}>
                    Menu
                </Link>
                <Link onClick={handleClick} className='w-[33%] flex justify-center items-center' to={'/'}>
                    <img src={logo} alt="" />
                </Link>
                <div className='hidden lg:flex w-[33%] items-center justify-end gap-[50px]'>
                    <Link onClick={handleClick} to={'/.'}>Our Story</Link>
                    <Link onClick={handleClick} to={'/catering'}>Catering</Link>
                </div>
            </div>

            {/* Mobile Menu - Slides down when hamburger is clicked */}
            <div
                className={`lg:hidden absolute w-full bg-secondary transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                    }`}
            >
                <div className="flex flex-col items-center gap-6 py-6">
                    <Link
                        to={'/menu'}
                        onClick={() => {
                            handleClick()
                            setIsOpen(false)
                        }}
                        className="text-accent hover:opacity-80 transition-opacity"
                    >
                        Menu
                    </Link>
                    <Link
                        to={'/.'}
                        onClick={() => {
                            handleClick
                            setIsOpen(false)
                        }}
                        className="text-accent hover:opacity-80 transition-opacity"
                    >
                        Our Story
                    </Link>
                    <Link
                        to={'/catering'}
                        onClick={() => {
                            handleClick
                            setIsOpen(false)
                        }}
                        className="text-accent hover:opacity-80 transition-opacity"
                    >
                        Catering
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Nav;