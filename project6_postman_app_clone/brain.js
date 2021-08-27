console.log('logged');

let get_radio = document.getElementById("get_radio");
let post_radio = document.getElementById("post_radio");
let json_radio = document.getElementById("json_radio");
let custom_radio = document.getElementById("custom_radio");
let parameters_box = document.getElementById("parameters_box");
let submitBTN = document.getElementById("submitBTN");
let json_box = document.getElementById("json_box");
let addBTNclass = document.getElementsByClassName("addBTNclass");
let more_params = document.getElementById('more_params');


// hiding the parameters box initally
parameters_box.style.display = 'none';


// if the user click on custom parameters we hide json box or vice versa
let added_params_count = 0;
custom_radio.addEventListener("click", () => {
    json_box.style.display = 'none'
    parameters_box.style.display = 'grid';

})

json_radio.addEventListener("click", () => {
    json_box.style.display = 'grid'
    parameters_box.style.display = 'none';
})


let addBTN = document.getElementById('addBTN');
let str;
let forOneTimeRun = 1;

addBTN.addEventListener('click', (eventOBJ) => { 
    if (forOneTimeRun == 1) {
        forOneTimeRun = 0;
        let WASTE_CLASS = document.getElementsByClassName("WASTE_CLASS")
        parameters_box.lastElementChild.removeChild(WASTE_CLASS[0]);
    }
    console.log("clicked");
    str = `<label for="param">${added_params_count + 2} Key/Value Pair:</label>
    <div calss="key_value">
    <input type="text" class="paramKey" placeholder="enter pararmeter ${added_params_count + 2} key ">
    <input type="text" class="paramValue" placeholder="enter pararmeter ${added_params_count + 2} value ">
    <button class="addbtn subtract_btn">-</button>
    <button  id="addBTN_ID" class="addbtn addBTNclass">+</button>
    </div>`
    added_params_count++;
    adding_next_key_vlaue_pair(str);
    setTimeout(() => {
        for (let i = 0; i < addBTNclass.length - 1; i++) {
            more_params.lastElementChild.removeChild(addBTNclass[i])
            console.log('runing');
        }
        setTimeout(() => {
            let addBTN_ID = document.getElementById("addBTN_ID");
            console.log(addBTN_ID);
            addBTN_ID.addEventListener('click',(eventOBJ)=>{
                str = `<label for="param">${added_params_count + 2} Key/Value Pair:</label>
                <div calss="key_value">
                <input type="text" class="paramKey" placeholder="enter pararmeter ${added_params_count + 2} key ">
                <input type="text" class="paramValue" placeholder="enter pararmeter ${added_params_count + 2} value ">
                <button class="addbtn subtract_btn">-</button>
                <button  id="addBTN_ID" class="addbtn addBTNclass">+</button>
                </div>`
                added_params_count++;
                adding_next_key_vlaue_pair(str);
            })
        }, 0);
        
        for (let i = 0; i < addBTNclass.length - 1; i++) {
            more_params.lastElementChild.removeChild(addBTNclass[i])
            console.log('runing');
        }
        
        
    
    }, 0);
    
    
    // let paramElement = getElemFromString(str)
    // console.log(paramElement);
    // more_params.appendChild(paramElement);
    
    
})
function adding_next_key_vlaue_pair(stirng) {
    more_params.innerHTML += stirng;
}
setTimeout(() => {
    for (let i = 0; i < addBTNclass.length - 1; i++) {
        console.log(addBTNclass);
        more_params.lastElementChild.removeChild(addBTNclass[i])
        console.log('runing');
    }
    setTimeout(() => {
        let addBTN_ID = document.getElementById("addBTN_ID");
        console.log(addBTN_ID);
        addBTN_ID.addEventListener('click',(eventOBJ)=>{
            str = `<label for="param">${added_params_count + 2} Key/Value Pair:</label>
            <div calss="key_value">
            <input type="text" class="paramKey" placeholder="enter pararmeter ${added_params_count + 2} key ">
            <input type="text" class="paramValue" placeholder="enter pararmeter ${added_params_count + 2} value ">
            <button class="addbtn subtract_btn">-</button>
            <button  id="addBTN_ID" class="addbtn addBTNclass">+</button>
            </div>`
            added_params_count++; 
            adding_next_key_vlaue_pair(str);
        })
    }, 0 );
    
    for (let i = 0; i < addBTNclass.length - 1; i++) {
        more_params.lastElementChild.removeChild(addBTNclass[i])
        console.log(addBTNclass);
        console.log('runing');
    }
    
    

}, 0);

