import { motion } from 'framer-motion'
import catering from '../../assets/catering.png'
import vector from '../../assets/Vector.png'
import pic1 from '../../assets/pic1.png'
import pic2 from '../../assets/pic2.png'
import pic3 from '../../assets/pic3.png'
import pic4 from '../../assets/pic4.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { useInView } from "react-intersection-observer";
import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const Catering = () => {
    const { ref: ref4, inView: inView4 } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });
    const { ref: ref11, inView: inView11 } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });


    return (
        <div className="menu-container bg-primary hero overflow-hidden">
            <motion.img
                src={catering}
                alt="Catering Image"
                className="menu-logo px-[65px] pt-8 sm:pt-20"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    type: "spring",
                    bounce: 0.7,
                    duration: 2.5
                }}
            />

            <section>
                <motion.div
                    ref={ref4}
                    initial={{ opacity: 0, y: -200 }}
                    animate={{
                        opacity: inView4 ? 1 : 0,
                        y: inView4 ? 0 : -200,
                    }}
                    transition={{ duration: 0.5 }}
                    className='flex justify-center items-center px-[74px]'>
                    <div className='relative z-[500] flex flex-col items-center mt-[40px] sm:mt-[80px]'>
                        <p className='text-accent font-[600] text-[22px] sm:text-[70px] leading-[48px]md:leading-[84px] font-mont text-center'>Our Catering Services</p>
                        <img src={vector} alt="Decorative Vector" className="vector-image w-[250px] mt-4" />
                    </div>
                </motion.div>


                <div className='carousel'>
                    <motion.div ref={ref11}
                        initial={{ opacity: 0, y: 100 }}
                        animate={{
                            opacity: inView11 ? 1 : 0,
                            y: inView11 ? 0 : 100,
                        }}
                        transition={{ duration: 0.5 }} className='flex justify-center items-center mt-[40px] sm:mt-[80px] flex-col relative'>
                        {/* <img src={ellipse} alt="" className='absolute z-[400] w-[100vw] -top-[15%]' /> */}
                        <div
                            className="w-[99vw] hero h-[40%] absolute z-[400] -top-[19%] clip-path-ellipse"
                        >
                        </div>
                        <div
                            className="w-[99vw] hero h-[40%] absolute z-[400] -bottom-[19%] clip-path-ellipse"
                        >
                        </div>
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                            spaceBetween={20}
                            slidesPerView={3}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            navigation={{
                                nextEl: ".custom-next",
                                prevEl: ".custom-prev",
                            }}
                            className='flex justify-center items-center w-[100%] relative'
                        >
                            <SwiperSlide>
                                <img src={pic1} alt="Decorative Vector" className="slider-image w-full" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={pic2} alt="Decorative Vector" className="slider-image w-full" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={pic3} alt="Decorative Vector" className="slider-image w-full" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={pic4} alt="Decorative Vector" className="slider-image w-full" />
                            </SwiperSlide>
                        </Swiper>
                    </motion.div>
                </div>





                <div className='flex items-center px-[40px] sm:px-[80px] py-[50px] sm:w-[72%] mx-auto relative z-[500]'>
                    <span className='text-center sm:mx-[20px]'>
                        <h2 className='text-accent sm:text-[40px] sm:leading-[48px] font-[600]'>Full Pan Party</h2>
                        <h3 className='text-white font-[500] text-[15px] sm:text-[20px] sm:leading-[37.5px]'>Mild / Spicy Grilled beef garnished with onion & cucumber.</h3>
                        <p className='text-accent font-[600] text-[18px] sm:leading-[27px]'>$170,00</p>
                    </span>
                    <span className='text-center sm:mx-[20px]'>
                        <h2 className='text-accent sm:text-[40px] sm:leading-[48px] font-[600]'>Small Pan Snack</h2>
                        <h3 className='text-white font-[500] text-[15px] sm:text-[20px] sm:leading-[37.5px]'>Mild / Spicy Grilled chicken garnished with onion & cucumber.</h3>
                        <p className='text-accent font-[600] text-[18px] sm:leading-[27px]'>$300,00</p>
                    </span>
                </div>
            </section>
        </div>
    );
}

export default Catering;