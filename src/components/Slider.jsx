import tongue from '../assets/tongue.png'
const Slider = () => {
    return (
        <div className="overflow-hidden bg-[#C38455] py-3">
            <div className="relative z-[0]">
                <div className="flex justify-center relative z-[999]">
                    <div className="sliding-text-box w-[110%] z-[999] relative">
                        <div className="sliding-text flex justify-center items-center font-sigmar gap-[20px] lg:gap-[40px]">
                            {/* Original content */}
                            <div className="lg:text-[40px] flex justify-center sans items-center gap-2 font-[700] text-accent"><p>From Our Grill To Your Heart</p> </div> <img src={tongue} alt="" className='w-[24px] lg:w-auto' />
                            <div className="lg:text-[40px] flex justify-center sans items-center gap-2 font-[700] text-accent"><p>Where Nigeria Meets Texas on a Skewer</p> </div> <img src={tongue} alt="" className='w-[24px] lg:w-auto' />
                            <div className="lg:text-[40px] flex justify-center sans items-center gap-2 font-[700] text-accent"><p>Every Bite, A Cultural Delight</p> </div> <img src={tongue} alt="" className='w-[24px] lg:w-auto' />


                            {/* Duplicate content */}
                            <div className="lg:text-[40px] flex justify-center sans items-center gap-2 font-[700] text-accent"><p>From Our Grill To Your Heart</p> </div> <img src={tongue} alt="" className='w-[24px] lg:w-auto' />
                            <div className="lg:text-[40px] flex justify-center sans items-center gap-2 font-[700] text-accent"><p>Where Nigeria Meets Texas on a Skewer</p> </div> <img src={tongue} alt="" className='w-[24px] lg:w-auto' />
                            <div className="lg:text-[40px] flex justify-center sans items-center gap-2 font-[700] text-accent"><p>Every Bite, A Cultural Delight</p> </div> <img src={tongue} alt="" className='w-[24px] lg:w-auto' />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
