import React from 'react';
import logo from '../../assets/images/logo.png';

function Footer() {
  return (
    <section className='bg-[#333333] font-bold text-white'>
      <div className='container'>
        <div className='flex align-center justify-between px-[9rem] py-5'>
          <div className="left-foot w-1/3 flex flex-col gap-3">
            <div className="row-links roboto-font">
              <ul className='flex justify-between'>
                <li><a href="/about">About us</a></li>
                <li><a href="/menu">Menu</a></li>
                <li>Gallery</li>
                <li>Help</li>
                <li><a href="/contact">Contact us</a></li>
              </ul>
            </div>
            <div className="row-copyright roboto-font">
            <p>&copy; 2024 Pizzamore.co - All Rights Reserved</p>
            </div>
          </div>

          <div className="right-foot w-1/3 text-2xl text-white">  
              <div className="social-list flex justify-around">
                <div className="soc-item bg-zinc-500 hover:bg-zinc-600 w-[45px] h-[45px] rounded-full flex justify-center items-center transform transition-transform duration-300 hover:scale-110">
                  <a target="_blank" rel="noopener" href="https://www.linkedin.com/in/javed-khan-514601171/">
                  <i class="ri-linkedin-box-fill"></i>
                  </a>
                </div>
                <div className="soc-item bg-zinc-500 hover:bg-zinc-600 w-[45px] h-[45px] rounded-full flex justify-center items-center transform transition-transform duration-300 hover:scale-110">
                  <a target="_blank" rel="noopener" href="https://github.com/i-am-Sirius-Black">
                  <i class="ri-github-fill"></i>
                  </a>
                </div>
                <div className="soc-item bg-zinc-500 hover:bg-zinc-600 w-[45px] h-[45px] rounded-full flex justify-center items-center transform transition-transform duration-300 hover:scale-110">
                  <a target="_blank" rel="noopener" href="https://twitter.com/javed_official_">
                  <i class="ri-twitter-x-fill"></i>
                  </a>
                </div>
                <div className="soc-item bg-zinc-500 hover:bg-zinc-600 w-[45px] h-[45px] rounded-full flex justify-center items-center transform transition-transform duration-300 hover:scale-110">
                  <a target="_blank" rel="noopener" href="https://www.youtube.com/channel/UCaUhBBSZ8ZjsOVGDQyhQq3Q">
                  <i class="ri-youtube-fill"></i>
                  </a>
                </div>
    
            </div>
          </div>
        </div>
      </div>
    </section>
    
                                                        
  );
}

export default Footer;
