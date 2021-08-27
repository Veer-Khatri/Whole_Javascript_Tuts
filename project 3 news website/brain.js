console.log("PROJECT 3 NEWS WEBSITE");


// const change_class_toggle = document.getElementsByClassName("change")[0];

const button_active_style = document.getElementsByClassName("heading_button")
const display_none_toggle = document.getElementsByClassName("display_none_toggle");
console.log(display_none_toggle);
let uL = document.getElementById("list");
let getting_btn_by_targeted_id 
let getting_targeted_BTN_next_div;
console.log(display_none_toggle)
for (let i = 0; i < (display_none_toggle).length; i++) {
    display_none_toggle[i].setAttribute("id",`DNT_id${i}`);
    console.log("hi");
    let elem =  document.getElementById(`DNT_id${i}`)
    elem.style.display = "none";
    console.log(elem.style.display);
    button_active_style[i].setAttribute("id",`BTN_AT_ST_id${i}`);
}



//creating an XHR request
let xhr = new XMLHttpRequest();
let country_name = 'in' ;
let apiKey = '9b9500ffcdf04e11bc03ba1c08513449';
let got_newss;
let articles;
let titles;
let news;
let description;
let timeTaken
// Creating a get request


console.time()
xhr.open("GET" , `https://newsapi.org/v2/top-headlines?country=${country_name}&apiKey=${apiKey}`, true);
xhr.getResponseHeader('Content-Type', "application/json")
timeTaken = console.timeEnd()
console.log(timeTaken);

setTimeout(toggle_function(), 3000);
xhr.onload = function() { 
    if (this.status == 200) {
        got_newss = JSON.parse(this.responseText);
        articles = got_newss.articles;
        for (key in articles) {
            let source = articles[key];
            let keys_arr = Object.keys(source);
            titles = source[keys_arr[2]];
            description = source[keys_arr[3]];
            news = `<li id="listItem">
                        <button  onclick="toggle_function()" , class="heading_button">
                            <div class="inner_BTN">
                                <p id="title">${titles}</p>
                            </div>
                        </button>
                    </li>
                    <div class= " display_none_toggle display_none_toggle_class">${description}</div>`
                    uL.innerHTML += news;
        }
        
        
        

    }
    else{
        console.log('some error occured');
    }
}
xhr.send();

function toggle_function(){         
    uL.addEventListener('click', function(eventOBject) {
        let buttonId_TARGETING = eventOBject.target.id;
        getting_btn_by_targeted_id= document.getElementById(buttonId_TARGETING);
        if (getting_btn_by_targeted_id.id === "title") {
            getting_btn_by_targeted_id = getting_btn_by_targeted_id.parentElement;
            getting_targeted_BTN_next_div = getting_btn_by_targeted_id.parentElement.nextElementSibling;
            console.log(getting_targeted_BTN_next_div);  
    
            if (getting_targeted_BTN_next_div.style.display == "none") {
    
                getting_targeted_BTN_next_div.style.display = "block"
                getting_btn_by_targeted_id.style.backgroundColor = "hotpink"      
            }
            else{
                getting_btn_by_targeted_id.style.backgroundColor = "rgb(231, 229, 229)"
                getting_targeted_BTN_next_div.style.display = "none"        
            }
        }
        
        else if(getting_btn_by_targeted_id.className == "heading_button"){
            getting_targeted_BTN_next_div = getting_btn_by_targeted_id.parentElement.nextElementSibling;
            console.log(getting_targeted_BTN_next_div);  
            if (getting_targeted_BTN_next_div.style.display == "none") {
    
                getting_targeted_BTN_next_div.style.display = "block"
                getting_btn_by_targeted_id.style.backgroundColor = "hotpink"      
            }
            else{
                getting_btn_by_targeted_id.style.backgroundColor = "rgb(231, 229, 229)"
                getting_targeted_BTN_next_div.style.display = "none"        
            }
            
        }
        
        })
    }