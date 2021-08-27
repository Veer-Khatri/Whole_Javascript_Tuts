// BY VEER KHATRI



console.log("Exercise-2 JS");
let createElement = document.createElement("div");
const body = document.getElementsByTagName("body")[0];
createElement.innerHTML = "<h1>this is a heading</h1>"
createElement.setAttribute("contentEditable" , "false")
body.appendChild(createElement);

createElement.addEventListener("click",function() {
    createElement.contentEditable = true
})
createElement.addEventListener("blur",function() {
    localStorage.setItem("item",createElement.innerText)
    console.log("saved to local storage");
    console.log("Thanks for using your website");
})

console.log(createElement);