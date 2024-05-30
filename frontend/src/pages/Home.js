import React from "react";
import pizzaImage from "../assets/images/05.png";
import pizzaImage2 from "../assets/images/04.png";
import BestSellers from "../components/section/BestSellers";
import Address from "../components/section/Address";
import LetsConnect from "../components/section/LetsConnect";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <section className="section h-[100vh] bg-[#E7272D]">
        <div className="container-hero h-full flex items-center justify-between px-[12%] ">
          <div className="left-hero text-white max-w-lg">
            <div className="media-content pb-52">
              <h2 className="text-2xl leading-none text-[#FBBE36] font-[900]">
                HAPPY HOUR SPECIAL <span className="special-line"> </span>
              </h2>
              <h1 className="text-8xl font-bold mt-4 leading-none">
                PIZZA BAR
              </h1>
              <p className=" mt-6 text-lg">
              Savor happiness at our Pizza Bar! Enjoy handcrafted pizzas bursting with flavor. Click the button below for exclusive Happy Hour deals!
              </p>
              <div className="hero-btn text-black mt-8">
              <Link to="/menu">
                <button className="order-btn font-semibold text-sm py-3 px-5 bg-[#FBBE36] hover:bg-[#f8aa03]  rounded-full font-bold hover:text-zinc-900 hover:shadow-xl">
                  <i className="ri-shopping-cart-2-line font-light pr-2 text-xl"></i>ORDER ONLINE</button>
              </Link>
              </div>
            </div>
          </div>

          <div className="right-hero flex justify-center items-center">
            {/* <div className="pricebox w-[180px] h-[180px] bg-[#FBBE36] rounded-full absolute flex justify-center items-center z-[3]">
              <div className="pricewrap text-left">
                <h4 className="barlow-font text-[1.6rem] font-bold pl-2">Only</h4>
                <h3 className="barlow-font text-[3.8rem] font-black text-[#e7272d] leading-tight">₹130</h3>
              </div>
            </div> */}
            <div className="z-[2]">
              <img src={pizzaImage} alt="pizza" className="hero-pizza w-[500px] h-auto rounded-full" />
            </div>
            
          </div>
        </div>
      </section>

      <BestSellers />

      <section className="section h-[100vh] bg-[#333333]">
        <div className="container-welcome h-full flex items-center justify-between px-[12%] ">
          <div className="left-hero  max-w-lg">
            <div className="welcome-content text-white">
              <h2 className="special-text text-[#E7272D] text-2xl">
                WELCOME
              </h2>
              <h1 className="text-6xl font-bold mt-4 leading-none">
              We Make Best Pizza In Town
              </h1>
              <h3 className="font-extrabold text-xl mt-4 text-zinc-400">Made with handpicked vegetables and ingredients.</h3>
              <p className="mt-6 text-lg">
              Our pizzas are crafted with passion and topped with the finest ingredients. From classic Margherita to gourmet specialties, we have something for every pizza lover. Order now and taste the difference that quality and dedication make. Enjoy fast delivery and exceptional service.
              </p>
              <div className="hero-btn text-black mt-8">
                <button className="order-btn text-xl py-3 px-5 bg-[#FBBE36] hover:bg-[#f8aa03] rounded-full font-bold">
                <i class="ri-share-forward-line pr-2 text-3xl"></i> Get Direction
                </button>
              </div>
            </div>
          </div>

          <div className="right-hero flex justify-center items-center">
            <img src={pizzaImage2} alt="pizza" className="welcome-pizza w-[500px] h-auto" />
          </div>
        </div>
      </section>
      <LetsConnect/>
      <Address/>

    </>
  );
}

export default Home;
