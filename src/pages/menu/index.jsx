import React from 'react'
import logo from '../../assets/logo.png'
import vector from '../../assets/vector.png'
import frame120 from '../../assets/Frame120.png'

const Menu = () => {
  return (
    <div className="menu-container bg-primary">
      <img src={logo} alt="Restaurant Logo" className="menu-logo" />
      <section className="hero-section bg-primary py-[70px] px-[80px] gap-[28px]">
        <div className='flex flex-col items-center justify-center gap-[10px]'>
          <p className='text-accent text-xl font-[600] text-[50px] leading-[84px] font-mont align-middle'>Suya</p>
          <img src={vector} alt="Decorative Vector" className="vector-image w-[250px]" />
        </div>
        <div className='flex items-center gap-[35px] pt-[50px]'>
           <img src={frame120} alt="Frame 120" className='w-[720px] h-[695px]'/>
           <div className='text font-mont'>
            <span className='gap-[11px] pb-4 flex flex-col border-b-2 border-dashed border-accent'>
              <h2 className='text-accent text-[40px] leading-[48px] font-[600]'>BOSS! Beef Suya</h2>
              <h3 className='text-white font-[500] text-[20px] leading-[37.5px]'>Mild / Spicy Grilled beef garnished with onion & cucumber.</h3>
              <p className='text-accent font-[600] text-[18px] leading-[27px]'>$20,00</p>
            </span>
            <span className='gap-[11px] py-4 flex flex-col border-b-2 border-dashed border-accent'>
              <h2 className='text-accent text-[40px] leading-[48px] font-[600]'>Chillin' Chicken Suya</h2>
              <h3 className='text-white font-[500] text-[20px] leading-[37.5px]'>Mild / Spicy Grilled chicken garnished with onion & cucumber.</h3>
              <p className='text-accent font-[600] text-[18px] leading-[27px]'>$30,00</p>
            </span>
            <span className='gap-[11px] py-4 flex flex-col border-b-2 border-dashed border-accent'>
              <h2 className='text-accent text-[40px] leading-[48px] font-[600]'>Wingin' it Suya</h2>
              <h3 className='text-white font-[500] text-[20px] leading-[37.5px]'>Mild / Spicy Grilled chicken wings garnished with onion & cucumber.</h3>
              <p className='text-accent font-[600] text-[18px] leading-[27px]'>$17,00</p>
            </span>
            <button className='bg-accent rounded-sm text-primary w-[266px] h-[74px] p-[10px] gap-[10px] mt-4'>Order Now</button>
            </div>
        </div>
        
      </section>
      <section className="hero-section bg-primary py-[70px] px-[80px] gap-[28px]">
        <div className='flex flex-col items-center justify-center gap-[10px]'>
          <p className='text-accent text-xl font-[600] text-[50px] leading-[84px] font-mont align-middle'>Groovy Green Salad</p>
          <img src={vector} alt="Decorative Vector" className="vector-image w-[250px]" />
        </div>
        <div className='flex items-center gap-[35px] pt-[50px]'>
           <img src={frame120} alt="Frame 120" className='w-[720px] h-[695px]'/>
           <div className='text font-mont'>
            <span className='gap-[11px] pb-4 flex flex-col border-b-2 border-dashed border-accent'>
              <h2 className='text-accent text-[40px] leading-[48px] font-[600]'>BOSS! Beef Suya</h2>
              <h3 className='text-white font-[500] text-[20px] leading-[37.5px]'>Mild / Spicy Grilled beef garnished with onion & cucumber.</h3>
              <p className='text-accent font-[600] text-[18px] leading-[27px]'>$20,00</p>
            </span>
            <span className='gap-[11px] py-4 flex flex-col border-b-2 border-dashed border-accent'>
              <h2 className='text-accent text-[40px] leading-[48px] font-[600]'>Chillin' Chicken Suya</h2>
              <h3 className='text-white font-[500] text-[20px] leading-[37.5px]'>Mild / Spicy Grilled chicken garnished with onion & cucumber.</h3>
              <p className='text-accent font-[600] text-[18px] leading-[27px]'>$30,00</p>
            </span>
            <span className='gap-[11px] py-4 flex flex-col border-b-2 border-dashed border-accent'>
              <h2 className='text-accent text-[40px] leading-[48px] font-[600]'>Wingin' it Suya</h2>
              <h3 className='text-white font-[500] text-[20px] leading-[37.5px]'>Mild / Spicy Grilled chicken wings garnished with onion & cucumber.</h3>
              <p className='text-accent font-[600] text-[18px] leading-[27px]'>$17,00</p>
            </span>
            <button className='bg-accent rounded-sm text-primary w-[266px] h-[74px] p-[10px] gap-[10px] mt-4'>Order Now</button>
            </div>
        </div>
        
      </section>
      <section className="hero-section bg-primary py-[70px] px-[80px] gap-[28px]">
        <div className='flex flex-col items-center justify-center gap-[10px]'>
          <p className='text-accent text-xl font-[600] text-[50px] leading-[84px] font-mont align-middle'>Suya Mix Burger</p>
          <img src={vector} alt="Decorative Vector" className="vector-image w-[250px]" />
        </div>
        <div className='flex items-center gap-[35px] pt-[50px]'>
           <img src={frame120} alt="Frame 120" className='w-[720px] h-[695px]'/>
           <div className='text font-mont'>
            <span className='gap-[11px] pb-4 flex flex-col border-b-2 border-dashed border-accent'>
              <h2 className='text-accent text-[40px] leading-[48px] font-[600]'>BOSS! Beef Suya</h2>
              <h3 className='text-white font-[500] text-[20px] leading-[37.5px]'>Mild / Spicy Grilled beef garnished with onion & cucumber.</h3>
              <p className='text-accent font-[600] text-[18px] leading-[27px]'>$20,00</p>
            </span>
            <span className='gap-[11px] py-4 flex flex-col border-b-2 border-dashed border-accent'>
              <h2 className='text-accent text-[40px] leading-[48px] font-[600]'>Chillin' Chicken Suya</h2>
              <h3 className='text-white font-[500] text-[20px] leading-[37.5px]'>Mild / Spicy Grilled chicken garnished with onion & cucumber.</h3>
              <p className='text-accent font-[600] text-[18px] leading-[27px]'>$30,00</p>
            </span>
            <span className='gap-[11px] py-4 flex flex-col border-b-2 border-dashed border-accent'>
              <h2 className='text-accent text-[40px] leading-[48px] font-[600]'>Wingin' it Suya</h2>
              <h3 className='text-white font-[500] text-[20px] leading-[37.5px]'>Mild / Spicy Grilled chicken wings garnished with onion & cucumber.</h3>
              <p className='text-accent font-[600] text-[18px] leading-[27px]'>$17,00</p>
            </span>
            <button className='bg-accent rounded-sm text-primary w-[266px] h-[74px] p-[10px] gap-[10px] mt-4'>Order Now</button>
            </div>
        </div>
        
      </section>
      <section className="hero-section bg-primary py-[70px] px-[80px] gap-[28px]">
        <div className='flex flex-col items-center justify-center gap-[10px]'>
          <p className='text-accent text-xl font-[600] text-[50px] leading-[84px] font-mont align-middle'>Drinks</p>
          <img src={vector} alt="Decorative Vector" className="vector-image w-[250px]" />
        </div>
        <div className='flex items-center gap-[35px] pt-[50px]'>
           <img src={frame120} alt="Frame 120" className='w-[720px] h-[695px]'/>
           <div className='text font-mont'>
            <span className='gap-[11px] pb-4 flex flex-col border-b-2 border-dashed border-accent'>
              <h2 className='text-accent text-[40px] leading-[48px] font-[600]'>BOSS! Beef Suya</h2>
              <h3 className='text-white font-[500] text-[20px] leading-[37.5px]'>Mild / Spicy Grilled beef garnished with onion & cucumber.</h3>
              <p className='text-accent font-[600] text-[18px] leading-[27px]'>$20,00</p>
            </span>
            <span className='gap-[11px] py-4 flex flex-col border-b-2 border-dashed border-accent'>
              <h2 className='text-accent text-[40px] leading-[48px] font-[600]'>Chillin' Chicken Suya</h2>
              <h3 className='text-white font-[500] text-[20px] leading-[37.5px]'>Mild / Spicy Grilled chicken garnished with onion & cucumber.</h3>
              <p className='text-accent font-[600] text-[18px] leading-[27px]'>$30,00</p>
            </span>
            <span className='gap-[11px] py-4 flex flex-col border-b-2 border-dashed border-accent'>
              <h2 className='text-accent text-[40px] leading-[48px] font-[600]'>Wingin' it Suya</h2>
              <h3 className='text-white font-[500] text-[20px] leading-[37.5px]'>Mild / Spicy Grilled chicken wings garnished with onion & cucumber.</h3>
              <p className='text-accent font-[600] text-[18px] leading-[27px]'>$17,00</p>
            </span>
            <button className='bg-accent rounded-sm text-primary w-[266px] h-[74px] p-[10px] gap-[10px] mt-4'>Order Now</button>
            </div>
        </div>
        
      </section>

    </div>
  )
}

export default Menu