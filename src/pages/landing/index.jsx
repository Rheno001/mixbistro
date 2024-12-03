import text from '../../assets/suya.png'
import text2 from '../../assets/suya-border.png'
import left from '../../assets/left.png'
import leftNav from '../../assets/leftNav.png'
import right from '../../assets/right.png'
import rightNav from '../../assets/rightNav.png'
import hero from '../../assets/hero.png'
import string from '../../assets/string.png'
import art from '../../assets/art.png'
import line from '../../assets/line.png'
import gal from '../../assets/gal.png'
import smallL from '../../assets/small-l.png'
import smallR from '../../assets/small-r.png'
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Slider from '../../components/Slider'
import Card from '../../components/Card'
import card1 from './../../assets/card1.png'
import card2 from './../../assets/card2.png'
import card3 from './../../assets/card3.png'
import food from './../../assets/food.png'
import baki from './../../assets/blackvector.png'
import babe from './../../assets/Frame 255.png'
import about from './../../assets/about.png'
import OrderCard from '../../components/OrderCard'
import { Swiper, SwiperSlide } from "swiper/react";
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

const Landing = () => {
    const { ref: ref3, inView: inView3 } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });
    const { ref: ref2, inView: inView2 } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });
    const { ref: ref1, inView: inView1 } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });
    const { ref: ref4, inView: inView4 } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });
    const { ref: ref5, inView: inView5 } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });
    const { ref: ref6, inView: inView6 } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });
    const { ref: ref7, inView: inView7 } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });
    const { ref: ref8, inView: inView8 } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });
    const { ref: ref9, inView: inView9 } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });
    const { ref: ref10, inView: inView10 } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });
    const { ref: ref11, inView: inView11 } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });
    const { ref: ref12, inView: inView12 } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });
    const { ref: ref13, inView: inView13 } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });
    const { ref: ref14, inView: inView14 } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });
    const { ref: ref15, inView: inView15 } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });

    return (<div className='bg-primary overflow-hidden'>
        <div className='flex flex-col w-full pt-[50px] gap-[15px] relative'>
            <div className="absolute flex justify-center z-[5] items-center inset-0 m-auto">
                <motion.div ref={ref2}
                    initial={{ scale: 0.5 }} // Start smaller (50% of the original size)
                    animate={{ scale: inView2 ? 1 : 0.5 }} // Enlarge to full size (100%)
                    transition={{ duration: 0.5, ease: "easeInOut" }} className='relative flex justify-center items-center'>
                    <img
                        src={left}
                        alt="Left Image"
                        className='absolute left-0 top-4 min-[1824px]:top-20 z-[20]'
                    />
                    <img
                        src={right}
                        alt="Right Image"
                        className='absolute right-0 top-4 min-[1824px]:top-20 z-[20]'
                    />
                    <img
                        src={string}
                        alt="Image"
                        className='absolute w-[50%] right-[6%] top-12 min-[1824px]:top-24 z-[20]'
                    />
                    <img
                        src={hero}
                        alt="Centered Image"
                        className='relative z-[10px] w-[47vw] min-[1824px]:w-[48vw]'
                    />
                </motion.div>
            </div>
            <motion.div
                ref={ref3}
                initial={{ opacity: 0, y: -200 }}
                animate={{
                    opacity: inView3 ? 1 : 0,
                    y: inView3 ? 0 : -200,
                }}
                transition={{ duration: 0.5 }}
                className='flex justify-between items-center px-[74px]'>
                <div className='relative flex flex-col items-start'>
                    <img src={smallL} alt="" /><img src={art} alt="" />
                </div>
                <div className='relative flex flex-col items-end'>
                    <img src={smallR} alt="" className='' /><img src={art} alt="" />
                </div>
            </motion.div>
            <motion.div ref={ref4}
                initial={{ opacity: 0, x: 600 }}
                animate={{
                    opacity: inView4 ? 1 : 0,
                    x: inView4 ? 0 : 600,
                }}
                transition={{ duration: 0.5 }}><img src={text} alt="" className='relative w-full z-0' /></motion.div>
            <div><img src={text2} alt="" className='relative w-full z-10' /></div>
            <motion.div ref={ref1}
                initial={{ opacity: 0, x: -600 }}
                animate={{
                    opacity: inView1 ? 1 : 0,
                    x: inView1 ? 0 : -600,
                }}
                transition={{ duration: 0.5 }}><img src={text} alt="" className='relative w-full z-10' /></motion.div>

            <div className='flex justify-center items-center text-primary mt-[50px] mb-[30px]'>
                <button className='bg-accent rounded-[5px] px-[62px] py-[22px] text-[25px] font-[600]'>Order Now</button>
            </div>
        </div>
        <Slider />

        <div className='pt-[80px] px-[5%]'>
            <motion.div ref={ref5}
                initial={{ opacity: 0, y: -200 }}
                animate={{
                    opacity: inView5 ? 1 : 0,
                    y: inView5 ? 0 : -200,
                }}
                transition={{ duration: 0.5 }} className='flex flex-col items-center'>
                <h1 className='text-center text-[70px] font-[600] text-accent leading-[84px] mb-[10px]'>Experience the  <br />Authentic Taste of Suya</h1>
                <img src={line} alt="" />
            </motion.div>
            <motion.div ref={ref6}
                initial={{ opacity: 0, y: 100 }}
                animate={{
                    opacity: inView6 ? 1 : 0,
                    y: inView6 ? 0 : 100,
                }}
                transition={{ duration: 0.5 }} className='flex justify-center items-center'>
                <img src={gal} alt="" />
            </motion.div>

            <div className='pt-[70px]'>
                <h1 className='text-center text-accent text-[40px] font-[600] pb-[20px]'>At Suya Mix Bistro</h1>
                <p className='text-center text-[25px] font-[500] leading-[38px] text-white pb-[30px]'>We bring the vibrant flavors of West Africa to your plate.  <br /> Our authentic suya is crafted with traditional spices and techniques, ensuring every bite is a celebration of culture.</p>

                <motion.div ref={ref7}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{
                        opacity: inView7 ? 1 : 0,
                        y: inView7 ? 0 : 100,
                    }}
                    transition={{ duration: 0.5 }} className='flex justify-center items-center gap-[24px] pb-[70px]'>
                    <Card img={card1} heading={'Explore Our Diverse Suya Flavor Selection'} para={'From spicy to savory, our suya flavors cater to every palate.'} />
                    <Card img={card2} heading={'Rooted in Heritage and Culinary Tradition'} para={'Each dish tells a story of our rich cultural heritage.'} />
                    <Card img={card3} heading={'Catering Services for Your Special Events'} para={'Let us bring the flavors of Nigeria to your next gathering.'} />
                </motion.div>
            </div>

            <div className='flex justify-between items-center mb-[70px]'>
                <motion.img ref={ref8}
                    initial={{ opacity: 0, x: -200 }}
                    animate={{
                        opacity: inView8 ? 1 : 0,
                        x: inView8 ? 0 : -200,
                    }}
                    transition={{ duration: 0.5 }} src={about} className='w-[60%]' alt="" />
                <motion.div ref={ref9}
                    initial={{ opacity: 0, x: 200 }}
                    animate={{
                        opacity: inView9 ? 1 : 0,
                        x: inView9 ? 0 : 200,
                    }}
                    transition={{ duration: 0.5 }} className='-ml-[50px] flex flex-col items-start'>
                    <div className='flex flex-col items-center'>
                        <h1 className='text-center text-[70px] font-[600] text-accent leading-[84px]'>About us</h1>
                        <img src={line} alt="" className='w-[70%] mt-[10px]' />
                    </div>
                    <p className='pt-[30px] text-[18px] font-[500] leading-[28px] text-white'>In the heart of San Antonio, Texas, a unique culinary adventure awaits—one that transports you to the bustling street corners of Northern Nigeria and the vibrant flavors of West Africa. At Suya Mix Bistro, we don&apos;t just serve meals; we serve a slice of heritage, wrapped in the warm, smoky spices of our traditional suya.</p>
                    <h2 className='text-accent text-[25px] font-[600] leading-[38px] pt-[30px]'>Our journey begins with a simple vision:</h2>
                    <p className='text-[18px] font-[500] leading-[28px] text-white'>to bring a taste like home to Texas. Suya, the beloved street food from West Africa, is much more than skewered meat; it&apos;s a cultural symphony of flavors, perfected by generations of street chefs.</p>
                </motion.div>
            </div>

            <div className='py-[70px]'>
                <motion.div ref={ref10}
                    initial={{ opacity: 0, y: -200 }}
                    animate={{
                        opacity: inView10 ? 1 : 0,
                        y: inView10 ? 0 : -200,
                    }}
                    transition={{ duration: 0.5 }} className='flex flex-col items-center'>
                    <h1 className='text-center text-[70px] font-[600] text-accent leading-[84px] mb-[10px] capitalize'>top dishes from our <br /> customer</h1>
                    <img src={line} alt="" />
                </motion.div>
                <motion.div ref={ref11}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{
                        opacity: inView11 ? 1 : 0,
                        y: inView11 ? 0 : 100,
                    }}
                    transition={{ duration: 0.5 }} className='flex justify-center items-center gap-[40px] mt-[80px] flex-col'>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        spaceBetween={40}
                        slidesPerView={3}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            nextEl: ".custom-next",
                            prevEl: ".custom-prev",
                        }}
                        className='flex justify-center items-center w-[100%]'
                    >
                        <SwiperSlide>
                            <OrderCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <OrderCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <OrderCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <OrderCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <OrderCard />
                        </SwiperSlide>
                    </Swiper>

                    <div className="flex gap-[60px] mt-[10px] justify-center items-center">
                        <div className="custom-next">
                            <img src={leftNav} alt="" />
                        </div>
                        <div className="custom-prev">
                            <img src={rightNav} alt="" />
                        </div>
                    </div>
                </motion.div>
            </div>
           
            <div className='pt-[70px]'>
                <motion.div ref={ref12}
                    initial={{ opacity: 0, y: -200 }}
                    animate={{
                        opacity: inView12 ? 1 : 0,
                        y: inView12 ? 0 : -200,
                    }}
                    transition={{ duration: 0.5 }} className='flex flex-col items-center'>
                    <h1 className='text-center text-[70px] font-[600] text-accent leading-[84px] mb-[10px] capitalize'>we serve healthy meals</h1>
                    <img src={line} alt="" />
                </motion.div>
                <motion.div ref={ref13}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{
                        opacity: inView13 ? 1 : 0,
                        y: inView13 ? 0 : 100,
                    }}
                    transition={{ duration: 0.5 }} className='flex justify-center items-center mt-[80px] pb-[70px]'>
                   <img src={food} alt="" className='w-[80%]' />
                </motion.div>
            </div>


        </div>
        <div className='flex justify-between items-center py-[70px] pl-[40px] bg-accent'>
                <motion.img ref={ref14}
                    initial={{ opacity: 0, x: -200 }}
                    animate={{
                        opacity: inView14 ? 1 : 0,
                        x: inView14 ? 0 : -200,
                    }}
                    transition={{ duration: 0.5 }} src={babe} className='w-[30%]' alt="" />
                <motion.div ref={ref15}
                    initial={{ opacity: 0, x: 200 }}
                    animate={{
                        opacity: inView15 ? 1 : 0,
                        x: inView15 ? 0 : 200,
                    }}
                    transition={{ duration: 0.5 }} className='-ml-[50px] flex flex-col items-center'>
                    <div className='flex flex-col items-center px-[20px]'>
                        <h1 className='text-center text-[70px] font-[600] text-primary leading-[84px]'>Enjoy Our Special Suya Burger</h1>
                        <img src={baki} alt="" className='w-[70%] mt-[10px]' />
                    </div>
                </motion.div>
            </div>

    </div>);
}

export default Landing;