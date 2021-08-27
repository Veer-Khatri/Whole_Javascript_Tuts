console.log("functions and scopes ");
// const mygreet = function(name) {
//     console.log(`hi ${name} how may i help you--`);
//     let msg = "greeted" ;
//     return msg;
// }

// let value_of_mygreet = mygreet("veer");
// console.log(value_of_mygreet);
// console.log(value_of_mygreet);

const a ={
    name : "everyone",
    game :function (p) {
        console.log(`don't play games ${p}`);
        return 1;
    }

}
console.log(a.game("veer"));

let arr = ["ullu","tullu","mullu","pullu"]
arr.forEach(function(element, index, array) {
    console.log(element ,index ,array);
});