// import React, { useContext, useEffect, useState } from "react";
// import { PizzaContext} from "../../context/PizzaContext";

// function CustomizePizza({pizza}) {
//   const {inventory} = useContext(PizzaContext);
//   const [selectedBase, setSelectedBase] = useState(pizza.base || "");
//   const [selectedSauce, setSelectedSauce] = useState(pizza.sauce || "");
//   const [selectedCheese, setSelectedCheese] = useState(pizza.cheese || "");
//   const [selectedVeggies, setSelectedVeggies] = useState(pizza.veggies || []);

//   useEffect(() => {
//     setSelectedBase(pizza.base || "");
//     setSelectedSauce(pizza.sauce || "");
//     setSelectedCheese(pizza.cheese || "");
//     setSelectedVeggies(pizza.veggies || []);
//   }, [pizza]);

//   const baseOptions = inventory.filter((item) => item.type === "base");
//   const sauceOptions = inventory.filter((item) => item.type === "sauce");
//   const cheeseOptions = inventory.filter((item) => item.type === "cheese");
//   const veggieOptions = inventory.filter((item) => item.type === "veggies");


//   const pizzaVeggies = pizza.veggies || [];

//     // Utility function to capitalize the first letter of each word
//     const capitalize = (str) => {
//       return str
//         .split(" ")
//         .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//         .join(" ");
//     };
  

  
//   const handleBaseChange = (e) => {
//     console.log("pizza.base: " + pizza.base);
//     console.log("target value", e.target.value);
//     setSelectedBase(e.target.value);
//     console.log("Base selected:", e.target.value);
//   };

//   const handleSauceChange = (e) => {
//     setSelectedSauce(e.target.value);
//     console.log("Sauce selected:", e.target.value);
//   };

//   const handleCheeseChange = (e) => {
//     setSelectedCheese(e.target.value);
//     console.log("Cheese selected:", e.target.value);
//   };


//   const handleVeggiesChange = (e) => {
//     const value = capitalize(e.target.value);
//     setSelectedVeggies((prevSelectedVeggies) =>
//       prevSelectedVeggies.includes(value)
//         ? prevSelectedVeggies.filter((veggie) => veggie !== value)
//         : [...prevSelectedVeggies, value]
//     );
//     console.log("Veggies selected:", value);
//   };
  



//   const handleSubmit = (e) => {
//     console.log("hello world");
//     e.preventDefault();
//     const customizedPizza = {
//       pizzaName: pizza.pizzaName,
//       base: selectedBase,
//       sauce: selectedSauce,
//       cheese: selectedCheese,
//       veggies: selectedVeggies,
//     };
//     console.log("Customized Pizza Data:", customizedPizza);
//     // Send data to backend
//     // fetch('YOUR_BACKEND_URL', {
//     //   method: 'POST',
//     //   headers: {
//     //     'Content-Type': 'application/json',
//     //   },
//     //   body: JSON.stringify(customizedPizza),
//     // })
//     // .then(response => response.json())
//     // .then(data => console.log(data))
//     // .catch(error => console.error('Error:', error));
//   };

//   return (
//     <>
//       <div>
//         <div
//           class="modal fade"
//           id="customizePizzaModel"
//           tabindex="-1"
//           aria-labelledby="exampleModalLabel"
//           aria-hidden="true"
//         >
//                   <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h1 className="modal-title fs-5" id="exampleModalLabel">
//                 {pizza.pizzaName}
//               </h1>
//               {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
//             </div>
//             <div className="modal-body">
//               <form onSubmit={handleSubmit}>
//                 <label
//                   htmlFor="base"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Pizza Base:
//                 </label>
//                 <select
//                   id="base"
//                   value={selectedBase}
//                   onChange={handleBaseChange}
//                   className="capitalize mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 >
//                   <option value="">Choose Base</option>
//                   {baseOptions.map((base) => (
//                     <option key={base._id} value={base.item}>
//                       {base.item}
//                     </option>
//                   ))}
//                 </select>

//                 <label
//                   htmlFor="sauce"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Sauce:
//                 </label>
//                 <select
//                   id="sauce"
//                   value={selectedSauce}
//                   onChange={handleSauceChange}
//                   className="capitalize mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 >
//                   <option value="">Choose Sauce</option>
//                   {sauceOptions.map((sauce) => (
//                     <option key={sauce._id} value={sauce.item}>
//                       {sauce.item}
//                     </option>
//                   ))}
//                 </select>

//                 <label
//                   htmlFor="cheese"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Cheese:
//                 </label>
//                 <select
//                   id="cheese"
//                   value={selectedCheese}
//                   onChange={handleCheeseChange}
//                   className="capitalize mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 >
//                   <option value="">Choose Cheese</option>
//                   {cheeseOptions.map((cheese) => (
//                     <option key={cheese._id} value={cheese.item}>
//                       {cheese.item}
//                     </option>
//                   ))}
//                 </select>

//                 <label className="block text-sm font-medium text-gray-700">
//                   Veggies:
//                 </label>
    
//                   <div className="mt-2 flex gap-3 flex-wrap ">
//                     {veggieOptions.map((veggie, index) => (
//                       <div key={index} className="flex items-center capitalize"> 
                      
//                       <input
//                         type="checkbox"
//                         id={veggie.item}
//                         name="veggies"
//                         value={selectedVeggies}
//                         // checked={pizzaVeggies.includes(selectedVeggies)}
//                         checked={pizza.veggies}
//                         onChange={handleVeggiesChange}
//                         className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 form-check-input"
//                       />
//                         <label
//                           htmlFor={veggie.item}
//                           className="ml-2 block text-sm text-gray-700"
//                         >
//                           {veggie.item} 
//                         </label>
//                       </div>
//                       ))}  
//                   </div>
//                 </form>
//               </div>
//               <div class="modal-footer">
//                 <button type="submit" class="btn btn-primary">
//                   Add to Cart
//                   <span>
//                     <i class="ri-shopping-cart-line pl-2" />
//                   </span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default CustomizePizza;
