/* eslint-disable react/prop-types */

const Card = ({img, heading, para}) => {
    return ( <>
    <div className='flex flex-col items-center w-[260px] lg:w-[412px]'>
        <img src={img} alt="" className='w-full object-cover relative z-[20] rounded-b-none' />
        <div className='bg-accent min-h-[100px] lg:min-h-[150px] rounded-b-[20px] px-[20px] pb-[20px]'>
                <h1 className='font-[700] lg:text-[32px] lg:leading-[41px] text-primary'>{heading}</h1>
                <p className='font-[500] text-[14px] lg:text-[16px] lg:leading-[24px]'>{para}</p>
        </div>
    </div>
    </> );
}
 
export default Card;