console.log("child,parent,traversing_dom");
let child = document.querySelector(".child");
console.log(child);
let cont = document.querySelector(".container");
console.log(cont);
console.log(cont.childNodes);// this will count text,comment and all the things in the given cont
console.log(cont.children);//it will not count text, comment 
console.log(cont.childNodes[0].nodeName);
console.log(cont.childNodes[0].nodeType);
/*
NODE TYPES
1 is for elements
2 is for attributes
3 is for text node
8 is for comment
9 is for document
10 is for doctype
*/


console.log(cont.children[0].children[0].children);
console.log(cont.firstChild);
console.log(cont.firstElementChild);
console.log(cont.lastChild);
console.log(cont.lastElementChild);
console.log(cont.childElementCount);

console.log(cont.nextSibling);//for getting next sibling means next thing in same parent
console.log(cont.previousElementSibling);//for getting previous element sibling means next thing in same parent
console.log(cont.nextElementSibling);// for getting next Element sibling means next element in same parent