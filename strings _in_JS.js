const namee = "veer";
const greet = "namaste master"
console.log(`${greet} ${namee}`);
let concatinatedstring = "we concatenated ->";
concatinatedstring = concatinatedstring.concat("THIS");
console.log(concatinatedstring);
// console.log(concatinatedstring.length);
// console.log(concatinatedstring.toLowerCase());
// console.log(concatinatedstring.toUpperCase());
console.log(concatinatedstring[3]);
console.log(concatinatedstring.charAt(3));
console.log(concatinatedstring.indexOf("c"));
console.log(concatinatedstring.lastIndexOf('c'));
console.log(concatinatedstring.endsWith("ed"));//flase
console.log(concatinatedstring.endsWith("THIS"));//true
console.log(concatinatedstring.includes(" "));
console.log(concatinatedstring.substring(3,11));//this is (from ,to)
console.log(concatinatedstring.substr(3,11));// this is (from ,number of characters)
console.log(concatinatedstring.slice(0,4));
console.log(concatinatedstring.split(" ")); // it will split the string where spaces occurs and add it to an automated array
console.log(concatinatedstring.replace("THIS","this"));
console.log(concatinatedstring);

let fruit1 = "orange";
let fruit2 = "papaya";
let mystr = `${greet} ${namee} i like ${fruit1} and ${fruit2}`;
console.log(mystr);