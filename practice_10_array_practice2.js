
let names = ["Clark", "Bruce", "Barry", "Diana", "John"];
//transform this array to get new array of json object

// let firstObj = {
//     firstName : "Clark"
// };
//console.log(firstObj);

// let myNames = [];
// for (let each of names) {
//     //create each object to be added to the myNames array
//     let myObj = {
//         firstName : each
//     }
//     //add item to the array
//     myNames.push(myObj);
// }
// console.log(myNames);

let myCoolNames = names.map(each=> {
    return {firstName: each,
            charCount: each.length
        } 
    });
    console.log(myCoolNames);


    