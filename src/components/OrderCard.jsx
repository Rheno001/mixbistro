import order1 from '../assets/order1.png'

const OrderCard = () => {
    return (<>
        <div className='bg-[#923631] flex flex-col lg:w-[400px] p-3 rounded-[20px] border-[2px] border-accent/30'>
            <img src={order1} alt="" />
            <div className='pt-[9px] flex flex-col items-start gap-[10px]'>
                <h1 className='text-[20px] lg:text-[32px] lg:leading-[40px] font-[700] text-accent'>BOSS! Beef Suya</h1>
                <p className='lg:text-[18px] text-white lg:text-black lg:leading-[23px] font-[500]'>Mild / Spicy Grilled beef garnished with onion & cucumber.</p>
                <p className='lg:text-[20px] lg:leading-[26px] font-[600] text-accent'>$35.00</p>
                <button className='bg-accent w-full text-primary py-[7px] lg:py-[16px] rounded-[20px] text-[25px] font-[600]'>Order Now</button>
            </div>

        </div>
    </>);
}

export default OrderCard;