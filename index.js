const app = "I don't do much."
const products = [
  { name: 'Head & Shoulders Shampoo', standardPrice: 4.99, discount: .6 },
  { name: 'Twinkies', standardPrice: 7.99, discount: .45 },
  { name: 'Oreos', standardPrice: 6.49, discount: .8 },
  { name: 'Jasmine-scented bath pearls', standardPrice: 13.99, discount: .7 },
];


///without function parameter
function getTotalAmountForProducts(products) {
  let totalPrice = 0;

  products.forEach(product => {
    if (product.discount >= .5) {
      totalPrice += product.price;
    }
  });

  return totalPrice;
}

// console.log(getTotalAmountForProducts(products)); // prints 25.5

//
//
//
// ///With function parameter
// function getTotalAmountForProducts(products, callback) {
//   let totalPrice = 0;
//
//   products.forEach(product => {
//     totalPrice = callback(totalPrice, product);
//   });
//
//   return totalPrice;
// }
//
// function callback(totalPrice, product) {
//   if (product.discount >= .5) {
//     return totalPrice + product.price;
//   }
//   return totalPrice;
// }
//
// console.log(getTotalAmountForProducts(products, callback)); // prints 25.5
//
// ///with different condition / allback function:
// function callback(totalPrice, product) {
//   if (product.price < 7) {
//     return totalPrice + product.price;
//   }
//   return totalPrice;
// }
//
// console.log(getTotalAmountForProducts(products, callback)); // prints 11.5
//
//
//
// /////With initialValue
// function getTotalAmountForProducts(products, callback, initialValue) {
//   let totalPrice = initialValue;
//
//   products.forEach(product => {
//     totalPrice = callback(totalPrice, product);
//   });
//
//   return totalPrice;
// }
//
// function callback(totalPrice, product) {
//   if (product.price < 7) {
//     return totalPrice + product.price;
//   }
//   return totalPrice;
// }
//
// console.log(getTotalAmountForProducts(products, callback, 0)); // still prints 11.5. Yeah!
//
//
//
// ////Abstracted version:
// function reduce(collection, callback, initialValue) {
//   let result = initialValue;
//
//   collection.forEach((product, index) => {
//     result = callback(result, product, index, collection);
//   });
//
//   return result;
// }
//
//
// //// Using for other data
// const couponLocations = [
//   { room: 'Living room', amount: 5 },
//   { room: 'Kitchen', amount: 2 },
//   { room: 'Bathroom', amount: 1 },
//   { room: 'Master bedroom', amount: 7 },
// ];
//
// function couponCounter(totalAmount, location) {
//   return totalAmount + location.amount;
// }
//
// console.log(reduce(couponLocations, couponCounter, 0)); // prints 15
//
// /////Using the built in JS function, reduce():
// console.log(couponLocations.reduce(couponCounter, 0)); // also prints 15!
