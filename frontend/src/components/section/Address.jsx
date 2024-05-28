import React from 'react'
import addressImage from '../../assets/images/address.png'

function Address() {
  return (
    <section className='bg-[#F3F7EE] border-t-2 border-b-2 border-black'>
        <div className='container py-10'>
            <div className="flex flex-col gap-5">
                <div className='row-img w-full flex justify-center items-center'>
                    <div className='flex items-center'>
                        <span className='line-left'/>
                        <img className=' w-[130px]' src={addressImage} alt="pizza" />
                        <span className='line-right'/>
                    </div>
                </div>
                <div className='row-address flex justify-around items-center text-center'>
                    <div className='items'>
                        <div className='items-content'>
                            <h3 className='barlow-font text-3xl font-bold'>Address</h3>
                            <p className='roboto-font'><i class="text-[#89B758] ri-map-pin-line"></i> 570 8th Ave,<br />Gomtinagar, Lucknow <br />Uttar Pradesh</p>
                        </div>
                    </div>

                    <div className='items pl-10'>
                        <div className='items-content'>
                         <h3 className='barlow-font text-3xl font-bold'>Bookings</h3>
                         <p className='roboto-font'>Contact us, <br />For Bookings</p>
                         <h4 className='text-[#89B758] barlow-font font-bold text-3xl'><i class="text-[#89B758] ri-phone-line"></i> +921110000</h4>
                        </div>
                    </div>

                    <div className='items'>
                        <div className='items-content'>
                             <h3 className='barlow-font text-3xl font-bold'>Opening Hours</h3>
                             <p className='roboto-font'><i class="text-[#89B758] ri-time-line"></i> Monday - Friday <br />10.00 AM - 11.00 PM</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Address