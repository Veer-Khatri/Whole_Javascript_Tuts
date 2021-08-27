console.log("ELEMENT SELECTORS IN JAVASCRIPT");
/*
There are two types of element selectors 
1. Single element selector
2. Multi element selector
*/


let element = document.getElementById("heading");
console.log(element);
let child = document.getElementById("child");
console.log(child);
let container = document.getElementById("container");
console.log(container);
let see;
console.log(element.className);
see = child.parentNode;//this will only work on ids not on classes
console.log("parent nodes " + see);
see = container.childNodes;
console.log("child nodes "+see);
child.style.color = "red"; // changing child1 color to red
child.innerHTML = "Hi this is chnaged by innerHTML property of DOM in js"
console.log(child.innerHTML);
console.log(child.innerText);

let q_sel = document.querySelector("#heading");
console.log(q_sel);
q_sel = document.querySelector(".child");
console.log(q_sel);
q_sel = document.querySelectorAll(".child");
console.log(q_sel);
q_sel = document.querySelector("#container");
console.log('hello '+q_sel.querySelectorAll(".child"));
