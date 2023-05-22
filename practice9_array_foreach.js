
let names = ["Clark", "Bruce", "Barry", "Diana", "John"];

// function printStuff(stuff) {
//     console.log(stuff);
// }

// const printStuff = (stuff)=> console.log(stuff);

// names.forEach(printStuff);

names.forEach(stuff=>console.log(stuff));


names.push("Snow");

console.log(names);

// store the first and second item into a variable A, B
let [a,b]=names;
console.log(a + ' has character count of ' + a.length);


console.log(b + ' has character count of ' + b.length);

//create a new empty array with name charCountArray
//let charCountArray = [];
// go through each and every item in names array
//for (let each of names) {
    //charCountArray.push(each.length);
//}
/**
 *  array's map method is a method can transform each element
 *  so we can get new array with transformed element
 * it expect you to provide a function that accept 1 parameter
 * and return a new value of any kind 
 * easy way to provide such function is using array syntax 
 *  each => do Something to return a value here
 * IT HAS NOTHING TO DO WITH THE MAP AS KEY VALUE PAIR)
 * SEE MAP METHOD AS TRANSFORMER 
 */

let charCountArray = names.map( (each)=> each.length);

console.log(charCountArray);

// get the character count and add it into charCountArray using push method

// arrays.forEach( arrow function with 1 param to process stuff dont return value)
// arrays.map( arrow function with 1 param and return new value so it can transform into new array)
// arrays.filter( arrow function with 1 param and return true false so it can filter based on this and return new array)

let upperNames = names.map( each => each.toUpperCase());
console.log(upperNames);

// filter method of array expects you to provide a function that accepts one parameter and return boolean value

let filteredNames = names.filter(each => each.length==4);
console.log(filteredNames);

let scores = [56,99,65,100,45];
let passedScores = scores.filter(score => score > 70);
console.log(passedScores);


function greaterThan70(score){ //optional way
    return score >70
}