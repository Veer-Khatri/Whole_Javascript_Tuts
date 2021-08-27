console.log("Exercise 5");

let veeru = {
    v : 'sldfj',
    r : 4545
}
console.log(veeru);


// we only have to populate data
const search_input = document.getElementById("search_box");
const search_button = document.getElementById("search_btn");
const populate_div = document.getElementById("populate");
const result_heading = document.getElementById("result");


search_button.addEventListener('click', populate_handler)

function populate_handler() {
    console.log("workinggggggggg");
    // instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // opening the object 
    xhr.open("GET", '/exercise5/dummy_text.txt', true)

    xhr.onload = function () {
        // when onload function is not made we use onReadyStateChange function
        // error handeling
        
        if (this.status == 200 && search_input.value != "") {
            let obj = JSON.parse(this.responseText)
            console.log(obj);
            console.log();
            console.log('hello');
            console.log(Object.keys(obj).length);
            for (let i = 0; i < Object.keys(obj).length; i++) {
                if (search_input.value != Object.keys(obj)[i]) {
                   
                    let str = "";

                    str = `${obj[search_input.value]}`

                    populate_div.innerText = str;
                }
                else {
                    console.log("cant find the word");
                }
            }
        }
        else {
            console.log("some error occured or search box is empty");
        }
    }

    xhr.send();

}