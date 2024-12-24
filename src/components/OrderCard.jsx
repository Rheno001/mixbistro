/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const OrderCard = ({img, head, desc, amt}) => {
    return (<>
        <div className='bg-[#923631] flex flex-col hero lg:w-[400px] p-3 rounded-[20px] border-[2px] border-accent/30'>
            <img src={img} alt="" />
            <div className='pt-[9px] flex flex-col items-start gap-[10px]'>
                <h1 className='text-[20px] lg:text-[32px] lg:leading-[40px] font-[700] text-accent'>{head}</h1>
                <p className='lg:text-[18px] text-white lg:text-black lg:leading-[23px] font-[500]'>{desc}</p>
                <p className='lg:text-[20px] lg:leading-[26px] font-[600] text-accent'>{amt}</p>
                <Link to={'/catering#order-form'} className="w-full"><button className='bg-accent w-full hero text-primary py-[7px] lg:py-[16px] rounded-[20px] text-[25px] font-[600]'>Order Now</button></Link>
            </div>

        </div>
    </>);
}

export default OrderCard;