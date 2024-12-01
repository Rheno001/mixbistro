import React from 'react'
import { motion } from 'framer-motion'
import catering from '../../assets/catering.png'
import vector from '../../assets/vector.png'

const Catering = () => {
    return (
        <div className="menu-container bg-primary">
            <motion.img 
                src={catering} 
                alt="Catering Image" 
                className="menu-logo px-[65px] pt-20"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    type: "spring",
                    bounce: 0.7,
                    duration: 2.5
                }}
            />
            <section>
                <div className='flex flex-col items-center justify-center mt-20'>
                   <p className='text-accent text-xl font-[600] text-[70px] leading-[84px] font-mont align-middle'>Our Catering Services</p>
                   <img src={vector} alt="Decorative Vector" className="vector-image w-[250px]" />
               </div>
               <div className='carousel'></div>
               <div className='flex items-center justify-evenly px-[80px]'>
                <span className='text-center p-[50px]'>
                    <h2 className='text-accent text-[40px] leading-[48px] font-[600]'>Full Pan Party</h2>
                    <h3 className='text-white font-[500] text-[20px] leading-[37.5px]'>Mild / Spicy Grilled beef garnished with onion & cucumber.</h3>
                    <p className='text-accent font-[600] text-[18px] leading-[27px]'>$170,00</p>
                </span>
                <span className='text-center p-[50px]'>
                    <h2 className='text-accent text-[40px] leading-[48px] font-[600]'>Small Pan Snack</h2>
                    <h3 className='text-white font-[500] text-[20px] leading-[37.5px]'>Mild / Spicy Grilled chicken garnished with onion & cucumber.</h3>
                    <p className='text-accent font-[600] text-[18px] leading-[27px]'>$300,00</p>
                </span>
               </div>
            </section>
        </div>
    );
}

export default Catering;