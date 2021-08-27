console.log("LOCAL AND SESSION STORAGE");
// LOCAL STORAGE -- localStorage is a property that allows JavaScript sites and apps to save key-value pairs in a web browser with no expiration date(like it is stored in ROM) . 
                    // we cant add arrays in it

// SESSION STORAGE -- sessionStorage object also allows Javascript sites and apps to save key-value pairs in a web browser but it stores data for only one session (the data is deleted when the browser tab is closed)


// -------------------------------------localStorage----------------------------------------


console.log(window.localStorage);// this shows the stored key-value pairs stored in localstorage
// window.localStorage.setItem("Name","Veer Khatri"); // both this and below are correct
localStorage.setItem("Name","Veer Khatri"); 
localStorage.setItem("Known-by-name","Unknown");


console.log(localStorage.getItem("Name")); // if this doesn't exist it will give null

// localStorage.clear();// to clear the entire local storage

localStorage.removeItem("Name");// to remove a certain key-value pair

// To save an array in localStorage

let arr = [98, 10.12 ,true ,"pata nahi"];
localStorage.setItem("ARRRAY",arr); // it will be saved as a string not as a array
// To store an array as any array in localStorage we will use JSON.stringify and JSON.parse
console.log(JSON.stringify(arr));
localStorage.setItem("ARRRAY",JSON.stringify(arr)); 

console.log(localStorage.getItem("ARRRAY"));// to get it as an array we will use JSON.parse
console.log(JSON.parse(localStorage.getItem("ARRRAY")));

let myobject ={
    moniter : "14",
    resolution :"6k to 8k",
    numberOf_PC : 4,
    workOf_1st_PC :"Video editing",
    workOf_2nd_PC :"Programming",
    workOf_3rd_PC :"Testing",
    workOf_4rd_PC :"hidden thinking same as you"
}

// TO save an Object in localStorage
localStorage.setItem("MINE",JSON.stringify(myobject));// to save item as an object
console.log(JSON.stringify(myobject));
console.log(JSON.parse(localStorage.getItem("MINE")));// to get item as an object



// -------------------------------------sessionStorage----------------------------------------


sessionStorage.setItem("Name","Veer Khatri"); 
sessionStorage.setItem("Known-by-name","Unknown");

console.log(sessionStorage.getItem("Name"));
// sessionStorage.clear();

sessionStorage.removeItem("Name");// to remove a certain key-value pair

// TO SAVE AN ARRAY
sessionStorage.setItem("ARRRAY",JSON.stringify(arr)); 
console.log(JSON.parse(localStorage.getItem("ARRRAY")));

// TO SAVE AN OBJECT
localStorage.setItem("MINE",JSON.stringify(myobject));
console.log(JSON.stringify(myobject));
console.log(JSON.parse(localStorage.getItem("MINE")));