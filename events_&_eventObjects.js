console.log("events and event objects in JS");
document.getElementById("heading").addEventListener("click",function(eventOBject) {
    // first argument of addEventListener is event and second is function we can give this function a name
    console.log("heading clicked");
    // location.href = "//google.com" // here we are saying that when heading is clicked redirect him/her to this page
    console.log(eventOBject);//this is an argument of the function which is not mendtory

    // important events 
    /*
        1. target
        2. click
        3. mouseover
    */
   let variable = eventOBject.target;//where you have clicked
   console.log(variable);
   variable = eventOBject.target.className;
   console.log(variable);
   variable = eventOBject.target.classList;
   console.log(variable);
   variable = eventOBject.offsetX;//respective to element on which we clicked
   console.log(variable);
   variable = eventOBject.offsetY;//respective to element on which we clicked
   console.log(variable);
   variable = eventOBject.clientX;// respctive to window of webpage
   console.log(variable);
   variable = eventOBject.clientY;// respctive to window of webpage
   console.log(variable);
})