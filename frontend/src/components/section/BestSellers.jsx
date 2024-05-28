import React from 'react';
import pizza1 from '../../assets/images/05.png';
import pizza2 from '../../assets/images/05.png';
import pizza3 from '../../assets/images/05.png';

function BestSellers() {
  const bestSellers = [
    {
      imgSrc: pizza1,
      title: "Pepperoni Pizza",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$12.99",
    },
    {
      imgSrc: pizza2,
      title: "Margherita Pizza",
      description: "Sed do eiusmod tempor incididunt ut labore et.",
      price: "$10.99",
    },
    {
      imgSrc: pizza3,
      title: "BBQ Chicken Pizza",
      description: "Ut enim ad minim veniam, quis nostru ullamco laboris.",
      price: "$14.99",
    },
    ,
    {
      imgSrc: pizza3,
      title: "Corn Paneer Pizza",
      description: "Ut enim ad minim veniam, quis nostru ullamco laboris.",
      price: "$14.99",
    },
  ];

  return (
    <section className='section bg-gray-100 py-12'>
      <div className='container mx-auto text-center'>
       <h2 className='special-text text-[#E7272D] text-2xl'>SPECIAL COMBO</h2>
       <h1 className='best-seller'>Our Best Sellers</h1>
        <div className="pizza-cards flex justify-center gap-4">
          {bestSellers.map((item, index) => (
           <div className="max-w-[250px] mb-[4rem]">
            <div key={index} className='pizza-card bg-white p-6 h-[450px] rounded-3xl'>
              <div className="img-card h-[170px] w-full object-cover flex justify-center">
              <img src={item.imgSrc} alt={item.title} className=' h-full rounded-t-lg' />
              </div>
              <div className='mt-4'>
                <h3 className='text-2xl font-semibold'>{item.title}</h3>
                <p className='mt-2 text-gray-600'>{item.description}</p>
                <p className='mt-4 text-xl font-bold text-red-500'>{item.price}</p>
    
                <span className='special-shop inline-block bg-[#FBBE36] w-[60px] h-[60px] rounded-full flex justify-center items-center m-auto mt-4'><i className="ri-shopping-cart-2-line pr-1 text-2xl font-semi-bold"/></span>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BestSellers;
