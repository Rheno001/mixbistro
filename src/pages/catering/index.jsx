import { motion } from 'framer-motion'
import catering from '../../assets/catering.png'
import vector from '../../assets/Vector.png'
import ladies from '../../assets/2ladies.png'
import beefsalad from '../../assets/beefsalad.png'
import boygirl from '../../assets/boygirl.png'
import pic4 from '../../assets/pic4.png'
import elevateL from '../../assets/elL.png'
import elevateR from '../../assets/elR.png'
import elevate from '../../assets/elevate.png'
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
    const { ref: ref5, inView: inView5 } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });
    const { ref: ref11, inView: inView11 } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });
    const { ref: ref17, inView: inView17 } = useInView({
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
                    initial={{ opacity: 0, y: -100 }}
                    animate={{
                        opacity: inView4 ? 1 : 0,
                        y: inView4 ? 0 : -100,
                    }}
                    transition={{ duration: 0.5 }}
                    className='flex justify-center items-center px-[74px]'>
                    <div className='relative z-[200] flex flex-col items-center mt-[40px] sm:mt-[80px]'>
                        <p className='text-center text-[25px] lg:text-[70px] font-[600] text-accent lg:leading-[84px] mb-[10px]'>Our Catering Services</p>
                        <img src={vector} alt="Decorative Vector" className="vector-image w-[200px] lg:w-[350px] mt-2" />
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
                            slidesPerView={2}  // Default for mobile
                        breakpoints={{
                            640: {  // sm breakpoint
                                slidesPerView: 3
                            }
                        }}
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
                                <img src={ladies} alt="Decorative Vector" className="slider-image w-full" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={beefsalad} alt="Decorative Vector" className="slider-image w-full" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={boygirl} alt="Decorative Vector" className="slider-image w-full" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={pic4} alt="Decorative Vector" className="slider-image w-full" />
                            </SwiperSlide>
                        </Swiper>
                    </motion.div>
                    <div className='flex items-center flex-col px-[70px] py-[60px]'>
                        <p className='text-center text-accent text-[15px] lg:text-[25px] font-[600]'>Looking to elevate your next event with an unforgettable culinary experience?</p>
                        <span className='mt-[10px] lg:mt-[5px] text-center text-[10px] lg:text-[16px] font-[500] lg:leading-[38px] text-white'>Suya Mix Bistro is here to spice things up! Whether it’s a small social gathering, a grand celebration, or a corporate event, we offer catering services tailored to meet your needs.  </span>
                    </div>
                </div>




              <div className='py-[50px] px-[50px] lg:px-[150px]'>
              <motion.div
                    ref={ref5}
                    initial={{ opacity: 0, y: -100 }}
                    animate={{
                        opacity: inView5 ? 1 : 0,
                        y: inView4 ? 0 : -100,
                    }}
                    transition={{ duration: 0.5 }}
                    className='flex justify-center items-center px-[74px]'>
                    <div className='flex flex-col items-center mt-[20px]'>
                        <p className='text-center text-[25px] lg:text-[70px] font-[600] text-accent lg:leading-[84px] mb-[10px]'>Our Catering Options</p>
                        <img src={vector} alt="Decorative Vector" className="vector-image w-[200px] lg:w-[350px] mt-2" />
                    </div>
                </motion.div>
                <div className='relative flex justify-center items-center'>
                    <motion.img ref={ref17}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{
                            opacity: inView17 ? 1 : 0,
                            x: inView17 ? 0 : -50,
                        }}
                        transition={{ duration: 0.5 }} src={elevateL} alt="" className='absolute left-1 lg:-left-[10%] w-[20%] lg:w-[30%]' />
                    <motion.img ref={ref17}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{
                            opacity: inView17 ? 1 : 0,
                            x: inView17 ? 0 : 50,
                        }}
                        transition={{ duration: 0.5 }} src={elevateR} alt="" className='absolute right-1 lg:-right-[10%] w-[20%] lg:w-[30%]' />
                    <img src={elevate} alt="" className='w-[70%]' />
                </div>


                <div className='flex items-center px-[40px] sm:px-[80px] py-[50px] sm:w-[72%] mx-auto relative z-[500]'>
                    <span className='text-center sm:mx-[20px]'>
                        <h2 className='text-center text-accent text-[20px] lg:text-[35px] font-[600] pb-[10px] lg:pb-[20px]'>Half Pan Party</h2>
                        <h3 className='text-center text-[14px] lg:text-[25px] font-[500] lg:leading-[38px] text-white pb-[15px] lg:pb-[30px]'>Mild / Spicy Grilled beef garnished with onion & cucumber.</h3>
                        <p className='text-accent font-[600] text-[18px] sm:leading-[27px]'>$150,00</p>
                    </span>
                    <span className='text-center sm:mx-[20px]'>
                        <h2 className='text-center text-accent text-[20px] lg:text-[35px] font-[600] pb-[10px] lg:pb-[20px]'>Full Pan Snack</h2>
                        <h3 className='text-center text-[14px] lg:text-[25px] font-[500] lg:leading-[38px] text-white pb-[15px] lg:pb-[30px]'>Mild / Spicy Grilled chicken garnished with onion & cucumber.</h3>
                        <p className='text-accent font-[600] text-[18px] sm:leading-[27px]'>$300,00</p>
                    </span>
                </div>
              </div>  


              <div>
              <motion.div
                    ref={ref5}
                    initial={{ opacity: 0, y: -100 }}
                    animate={{
                        opacity: inView5 ? 1 : 0,
                        y: inView4 ? 0 : -100,
                    }}
                    transition={{ duration: 0.5 }}
                    className='flex justify-center items-center px-[74px]'>
                    <div className='relative z-[200] flex flex-col items-center mt-[40px] sm:mt-[80px]'>
                        <p className='text-center text-[25px] lg:text-[70px] font-[600] text-accent lg:leading-[84px] mb-[10px]'>Lets Get Started</p>
                        <img src={vector} alt="Decorative Vector" className="vector-image w-[200px] lg:w-[350px] mt-2" />
                    </div>
                </motion.div>
                <div>
                    <p></p>
                </div>
                <div className='flex items-center justify-center'>

                </div>


              </div>

            </section>
        </div>
    );
}

export default Catering;