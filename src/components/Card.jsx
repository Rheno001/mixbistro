/* eslint-disable react/prop-types */

const Card = ({img, heading, para}) => {
    return ( <>
    <div className='flex flex-col items-center w-[412px]'>
        <img src={img} alt="" className='w-[364px] relative z-[20]' />
        <div className='bg-accent min-h-[230px] rounded-[20px] px-[20px] pb-[20px] pt-[75px] -mt-[70px]'>
                <h1 className='font-[700] text-[32px] leading-[41px] text-primary'>{heading}</h1>
                <p className='font-[500] leading-[24px]'>{para}</p>
        </div>
    </div>
    </> );
}
 
export default Card;