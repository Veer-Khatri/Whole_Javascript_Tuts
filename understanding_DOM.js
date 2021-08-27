// DOM -> document object model

console.log("understanding DOM");
console.log(document);//this will give us whole html file in console
console.log(typeof(document));//object
let a;
a = document.all;//a line is coming because it is deprecated means it is old and stop it using by time
console.log(a);
Array.from(a).forEach(function(args) {
    // array.form is used to make an array from an object
    console.log(args);
})

a = document.links;// this will give all links in this page 
console.log(a);
a = document.images;//this will give all images in this page 
console.log(a);
a= document.scripts; // this will give all the scripts in this page
console.log(a);