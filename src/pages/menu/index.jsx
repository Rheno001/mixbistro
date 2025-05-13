import { motion } from 'framer-motion'
import { useInView } from "react-intersection-observer";
import logo from '../../assets/logo.png'
import vector from '../../assets/Vector.png'
import frame120 from '../../assets/des.png'
import des1 from '../../assets/des1.png'
import des2 from '../../assets/des2.png'
import glass from '../../assets/glass.png'
import GloriaButton from '../../components/GloriaFood';

const Menu = () => {
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  const { ref: ref3, inView: inView3 } = useInView({
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

  return (
    <div className="menu-container bg-primary relative overflow-hidden">
      {/* <img src={noise} className='absolute z-[100000] w-screen object-cover h-full' alt="" /> */}
      <motion.img
        src={logo}
        alt="Restaurant Logo"
        className="px-[65px] bg-primary pt-8 pb-10 sm:pt-20"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          bounce: 0.7,
          duration: 2.5
        }}
      />
      <section className="hero-section bg-primary py-[20px] sm:py-[70px] px-[10%] lg:px-[80px] gap-[28px]">
        <motion.div
          ref={ref1}
          initial={{ opacity: 0, y: -100 }}
          animate={{
            opacity: inView1 ? 1 : 0,
            y: inView1 ? 0 : -100,
          }}
          transition={{ duration: 0.5 }}
          className='flex justify-center items-center px-[74px]'>
          <div className='relative flex flex-col lg:mt-[80px] sm:mt-[5px] items-center'>
            <p className='text-accent font-[600] text-[40px] sm:text-[70px] leading-[60px] font-mont text-center'>Suya</p>
            <img src={vector} alt="Decorative Vector" className="vector-image w-[250px] sm:mt-4" />
          </div>
        </motion.div>
        <div className='suya flex flex-col lg:flex-row items-center gap-[35px] pt-[10px] sm:pt-[50px]'>
          <motion.img
            ref={ref8}
            src={frame120}
            alt="Frame 120"
            className='w-[100%] sm:w-[60%] h-[100%] sm:h-[60%]'
            initial={{ x: 1, opacity: 0 }}
            animate={{
              x: inView8 ? 0 : -100,
              opacity: inView8 ? 1 : 0
            }}
            transition={{
              type: "spring",
              bounce: 0.4,
              duration: 1
            }}
          />
          <motion.div
            ref={ref9}
            className='text font-mont'
            initial={{ x: 100, opacity: 0 }}
            animate={{
              x: inView9 ? 0 : 100,
              opacity: inView9 ? 1 : 0
            }}
            transition={{
              type: "spring",
              bounce: 0.4,
              duration: 1
            }}
          >
            <span className='gap-[11px] text-center lg:text-left pb-4 flex flex-col border-b-2 border-dashed border-orange'>
              <h2 className='text-accent  text-[30px] lg:text-[40px] leading-[48px] font-[600]'>Large</h2>
              <h3 className='text-white font-[500] text-[20px] leading-[37.5px]'>Mild / Spicy Grilled beef garnished with onion & cucumber.</h3>
              <p className='text-accent font-[600] text-[18px] leading-[27px]'>$70,00</p>
            </span>
            <span className='gap-[11px] text-center lg:text-left py-4 flex flex-col border-b-2 border-dashed border-orange'>
              <h2 className='text-accent  text-[30px] lg:text-[40px] leading-[48px] font-[600]'>Medium</h2>
              <h3 className='text-white font-[500] text-[20px] leading-[37.5px]'>Mild / Spicy Grilled chicken garnished with onion & cucumber.</h3>
              <p className='text-accent font-[600] text-[18px] leading-[27px]'>$50,00</p>
            </span>
            <span className='gap-[11px] text-center lg:text-left py-4 flex flex-col border-b-2 border-dashed border-orange'>
              <h2 className='text-accent  text-[30px] lg:text-[40px] leading-[48px] font-[600]'>Small</h2>
              <h3 className='text-white font-[500] text-[20px] leading-[37.5px]'>Mild / Spicy Grilled chicken wings garnished with onion & cucumber.</h3>
              <p className='text-accent font-[600] text-[18px] leading-[27px]'>$30,00</p>
            </span>
            {/*<Link to={'/catering#order-now'} className='flex relative z-[100000000] items-center justify-center lg:justify-start'><button className='bg-accent hero rounded-sm text-primary text-15px lg:text-[25px] font-semibold w-[120px] lg:w-[240px] h-[50px] lg:h-[65px] p-[10px] gap-[10px] mt-4'>Order Now </button></Link>*/}
             
             <div className='flex items-center justify-center lg:justify-start mt-[10px]'>
              <GloriaButton/>
             </div>
          </motion.div>
        </div>
      </section>

      <section className="hero-section bg-primary py-[20px] sm:py-[70px] px-[10%] lg:px-[80px] gap-[28px]">
        <motion.div
          ref={ref2}
          initial={{ opacity: 0, y: -200 }}
          animate={{
            opacity: inView2 ? 1 : 0,
            y: inView2 ? 0 : -200,
          }}
          transition={{ duration: 0.5 }}
          className='flex justify-center items-center px-50px sm:px-[74px]'>
          <div className='relative flex flex-col mt-[80px] sm:mt-[5px] items-center'>
            <p className='text-accent font-[600] text-[30px] sm:text-[70px] leading-[60px] font-mont text-center'>Vegetables</p>
            <img src={vector} alt="Decorative Vector" className="vector-image w-[250px] sm:mt-4" />
          </div>
        </motion.div>
        <div className='flex flex-col lg:flex-row items-center gap-[35px] pt-[10px] sm:pt-[50px]'>
          <motion.img
            ref={ref5}
            src={des1}
            alt="Frame 120"
            className='w-[100%] sm:w-[60%] h-[100%] sm:h-[60%]'
            initial={{ x: -100, opacity: 0 }}
            animate={{
              x: inView5 ? 0 : -100,
              opacity: inView5 ? 1 : 0
            }}
            transition={{
              type: "spring",
              bounce: 0.4,
              duration: 1
            }}
          />
          <motion.div
            ref={ref10}
            className='text font-mont'
            initial={{ x: 100, opacity: 0 }}
            animate={{
              x: inView10 ? 0 : 100,
              opacity: inView10 ? 1 : 0
            }}
            transition={{
              type: "spring",
              bounce: 0.4,
              duration: 1
            }}
          >
            <span className='gap-[11px] text-center lg:text-left pb-4 flex flex-col border-b-2 border-dashed border-orange'>
              <h2 className='text-accent  text-[30px] lg:text-[40px] leading-[48px] font-[600]'>Large</h2>
              <h3 className='text-white font-[500] text-[20px] leading-[37.5px]'>Fresh greens, crisp veggies, creamy avocado, and tangy vinaigrette in every bite.</h3>
              <p className='text-accent font-[600] text-[18px] leading-[27px]'>$15,00</p>
            </span>
            <span className='gap-[11px] text-center lg:text-left py-4 flex flex-col border-b-2 border-dashed border-orange'>
              <h2 className='text-accent  text-[30px] lg:text-[40px] leading-[48px] font-[600]'>Medium</h2>
              <h3 className='text-white font-[500] text-[20px] leading-[37.5px]'>Fresh greens, crisp veggies, creamy avocado, and tangy vinaigrette in every bite.</h3>
              <p className='text-accent font-[600] text-[18px] leading-[27px]'>$10,00</p>
            </span>
            <span className='gap-[11px] text-center lg:text-left py-4 flex flex-col border-b-2 border-dashed border-orange'>
              <h2 className='text-accent  text-[30px] lg:text-[40px] leading-[48px] font-[600]'>Small</h2>
              <h3 className='text-white font-[500] text-[20px] leading-[37.5px]'>Fresh greens, crisp veggies, creamy avocado, and tangy vinaigrette in every bite.</h3>
              <p className='text-accent font-[600] text-[18px] leading-[27px]'>$5,00</p>
            </span>
            {/*<Link to={'/catering#order-now'} className='flex relative z-[100000000] items-center justify-center lg:justify-start'><button className='bg-accent hero rounded-sm text-primary text-15px lg:text-[25px] font-semibold w-[120px] lg:w-[240px] h-[50px] lg:h-[65px] p-[10px] gap-[10px] mt-4'>Order Now </button></Link>*/}
            <div className='flex items-center justify-center lg:justify-start mt-[10px]'>
              <GloriaButton/>
             </div>
          </motion.div>
        </div>

      </section>
      <section className="hero-section bg-primary py-[20px] sm:py-[70px] px-[10%] lg:px-[80px] gap-[28px]">
        <motion.div
          ref={ref3}
          initial={{ opacity: 0, y: -200 }}
          animate={{
            opacity: inView3 ? 1 : 0,
            y: inView3 ? 0 : -200,
          }}
          transition={{ duration: 0.5 }}
          className='flex justify-center items-center sm:px-[74px]'>
          <div className='relative flex flex-col mt-[80px] sm:mt-[5px] items-center'>
            <p className='text-accent font-[600] text-[40px] sm:text-[70px] leading-[60px] font-mont text-center'>Suya Mix Burger</p>
            <img src={vector} alt="Decorative Vector" className="vector-image w-[250px] sm:mt-4" />
          </div>
        </motion.div>
        <div className='flex flex-col lg:flex-row items-center gap-[35px] pt-[10px] sm:pt-[50px]'>
          <motion.img
            ref={ref6}
            src={des2}
            alt="Frame 120"
            className='w-[100%] sm:w-[60%] h-[100%] sm:h-[60%]'
            initial={{ x: -100, opacity: 0 }}
            animate={{
              x: inView6 ? 0 : -100,
              opacity: inView6 ? 1 : 0
            }}
            transition={{
              type: "spring",
              bounce: 0.4,
              duration: 1
            }}
          />
          <motion.div
            ref={ref11}
            className='text font-mont'
            initial={{ x: 100, opacity: 0 }}
            animate={{
              x: inView11 ? 0 : 100,
              opacity: inView11 ? 1 : 0
            }}
            transition={{
              type: "spring",
              bounce: 0.4,
              duration: 1
            }}
          >
            <span className='gap-[11px] text-center lg:text-left py-4 flex flex-col border-b-2 border-dashed border-orange'>
              <h2 className='text-accent  text-[30px] lg:text-[40px] leading-[48px] font-[600]'>Burger Suya</h2>
              <h3 className='text-white font-[500] text-[20px] leading-[37.5px]'>A flavorful burger with tender suya-spiced beef, fresh toppings, and a creamy kick, all in a soft bun.</h3>
              <p className='text-accent font-[600] text-[18px] leading-[27px]'>$15,00</p>
            </span>
            {/*<Link to={'/catering#order-now'} className='flex relative z-[100000000] items-center justify-center lg:justify-start'><button className='bg-accent hero rounded-sm text-primary text-15px lg:text-[25px] font-semibold w-[120px] lg:w-[240px] h-[50px] lg:h-[65px] p-[10px] gap-[10px] mt-4'>Order Now </button></Link>*/}
            <div className='flex items-center justify-center lg:justify-start mt-[10px]'>
              <GloriaButton/>
             </div>
          </motion.div>
        </div>

      </section>
      <section className="hero-section bg-primary py-[20px] sm:py-[70px] px-[10%] lg:px-[80px] gap-[28px]">
        <motion.div
          ref={ref4}
          initial={{ opacity: 0, y: -200 }}
          animate={{
            opacity: inView4 ? 1 : 0,
            y: inView4 ? 0 : -200,
          }}
          transition={{ duration: 0.5 }}
          className='flex justify-center items-center px-[74px]'>
          <div className='relative flex flex-col mt-[80px] sm:mt-[5px] items-center'>
            <p className='text-accent font-[600] text-[40px] sm:text-[70px] leading-[60px] font-mont text-center'>Drinks</p>
            <img src={vector} alt="Decorative Vector" className="vector-image w-[250px] sm:mt-4" />
          </div>
        </motion.div>
        <div className='flex flex-col lg:flex-row items-center gap-[35px] pt-[10px] sm:pt-[50px]'>
          <motion.img
            ref={ref7}
            src={glass}
            alt="Frame 120"
            className='w-[100%] sm:w-[60%] h-[100%] sm:h-[60%]'
            initial={{ x: -100, opacity: 0 }}
            animate={{
              x: inView7 ? 0 : -100,
              opacity: inView7 ? 1 : 0
            }}
            transition={{
              type: "spring",
              bounce: 0.4,
              duration: 1
            }}
          />
          <motion.div
            ref={ref12}
            className='text font-mont'
            initial={{ x: 100, opacity: 0 }}
            animate={{
              x: inView12 ? 0 : 100,
              opacity: inView12 ? 1 : 0
            }}
            transition={{
              type: "spring",
              bounce: 0.4,
              duration: 1
            }}
          >
            <span className='gap-[11px] text-center lg:text-left pb-4 flex flex-col border-b-2 border-dashed border-orange'>
              <h2 className='text-accent  text-[30px] lg:text-[40px] leading-[48px] font-[600]'>Zobo</h2>
              <h3 className='text-white font-[500] text-[20px] leading-[37.5px]'>Sip into refreshment with zobo -  a vibrant taste of nature&apos;s goodness</h3>
              <p className='text-accent font-[600] text-[18px] leading-[27px]'>$12,00</p>
            </span>
            <span className='gap-[11px] text-center lg:text-left py-4 flex flex-col border-b-2 border-dashed border-orange'>
              <h2 className='text-accent  text-[30px] lg:text-[40px] leading-[48px] font-[600]'>Cocktail</h2>
              <h3 className='text-white font-[500] text-[20px] leading-[37.5px]'>Elevate your spirits with our signature cocktail.</h3>
              <p className='text-accent font-[600] text-[18px] leading-[27px]'>$12,00</p>
            </span>
            <span className='gap-[11px] text-center lg:text-left py-4 flex flex-col border-b-2 border-dashed border-orange'>
              <h2 className='text-accent  text-[30px] lg:text-[40px] leading-[48px] font-[600]'>Water</h2>
              <h3 className='text-white font-[500] text-[20px] leading-[37.5px]'>Stay refreshed and revitalized.</h3>
              <p className='text-accent font-[600] text-[18px] leading-[27px]'>$15,00</p>
            </span>
            {/*<Link to={'/catering#order-now'} className='flex relative z-[100000000] items-center justify-center lg:justify-start'><button className='bg-accent hero rounded-sm text-primary text-15px lg:text-[25px] font-semibold w-[120px] lg:w-[240px] h-[50px] lg:h-[65px] p-[10px] gap-[10px] mt-4'>Order Now </button></Link>*/}
            <div className='flex items-center justify-center lg:justify-start mt-[10px]'>
              <GloriaButton/>
             </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}

export default Menu