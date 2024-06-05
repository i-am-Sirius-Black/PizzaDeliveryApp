// import React, { useContext } from "react";
// import CustomizePizza from "./CustomizePizza";


// function BuyPizza({pizza}) {
//  console.log("BuyPizza log: ", pizza);
//   return (
//     <>
//       <div className="container">
//         <div
//           class="modal fade"
//           id="pizzaBuyModel"
//           tabindex="-1"
//           aria-labelledby="exampleModalLabel"
//           aria-hidden="true"
//         >
//           <div class="modal-dialog">
//             <div class="modal-content">
//               <div class="modal-header text-red-500 font-bold barlow-font text-xl">
//                 <h1 class="modal-title fs-5" id="exampleModalLabel">
//                   {pizza.pizzaName}
//                 </h1>
//               </div>
//               <div class="modal-body barlow-font text-lg italic">
//                 <p>
//                   {pizza.description}
//                 </p>
//               </div>
//               <div class="modal-body">
//                 <div className="base"> <span className=" font-semibold">Base: </span>{pizza.base}</div>
//                 <div className="sauce"> <span className=" font-semibold">Sauce: </span>{pizza.sauce}</div>
//                 <div className="cheese"> <span className=" font-semibold">Cheese: </span>{pizza.cheese}</div>
//                 <div className="veggies"><span className=" font-semibold">Veggies: </span>{pizza.veggies} </div>
//               </div>
//               <div class="modal-body text-green-500 font-bold text-xl">
//                 <p>
//                   ₹{pizza.price}
//                 </p>
//               </div>
//               <div class="modal-footer">
//                 <a
//                   type="button"
//                   class="btn btn-secondary"
//                   href="/customise-pizza"
//                 >
//                   Customise Pizza
//                 </a>
//                 <a href="/cart" type="button" class="btn btn-primary">
//                   Checkout
//                   <span>
//                     <i class="pl-2 ri-shopping-cart-line" />
//                   </span>
//                 </a>
                
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default BuyPizza;
