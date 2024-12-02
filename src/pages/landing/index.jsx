import text from '../../assets/suya.png'
import text2 from '../../assets/suya-border.png'
import left from '../../assets/left.png'
import right from '../../assets/right.png'
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
                <h1 className='text-center text-[70px] font-[600] text-accent leading-[84px]'>Experience the  <br />Authentic Taste of Suya</h1>
                <img src={line} alt="" />
            </motion.div>
            <motion.div ref={ref6}
                initial={{ opacity: 0, y: 200 }}
                animate={{
                    opacity: inView6 ? 1 : 0,
                    y: inView6 ? 0 : 200,
                }}
                transition={{ duration: 0.5 }} className='flex justify-center items-center'><img src={gal} alt="" /></motion.div>

            <div className='pt-[70px]'>
                <h1 className='text-center text-accent text-[40px] font-[600] pb-[20px]'>At Suya Mix Bistro</h1>
                <p className='text-center text-[25px] font-[500] leading-[38px] text-white pb-[30px]'>We bring the vibrant flavors of West Africa to your plate.  <br /> Our authentic suya is crafted with traditional spices and techniques, ensuring every bite is a celebration of culture.</p>
            </div>
        </div>

    </div>);
}

export default Landing;