
const p1 = {

    firstName : "Elif",
    lastName : "K",
    gender : "Female"
};

// console.log(p1.firstName);
// //let firstName = p1.firstName

// //store firstName and lastName into fName and lName variables
// // use destructing syntax

// let {firstName, lastName, gender} = p1;
// //you create 2 variables and extracted the field of p1 object and assign the value
// console.log(firstName);
// console.log(lastName);
// console.log(gender);

//create a function that expects Person object
//and print out firstname, lastname field 

// function printPerson(thePerson){
//     console.log(thePerson.firstName);
//     console.log(thePerson.lastName);
// }

function printPerson({firstName, lastName}){
    console.log(firstName);
    console.log(lastName);
    
}

printPerson(p1);
let p2 = {
    firstName: "Ali",
    lastName: "S",
    age: 18
}
printPerson(p2);