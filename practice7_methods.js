
function print(){
    console.log('Hello World');
}

// create a function that accepts 1 parameter 
// and print out hello user + (whatever you passed from param)
function sayHelloTo(name) {
    console.log('Hello User ' + name);
}

//create a function that accepts 2 param
// and returns the addition result of 2 numbers
function addNumbers(num1, num2) {
    return num1 + num2;
}

print();
print();
sayHelloTo('Zeynep');
sayHelloTo('Hakan');

console.log(addNumbers(100,200));