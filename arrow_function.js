console.log("leasrning arrow functions");
function v() {
    console.log("b");
}
v(); 

const b = function() {
    console.log("v");
}
b(); 

let kal = ()=>{
    console.log("cal");
}
kal();

let greet = function () {
    return "good Good";
}

let greetArrow = () => "Good good";

let greet_name_arrow = (name,greet) =>{
    return `${greet} ${name}`
}

console.log(greet_name_arrow("oeeru","good Morning"));


