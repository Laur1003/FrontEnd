
let prices = [17,87,54,85,10];


//prices.forEach(each=> console.log(each) );

// prices.forEach(each=> {
//     console.log(each);
//     console.log('This is another line');
// } );
// function processItem(each) {
//     console.log(each);
//     console.log('This is another line');
// }

// const processItem = (each)=>{
//     console.log(each);
//     console.log('This is another line');
// }

// prices.forEach(processItem);
// prices.forEach(each=> {
//     console.log(each)
//     console.log('This is another line');
// });

// processItem('Hello World');
// processItem(12);
// processItem(16);
// processItem('more stuff here');
let doubledPrices = prices.map(each=>each *2);
console.log(doubledPrices);


//create a new array with items turned into this price is YourPriceHere
//['price is 17', 'price is 87',...]
let tagPrices = prices.map(each=>'The price is ' + each);
console.log(tagPrices);

