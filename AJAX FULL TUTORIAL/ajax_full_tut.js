console.log("JS AJAX full tutorial");

/*
    ----------------WHAT IS AJAX------------------------
    ajax stands for asynchronous js and XML
    ajax is not a programming language, Rather it's a set of existing technologies 
    ajax helps in fetching data asynchronously without intrefering with the existing page
    no page reload/refresh
    modern websites use JSON insted of XML for data transfer
*/

/* 
    --------------------WHY AJAX-----------------------------
    no page reload 
    better user experience
    saves network bandwith
    very interactive
*/


let fetch_get_btn = document.getElementById("fetch_get_btn");
console.log(fetch_get_btn);
let fetch_post_btn = document.getElementById("fetch_post_btn");
console.log(fetch_post_btn);
let populate_btn = document.getElementById("populate_btn");
console.log(populate_btn);



//  ------------------------------------GET REQUEST--------------------------------------
fetch_get_btn.addEventListener("click", button_click_handler)

function button_click_handler() {
    console.log("clicked fetch_get_btn");
    
    // instantiate an xhr object
    const xhr = new XMLHttpRequest();
    
    // opening the object
    xhr.open("GET",'dhullu.txt',true)// arguments are method, url, (asynchronous -> true or synchronous -> false  call):-> boolen  
    
    // what to do on progress -- not mandatory
    xhr.onprogress = function() {
        console.log("on progress");
    }
    
    // what to do when response is ready-- not mandatory
    xhr.onreadystatechange = function() {
        console.log(`ready state code ${xhr.readyState}`);
        // readyState all 5 values meaning
        
        /*  Returns the status of the XMLHttpRequest. possible values for the readyState propery:
        0: The request is not initialized
        1: Server connection has been set up
        2: The request has been sent
        3: The request is in process
        4: The request is completed and response is ready
        */
    }
    
    
    xhr.onload = function(){
        // when onload function is not made we use onReadyStateChange function
        // error handeling
        if (this.status == 200) {
            console.log(this.responseText)
        }
        else{
            log("some error occured");
        }
    }
    
    // sending the request
    xhr.send();

    console.log("we are done and this will be logged first because this is asynchronous call")
}


//  ------------------------------------POST REQUEST--------------------------------------


fetch_post_btn.addEventListener("click", button_click_handler_post)

function button_click_handler_post() {
    console.log("clicked post_btn");
    
    // instantiate an xhr object
    const xhr = new XMLHttpRequest();
    
    // opening the object 
    // we also have to send data in post request
    xhr.open("POST",'http://dummy.restapiexample.com/api/v1/create',true)// arguments are method, url, (asynchronous -> true or synchronous -> false  call):-> boolen  
    xhr.getResponseHeader("Content-type","application/x-www-form-urlencoded")

    // what to do on progress -- not mandatory
    xhr.onprogress = function() {
        console.log("on progress");
    }
    
    // what to do when response is ready-- not mandatory
    xhr.onreadystatechange = function() {
        console.log(`ready state code ${xhr.readyState}`);
        // readyState all 5 values meaning
        
        /*  Returns the status of the XMLHttpRequest. possible values for the readyState propery:
        0: The request is not initialized
        1: Server connection has been set up
        2: The request has been sent
        3: The request is in process
        4: The request is completed and response is ready
        */
    }
    
 
    xhr.onload = function(){
        // when onload function is not made we use onReadyStateChange function
        // error handeling
        if (this.status == 200) {
            console.log(this.responseText)
        }
        else{
            console.log("some error occured");
        }
    }
    
    // sending the request and data
    let parameter = "name=test&salary=123&age=23";
    xhr.send();

    console.log("we are done and this will be logged first because this is asynchronous call")
}

//  -------------------------POPULATING DATA------------------------------
populate_btn.addEventListener('click', populate_handler)
function populate_handler() {
    console.log("clicked populate_btn");
    
    // instantiate an xhr object
    const xhr = new XMLHttpRequest();
    
    // opening the object 
    xhr.open("GET", 'http://dummy.restapiexample.com/api/v1/employees', true)
    
    xhr.onload = function(){
        // when onload function is not made we use onReadyStateChange function
        // error handeling
        if (this.status == 200) {
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list =  document.getElementById('list');
            let str ="";
            for (key in obj){
                str += `<li>${obj[key].employee_name}</li>`
            }
            list.innerHTML = str;
        }
        else{
            console.log("some error occured ");
        }
    }
    
    xhr.send();

    console.log("we are done and this will be logged first because this is asynchronous call");

}