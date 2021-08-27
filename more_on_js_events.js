console.log("MORE THINGS ON JSVASCRIPT EVENTS AND EVENT-OBJECTS");
let btn = document.getElementById("btn");
btn.addEventListener("click",myfunction);
btn.addEventListener("dblclick",myfunctiondbc);
btn.addEventListener("mousedown",myfunctionMD);

function myfunction(evENT_OBject) {
    // console.log("you killed me by the arrow" + evENT_OBject);
    evENT_OBject.preventDefault();// to prevent defalut bheviour of any element 
    
} 
function myfunctiondbc(evENT_OBject) {
    // console.log("you killed me by the arrow two times " + evENT_OBject);
    evENT_OBject.preventDefault();// to prevent defalut bheviour of any element 
    
} 
function myfunctionMD(evENT_OBject) {
    // console.log("you can kill me by pressing any key of your mouse" + evENT_OBject);// this accepts wheel-click, right-click, left-click 
    evENT_OBject.preventDefault();// to prevent defalut bheviour of any element 
    
} 

document.querySelector(".container").addEventListener("mouseenter", function() {
    console.log("your mouse is inside the container");
})
document.querySelector(".container").addEventListener("mouseleave", function() {
    console.log("your mouse is outside of container");
})

document.getElementsByTagName("html")[0].addEventListener("mousemove",function(eventOBJECT) {
    console.log(eventOBJECT.offsetX , eventOBJECT.offsetY);
    console.log("how you dare to move your mouse");
    document.body.style.backgroundColor = `rgb(${eventOBJECT.clientY},${eventOBJECT.clientX},${eventOBJECT.clientX+eventOBJECT.clientY})`;
    
})