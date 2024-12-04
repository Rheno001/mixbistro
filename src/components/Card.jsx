/* eslint-disable react/prop-types */

const Card = ({img, heading, para}) => {
    return ( <>
    <div className='flex flex-col items-center w-[260px] lg:w-[412px]'>
        <img src={img} alt="" className='w-[230px] lg:w-[364px] relative z-[20]' />
        <div className='bg-accent min-h-[150px] lg:min-h-[230px] rounded-[20px] px-[20px] pb-[20px] pt-[50px] lg:pt-[75px] -mt-[40px] lg:-mt-[70px]'>
                <h1 className='font-[700] lg:text-[32px] lg:leading-[41px] text-primary'>{heading}</h1>
                <p className='font-[500] text-[14px] lg:text-[16px] lg:leading-[24px]'>{para}</p>
        </div>
    </div>
    </> );
}
 
export default Card;