console.log("Learning javascript symbols");

// Symbols
// symbols are primitive datatypes
// symbol is used to make a primitive which is unique

let symbol1 = Symbol('My identifier');
let symbol2 = Symbol('My identifier');
console.log(typeof symbol1);
console.log(symbol1===symbol2);//this shows every symbol has an unique identity
// Every symbol has an unique identity

let a ="this";
let b ="this";
console.log(a===b);
console.log(null===null);
console.log(undefined===undefined);
console.log(symbol1===symbol2);



const key1 = Symbol("identifier for key1"); 
const key2 = Symbol('identifier for key2'); 

let obj = {};

obj[key1] = "this is unique key 1"
obj[key2] = "this is unique key 2"
obj["veer"] = "hello"
console.log(obj);

console.log(obj[key1]);
console.log(obj[key2]);


//symbols are ignored in for in loop
for (const item in obj) {
    console.log(item);
}

console.log(JSON.stringify(obj));// symbols are ignored in stringify