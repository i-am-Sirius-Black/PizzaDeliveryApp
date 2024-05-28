import React from "react";
import pizzaImage from "../assets/images/05.png";
// import pizzaImage2 from "../assets/images/04.webp";
import BestSellers from "../components/section/BestSellers";

function Home() {
  return (
    <>
      <section className="section h-[100vh] bg-[#E7272D]">
        <div className="container-hero h-full flex items-center justify-between px-[12%] ">
          <div className="left-hero text-white max-w-lg">
            <div className="media-content">
              <h2 className="text-2xl leading-none text-[#FBBE36]">
                HAPPY HOUR SPECIAL <span className="special-line"> </span>
              </h2>
              <h1 className="text-8xl font-bold mt-4 leading-none">
                PIZZA BAR
              </h1>
              <p className=" mt-6 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ullamcorper neque dapibus ipsum semper, sit amet luctus turpis
                porttitor. Ut libero ante, varius quis ligula.
              </p>
              <div className="hero-btn text-black mt-8">
                <button className="order-btn text-sm py-3 px-5 bg-[#FBBE36]  hover:bg-[#f8aa03]  rounded-full font-bold">
                  <i className="ri-shopping-cart-2-line pr-1 text-xl"></i>ORDER
                  ONLINE
                </button>
              </div>
            </div>
          </div>

          <div className="right-hero flex justify-center items-center">
            <img src={pizzaImage} alt="pizza" className="w-[500px] h-auto" />
          </div>
        </div>
      </section>

      <BestSellers />

      <section className="section h-[100vh] bg-white">
        <div className="container-hero h-full flex items-center justify-between px-[12%] ">
          <div className="left-hero  max-w-lg">
            <div className="welcome-content">
              <h2 className="special-text text-[#E7272D] text-2xl">
                WELCOME
              </h2>
              <h1 className="text-6xl font-bold mt-4 leading-none">
              We make the best pizza in your town
              </h1>
              <h3 className="font-bold text-xl mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, dicta?</h3>
              <p className="mt-6 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ullamcorper neque dapibus ipsum semper, sit amet luctus turpis
                porttitor. Ut libero ante, varius quis ligula.
              </p>
              <div className="hero-btn text-black mt-8">
                <button className="order-btn text-xl py-3 px-5 bg-[#FBBE36]  hover:bg-[#f8aa03]  rounded-full font-bold">
                <i class="ri-share-forward-line pr-2 text-3xl"></i> Get Direction
                </button>
              </div>
            </div>
          </div>
          <div className="mid-div w-[200px] h-[100vh] bg-red-500">

          </div>

          <div className="right-hero flex justify-center items-center">
            <img src={pizzaImage} alt="pizza" className="w-[500px] h-auto" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
