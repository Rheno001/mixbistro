import text from '../../assets/suya.png'
import text2 from '../../assets/suya-border.png'
import left from '../../assets/left.png'
import leftNav from '../../assets/leftNav.png'
import right from '../../assets/right.png'
import rightNav from '../../assets/rightNav.png'
import hero from '../../assets/hero.png'
import string from '../../assets/string.png'
import art from '../../assets/art.png'
import elevateL from '../../assets/elL.png'
import elevateR from '../../assets/elR.png'
import elevate from '../../assets/elevate.png'
import line from '../../assets/line.png'
import gal from '../../assets/gal.png'
import smallL from '../../assets/small-l.png'
import smallR from '../../assets/small-r.png'
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Slider from '../../components/Slider'
import Card from '../../components/Card'
import shipping from './../../assets/shipping.png'
import sh0pMob from './../../assets/shopMob.png'
import card1 from './../../assets/card1.png'
import card2 from './../../assets/card2.png'
import card3 from './../../assets/card3.png'
import food from './../../assets/food.png'
import foodMob from './../../assets/foodMob.png'
import baki from './../../assets/blackvector.png'
import babe from './../../assets/Frame 255.png'
import babeMob from './../../assets/enjoyMob.png'
import about from './../../assets/about.png'
import order1 from './../../assets/order1.png'
import slide2 from './../../assets/slide2.png'
import slide3 from './../../assets/slide3.png'
import aboutMob from './../../assets/aboutMob.png'
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
    // const { ref: ref3, inView: inView3 } = useInView({
    //     triggerOnce: false,
    //     threshold: 0.5,
    // });
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
    const { ref: ref16, inView: inView16 } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });
    const { ref: ref19, inView: inView19 } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });
    const { ref: ref17, inView: inView17 } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });
    const { ref: ref18, inView: inView18 } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });
    const { ref: ref20, inView: inView20 } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });
    const { ref: ref21, inView: inView21 } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });
    const { ref: ref22, inView: inView22 } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });
    const { ref: ref23, inView: inView23 } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });
    const { ref: ref24, inView: inView24 } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });
    const { ref: ref25, inView: inView25 } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });

    return (<div className='bg-primary overflow-hidden hero'>
        <div className='flex flex-col w-full pt-[30px] lg:pt-[50px] gap-[15px] relative'>
            <div className="absolute flex justify-center items-center mt-[30px] lg:mt-0 inset-x-0 z-[5] lg:inset-0 m-auto lg:mx-0">

                <motion.div ref={ref2}
                    initial={{ scale: 0.5 }} // Start smaller (50% of the original size)
                    animate={{ scale: inView2 ? 1 : 0.5 }} // Enlarge to full size (100%)
                    transition={{ duration: 0.5, ease: "easeInOut" }} className='relative flex justify-center items-center'>
                    <img
                        src={left}
                        alt="Left Image"
                        className='absolute w-[12%] lg:w-auto left-0 top-4 min-[1824px]:top-20 z-[20]'
                    />
                    <img
                        src={right}
                        alt="Right Image"
                        className='absolute w-[12%] lg:w-auto right-0 top-4 min-[1824px]:top-20 z-[20]'
                    />
                    <img
                        src={string}
                        alt="Image"
                        className='absolute w-[38%] lg:w-[50%] right-[6%] top-12 min-[1824px]:top-24 z-[20]'
                    />
                    <img
                        src={hero}
                        alt="Centered Image"
                        className='relative z-[10px]  w-[60vw] lg:w-[47vw] min-[1824px]:w-[48vw]'
                    />
                </motion.div>
            </div>

            <motion.div
                // ref={ref3}
                initial={{ opacity: 0, y: -100 }}
                animate={{
                    opacity:  1,
                    y:  0,
                }}
                transition={{ duration: 0.5 }}
                className='flex lg:hidden justify-between relative z-[200] pb-[30px] w-full items-center pt-[0px] px-[20px] lg:px-[74px]'>
                <div className='relative flex flex-col items-start'>
                    <img src={smallL} alt="" className='lg:w-[auto] w-[10%]' /><img src={art} alt="" className='w-[40%] lg:w-auto' />
                </div>
                <div className='relative flex flex-col items-end'>
                    <img src={smallR} alt="" className='lg:w-[auto] w-[10%]' /><img src={art} alt="" className='w-[40%] lg:w-auto' />
                </div>
            </motion.div>
            <motion.div
                ref={ref25}
                initial={{ opacity: 0, y: -100 }}
                animate={{
                    opacity: inView25 ? 1 : 0,
                    y: inView25 ? 0 : -100,
                }}
                transition={{ duration: 0.5 }}
                className='lg:flex hidden justify-between relative z-[200] pb-[30px] w-full items-center pt-[0px] px-[20px] lg:px-[74px]'>
                <div className='relative flex flex-col items-start'>
                    <img src={smallL} alt="" className='lg:w-[auto] w-[10%]' /><img src={art} alt="" className='w-[40%] lg:w-auto' />
                </div>
                <div className='relative flex flex-col items-end'>
                    <img src={smallR} alt="" className='lg:w-[auto] w-[10%]' /><img src={art} alt="" className='w-[40%] lg:w-auto' />
                </div>
            </motion.div>

            <motion.div ref={ref4}
                initial={{ opacity: 0, x: 100 }}
                animate={{
                    opacity: inView4 ? 1 : 0,
                    x: inView4 ? 0 : 100,
                }}
                transition={{ duration: 0.5 }}><img src={text} alt="" className='relative w-full z-0' /></motion.div>
            <div><img src={text2} alt="" className='relative w-full z-10' /></div>
            <motion.div ref={ref1}
                initial={{ opacity: 0, x: -100 }}
                animate={{
                    opacity: inView1 ? 1 : 0,
                    x: inView1 ? 0 : -100,
                }}
                transition={{ duration: 0.5 }}><img src={text} alt="" className='relative w-full z-10' />
            </motion.div>

            <div className='flex justify-center items-center text-primary mt-[50px] mb-[30px]'>
                <button className='bg-accent rounded-[5px] px-[14px] lg:px-[62px] py-[7px] lg:py-[22px] text-[16px] lg:text-[25px] font-[600]'>Order Now</button>
            </div>
        </div>
        <div className='lg:pt-[70px]'>
            <Slider />
        </div>
        <div className='pt-[20px] lg:pt-[70px] px-[10%] lg:px-[5%]'>
            <motion.div ref={ref5}
                initial={{ opacity: 0, y: -200 }}
                animate={{
                    opacity: inView5 ? 1 : 0,
                    y: inView5 ? 0 : -200,
                }}
                transition={{ duration: 0.5 }} className='flex flex-col items-center'>
                <h1 className='text-center text-[20px] lg:text-[70px] font-[600] text-accent lg:leading-[84px] mb-[10px]'>Experience the  <br />Authentic Taste of Suya</h1>
                <img src={line} alt="" className='w-[40%] lg:w-auto' />
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

            <div className='pt-[20px] lg:pt-[70px]'>
                <h1 className='text-center text-accent text-[20px] lg:text-[40px] font-[600] pb-[10px] lg:pb-[20px]'>At Suya Mix Bistro</h1>
                <p className='text-center text-[14px] lg:text-[25px] font-[500] lg:leading-[38px] text-white pb-[15px] lg:pb-[30px]'>We bring the vibrant flavors of West Africa to your plate.  <br className='hidden lg:block' /> Our authentic suya is crafted with traditional spices and techniques, ensuring every bite is a celebration of culture.</p>

                <motion.div ref={ref7}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{
                        opacity: inView7 ? 1 : 0,
                        y: inView7 ? 0 : 100,
                    }}
                    transition={{ duration: 0.5 }} className='flex justify-center items-center gap-[24px] pb-[70px] flex-col lg:flex-row'>
                    <Card img={card1} heading={'Explore Our Diverse Suya Flavor Selection'} para={'From spicy to savory, our suya flavors cater to every palate.'} />
                    <Card img={card2} heading={'Rooted in Heritage and Culinary Tradition'} para={'Each dish tells a story of our rich cultural heritage.'} />
                    <Card img={card3} heading={'Catering Services for Your Special Events'} para={'Let us bring the flavors of Nigeria to your next gathering.'} />
                </motion.div>
            </div>

            <div className='flex flex-col lg:flex-row justify-between items-center mb-[20px] lg:mb-[70px]'>
                <motion.img ref={ref24}
                    initial={{ opacity: 0, x: -200 }}
                    animate={{
                        opacity: inView24 ? 1 : 0,
                        x: inView24 ? 0 : -200,
                    }}
                    transition={{ duration: 0.5 }} src={about} className='hidden lg:block  lg:w-[60%]' alt="" />
                <motion.img ref={ref8}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{
                        opacity: inView8 ? 1 : 0,
                        x: inView8 ? 0 : -100,
                    }}
                    transition={{ duration: 0.5 }} src={aboutMob} className='lg:hidden lg:w-[60%]' alt="" />
                <motion.div ref={ref9}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{
                        opacity: inView9 ? 1 : 0,
                        x: inView9 ? 0 : 100,
                    }}
                    transition={{ duration: 0.5 }} className='lg:-ml-[50px] flex flex-col items-start'>
                    <div className='flex flex-col items-center'>
                        <h1 className='text-center text-[20px] lg:text-[70px] font-[600] text-accent lg:leading-[84px]'>About us</h1>
                        <img src={line} alt="" className='w-[50%] lg:w-[70%] mt-[5px] lg:mt-[10px]' />
                    </div>
                    <p className='pt-[15px] lg:pt-[30px] text-[14px] lg:text-[18px] font-[500] lg:leading-[28px] text-center lg:text-left text-white'>In the heart of San Antonio, Texas, a unique culinary adventure awaits—one that transports you to the bustling street corners of Northern Nigeria and the vibrant flavors of West Africa. At Suya Mix Bistro, we don&apos;t just serve meals; we serve a slice of heritage, wrapped in the warm, smoky spices of our traditional suya.</p>
                    <h2 className='text-accent text-[14px] text-center lg:text-left lg:text-[25px] font-[600] w-full lg:leading-[38px] pt-[15px] lg:pt-[30px]'>Our journey begins with a simple vision:</h2>
                    <p className='text-[14px] lg:text-[18px] font-[500] text-center lg:text-left lg:leading-[28px] text-white'>to bring a taste like home to Texas. Suya, the beloved street food from West Africa, is much more than skewered meat; it&apos;s a cultural symphony of flavors, perfected by generations of street chefs.</p>
                </motion.div>
            </div>

            <div className='py-[20px] lg:py-[70px]'>
                <motion.div ref={ref10}
                    initial={{ opacity: 0, y: -200 }}
                    animate={{
                        opacity: inView10 ? 1 : 0,
                        y: inView10 ? 0 : -200,
                    }}
                    transition={{ duration: 0.5 }} className='flex flex-col items-center'>
                    <h1 className='text-center text-[20px] lg:text-[70px] font-[600] text-accent lg:leading-[84px] mb-[5px] lg:mb-[10px] capitalize'>top dishes from our <br /> customer</h1>
                    <img src={line} alt="" className='w-[50%] lg:w-auto' />
                </motion.div>
                <motion.div ref={ref11}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{
                        opacity: inView11 ? 1 : 0,
                        y: inView11 ? 0 : 100,
                    }}
                    transition={{ duration: 0.5 }} className='flex justify-center items-center gap-[40px] mt-[20px] lg:mt-[80px] flex-col'>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        spaceBetween={40}
                        slidesPerView={1} // Default value for smaller screens
                        breakpoints={{
                            640: {
                                slidesPerView: 2, // 2 slides per view for screens >= 640px
                            },
                            1024: {
                                slidesPerView: 3, // 3 slides per view for screens >= 1024px
                            },
                            1440: {
                                slidesPerView: 3, // 4 slides per view for screens >= 1440px
                            },
                        }} autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            nextEl: ".custom-next",
                            prevEl: ".custom-prev",
                        }}
                        className='flex justify-center items-center w-[100%] min-[1824px]:w-[80%]'
                    >
                        <SwiperSlide>
                            <OrderCard img={order1} head={'BOSS! Beef Suya'} desc={'Mild / Spicy Grilled beef garnished with onion & cucumber.'} amt={'$35.00'} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <OrderCard img={slide2} head={'Suya Mix Burger'} desc={'Mild / Spicy Grilled beef garnished with onion & cucumber.'} amt={'$12.99'} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <OrderCard img={slide3} head={'Groovy Green Salad'} desc={'Mild / Spicy Grilled beef garnished with onion & cucumber.'} amt={'$15.00'} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <OrderCard img={order1} head={'BOSS! Beef Suya'} desc={'Mild / Spicy Grilled beef garnished with onion & cucumber.'} amt={'$35.00'} />
                        </SwiperSlide>
                    </Swiper>

                    <div className="flex gap-[30px] lg:gap-[60px] lg:mt-[10px] justify-center items-center">
                        <div className="custom-next">
                            <img src={leftNav} alt="" className='w-[30px] lg:w-auto' />
                        </div>
                        <div className="custom-prev">
                            <img src={rightNav} alt="" className='w-[30px] lg:w-auto' />
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className='pt-[20px] lg:pt-[70px]'>
                <motion.div ref={ref12}
                    initial={{ opacity: 0, y: -200 }}
                    animate={{
                        opacity: inView12 ? 1 : 0,
                        y: inView12 ? 0 : -200,
                    }}
                    transition={{ duration: 0.5 }} className='flex flex-col items-center'>
                    <h1 className='text-center text-[20px] lg:text-[70px] font-[600] text-accent lg:leading-[84px] mb-[5px] lg:mb-[10px] capitalize'>we serve healthy meals</h1>
                    <img src={line} alt="" className='w-[50px] lg:w-auto' />
                </motion.div>
                <motion.div ref={ref13}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{
                        opacity: inView13 ? 1 : 0,
                        y: inView13 ? 0 : 100,
                    }}
                    transition={{ duration: 0.5 }} className='hidden lg:flex justify-center items-center mt-[80px] pb-[70px]'>
                    <img src={food} alt="" className='lg:w-[80%]' />
                </motion.div>
                <motion.div ref={ref21}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{
                        opacity: inView21 ? 1 : 0,
                        y: inView21 ? 0 : 100,
                    }}
                    transition={{ duration: 0.5 }} className='flex lg:hidden justify-center items-center mt-[20px] lg:mt-[80px] pb-[20px] lg:pb-[70px]'>
                    <img src={foodMob} alt="" className='w-full' />
                </motion.div>
            </div>
        </div>

        <div className='flex justify-between flex-col-reverse lg:flex-row items-center py-[20px] lg:py-[70px] px-[5%] bg-accent'>
            <motion.img ref={ref14}
                initial={{ opacity: 0, x: -100 }}
                animate={{
                    opacity: inView14 ? 1 : 0,
                    x: inView14 ? 0 : -100,
                }}
                transition={{ duration: 0.5 }} src={babe} className='hidden lg:block lg:w-[30%]' alt="" />
            <div className='flex justify-center items-center text-accent my-[10px] lg:hidden'>
                <button className='bg-primary rounded-[5px] px-[14px] lg:px-[62px] py-[7px] lg:py-[22px] text-[16px] lg:text-[25px] font-[600]'>Order Now</button>
            </div>
            <motion.img ref={ref22}
                initial={{ opacity: 0, x: -100 }}
                animate={{
                    opacity: inView22 ? 1 : 0,
                    x: inView22 ? 0 : -100,
                }}
                transition={{ duration: 0.5 }} src={babeMob} className='lg:hidden mt-[10px] lg:w-[30%]' alt="" />

            <motion.div ref={ref15}
                initial={{ opacity: 0, x: 100 }}
                animate={{
                    opacity: inView15 ? 1 : 0,
                    x: inView15 ? 0 : 100,
                }}
                transition={{ duration: 0.5 }} className='flex flex-col items-center'>
                <div className='flex flex-col items-center px-[20px]'>
                    <h1 className='text-center text-[20px] lg:text-[70px] font-[600] text-primary lg:leading-[84px]'>Enjoy Our Special <br className='lg:hidden' /> Suya <br className='hidden lg:block' /> Burger</h1>
                    <img src={baki} alt="" className='w-[70%] mt-[5px] lg:mt-[10px]' />
                </div>
            </motion.div>
        </div>

        <div className='pt-[20px] bg-[#B56B47] noise lg:bg-primary lg:pt-[70px] px-[5%]'>
            <motion.div ref={ref16}
                initial={{ opacity: 0, y: -100 }}
                animate={{
                    opacity: inView16 ? 1 : 0,
                    y: inView16 ? 0 : -100,
                }}
                transition={{ duration: 0.5 }} className='flex flex-col items-center'>
                <h1 className='text-center text-[20px] lg:text-[70px] font-[600] text-accent lg:leading-[84px] mb-[5px] lg:mb-[10px]'>Elevate Your Events with <br /> Our  Catering Services</h1>
                <img src={line} alt="" className='w-[50%] lg:auto' />
            </motion.div>
            <motion.div className='flex justify-center flex-col items-center mt-[20px] lg:mt-[80px] p-[10px] lg:pb-[70px] relative'>

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

                <p className='text-center lg:w-[50%] text-[14px] lg:text-[25px] font-[500] lg:leading-[37px] text-white pt-[15px] lg:pt-[50px]'>At Suya Mix Bistro, we specialize in catering that brings the rich flavors of West Africa to your gatherings. Whether it&apos;s a wedding, corporate event, or a family celebration, our team is ready to deliver an unforgettable culinary experience.</p>

                <div className='flex justify-center items-center text-primary lg:mt-[50px] lg:mb-[30px] mt-[20px] mb-[20px]'>
                    <button className='bg-accent rounded-[5px] px-[14px] lg:px-[62px] py-[7px] lg:py-[22px] text-[16px] lg:text-[25px] font-[600]'>View More</button>
                </div>
            </motion.div>
        </div>

        <div className='px-[5%] py-[20px] lg:py-[70px]'>
            <motion.div ref={ref20}
                initial={{ opacity: 0, y: -100 }}
                animate={{
                    opacity: inView20 ? 1 : 0,
                    y: inView20 ? 0 : -100,
                }}
                transition={{ duration: 0.5 }} className='flex flex-col items-center'>
                <h1 className='text-center text-[20px] lg:text-[70px] font-[600] text-accent lg:leading-[84px] mb-[5px] lg:mb-[10px] capitalize'>shipping nationwide in uS</h1>
                <img src={line} alt="" />
            </motion.div>
            <div className='flex flex-col lg:flex-row justify-between items-center lg:gap-[50px] pt-[20px] lg:pt-[80px]'>
                <motion.img ref={ref23}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{
                        opacity: inView23 ? 1 : 0,
                        x: inView23 ? 0 : -100,
                    }}
                    transition={{ duration: 0.5 }} src={shipping} className='w-[65%] hidden lg:block' alt="" />
                <motion.img ref={ref18}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{
                        opacity: inView18 ? 1 : 0,
                        x: inView18 ? 0 : -100,
                    }}
                    transition={{ duration: 0.5 }} src={sh0pMob} className='w-[100%] lg:hidden' alt="" />
                <motion.div ref={ref19}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{
                        opacity: inView19 ? 1 : 0,
                        x: inView19 ? 0 : 100,
                    }}
                    transition={{ duration: 0.5 }} className='flex lg:w-[35%] flex-col items-start'>
                    <h2 className='text-accent text-[16px] lg:text-[40px] font-[600] lg:leading-[48px] pt-[10px] lg:pt-[30px] text-center lg:text-left w-full'>Enjoy Suya Delivered Right to Your Door</h2>
                    <p className='pt-[10px] lg:pt-[30px] text-center lg:text-left text-[14px] lg:text-[18px] font-[500] lg:leading-[28px] text-white'>Experience the rich, smoky flavors of our suya, now available for shipping across the USA. No matter where you are, you can indulge in our authentic dishes and bring a taste of Nigeria to your home.</p>

                    <div className='flex justify-center w-full items-center text-primary lg:mt-[50px] mt-[10px] lg:mb-[30px]'>
                        <button className='bg-accent rounded-[5px] px-[15px] lg:px-[62px] lg:py-[20px] py-[7px] lg:text-[25px] font-[600]'>View More</button>
                    </div>
                </motion.div>
            </div>
        </div>

    </div>);
}

export default Landing;