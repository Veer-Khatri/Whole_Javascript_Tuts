console.log("creating removing and replacing elements by javascript");


//-------------------------------CREATING THE ELEMENT----------------------------------------


let create_element = document.createElement("li");
let text = document.createTextNode("textNode"); // creating the text node
create_element.appendChild(text);// here we are add text in create_element

// adding a classname to the created element
create_element.className = "child";
console.log(create_element);

// adding an id to the created element
create_element.id = "createdByJavascript";
console.log(create_element);


// adding an attribute 
create_element.setAttribute("title", "titiled_with_js");
console.log(create_element);

// we can use any to add text but to add html we have to use innerhtml
// create_element.innerText = "this is made by using createElement function in JS" // to add text in this element
// create_element.innerHTML = "<h3>this is made by using createElement function in JS</h3>" 


let grabbing_UL = document.querySelector("ul.ulcls");
console.log(grabbing_UL);// only for checking

grabbing_UL.appendChild(create_element)// for appending the child in our ul


//-------------------------------REPLACING THE ELEMENT----------------------------------------


let replacing_element = document.getElementById("child2");// this will be replaced
console.log(replacing_element);

let replaced_with_replacing_element = document.createElement("li")
let txtnode = document.createTextNode("child 2 is replaced by this element created by JS using replaceWith function"); // creating the text node
replaced_with_replacing_element.appendChild(txtnode);//adding the text node to the created element


replacing_element.replaceWith(replaced_with_replacing_element);// this is used to replace the elements



let replaceChild_function = document.createElement("h3")
replaceChild_function.innerHTML = "li-2 this is replaced with h3 using replacechild_funcion and the second argument(which is replaced by first) must be the child of the given element on which this function is running"

grabbing_UL.replaceChild(replaceChild_function,document.getElementById("li-2"))


//-------------------------------REMOVING THE ELEMENT----------------------------------------

grabbing_UL.removeChild(document.getElementById("li-1"));
let child4 = document.getElementById("child4");
console.log(child4);
child4.removeAttribute("class")

