import React from 'react'
import subscribeModel from '../../assets/images/subscribe.png'

function LetsConnect() {
 return (
    <section className='bg-[#89B758]'>
        <div className="container flex justify-around gap-24">
            <div className="left flex flex-col justify-center items-left text-white gap-4">
                <div className='connect-text'>
                    <h1 className='text-6xl barlow-font font-black mb-3'>Let's connect!</h1>
                    <p>Subscribe with us to get latest notifications.</p>
                </div>
                <div className="subscribe flex gap-2">
                    <div className="email-area ">
                        <input className='text-black rounded-[30px] py-3 px-20 text-m barlow-font' type="email" placeholder='Your email address'/>
                    </div>
                    <div className="subs-btn">
                        <button className='order-btn text-m py-3 px-5 bg-[#29361A] hover:bg-[#18200f] rounded-full font-bold roboto-font'><i class="mr-3 ri-notification-2-line"></i>SUBSCRIBE</button>
                    </div>
                </div>
            </div>

            <div className="right h-[440px] w-[338px] mb-[-26px]">
                <img src={subscribeModel} alt="subcribe-model-image" />
            </div>
        </div>
    </section>
  )
}

export default LetsConnect