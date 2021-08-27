const nav = document.getElementsByClassName("navigation")[0];
const searchbox = document.getElementsByClassName("searchbox")[0];
const menu = document.getElementsByClassName("menu")[0];

function menuToggle(p) {
    p.classList.toggle('change');
}

menu.addEventListener('click', function () {
    nav.classList.toggle('display_none_toggle')
    searchbox.classList.toggle('display_none_toggle')
})


// your notes card

const deletebtn = document.getElementsByClassName("deletebtn");
const noteheading = document.getElementsByClassName("noteheading");
const note_section = document.getElementById("notes");
const addbtn = document.getElementById("notebtn");
const notetextarea = document.getElementById("note");
const titlenote = document.getElementById("titlenote")
let notesOBJ;
shownotes();
addbtn.addEventListener("click", function (eventOBJ) {

    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesOBJ = {};
    }
    else {
        notesOBJ = JSON.parse(notes);
    }

    notesOBJ[titlenote.value] = notetextarea.value;// this is how we append and difined the key/value in an object
    localStorage.setItem('notes', JSON.stringify(notesOBJ))
    if (titlenote.value == "" || notetextarea.value == "") {
        alert("please fill all the areas")
    }
    else {
        shownotes();
        notetextarea.value = "";
        titlenote.value = "";
    }
})


function shownotes(p) {
    let appendednotes = localStorage.getItem("notes");
    if (appendednotes == null) {
        notesOBJ = {};
    }
    else {
        notesOBJ = JSON.parse(appendednotes);
    }
    let html = "";

   //object.keys return all the keys of object
   //object.vlaues return all the vlaues of object 

    Object.keys(notesOBJ).forEach(function (element, index) {
        html += `
            <div class="parentdiv">
                <h4 class="noteheading">${Object.keys(notesOBJ)[index]}</h4>
                <div class="notediv">${Object.values(notesOBJ)[index]}</div>
                <button class="deletebtn">Delete Note</button>
            </div>
            `
    })
    if (notesOBJ.length != 0) {
        note_section.innerHTML = html;
    }
}



//  DELETING CARD 


for (let l = 0; l < deletebtn.length; l++) {
    deletebtn[l].setAttribute("id", `deletebtn${l}`)//for giving ids to every delete button
    
    noteheading[l].setAttribute('id', `noteheading${l}`)//for giving a unique id to every heading because when we wnat to remove item we have to take its key

}

note_section.addEventListener('click', function (eventObjecttttt) {
    let target_deletebtn_id = eventObjecttttt.target.id;// seeing on which button user clicked 
    let gettingbutton = document.getElementById(target_deletebtn_id);//getting that button
    let heading_id = gettingbutton.parentElement.firstElementChild;
    // let heading_id = gettingbutton.previousElementSibling.previousElementSibling; // we can also do this
    if (gettingbutton.className == 'deletebtn') {
        notes = localStorage.getItem('notes');
        notesOBJ = JSON.parse(notes);
        delete notesOBJ[heading_id.innerHTML];// delete keyword deletes given key's key value pair
        localStorage.setItem('notes', JSON.stringify(notesOBJ))
        shownotes();
    }
    // console.log(Object.keys(notesOBJ)[l]);
    // localStorage.removeItem(Object.keys(notesOBJ)[l])
})





//  ----------------------------------------------VEER's--------------------------------------

// const note_section  = document.getElementById("notesYN");
// let createElement =  document.createElement("div");
// let createparentdiv  = document.createElement("div");
// let createheading = document.createElement("h4");
// let createDeleteBtn = document.createElement("button");

// note_section.appendChild(createparentdiv);
// createparentdiv.appendChild(createheading);
// createparentdiv.appendChild(createElement);
// createparentdiv.appendChild(createDeleteBtn);


// createparentdiv.setAttribute("class","parentdiv")
// createheading.setAttribute("class", "noteheading");
// createElement.setAttribute("class", "notediv");
// createDeleteBtn.setAttribute("class", "deletebtn");

// addbtn.addEventListener('click' , function(eventObject){
//     localStorage.setItem(titlenote.value ,notetextarea.value)

//     shownotes();

// })

// function shownotes(args) {
//     if (notetextarea.value == "" || titlenote.value == "") {
//         alert("please fill all the areas");
//     }
//     else{

//         createElement.innerText = notetextarea.value;
//         createheading.innerText = titlenote.value;
//         createDeleteBtn.innerText = "Delete Note";
//         createparentdiv.appendChild(createheading);
//         createparentdiv.appendChild(createElement);
//         createparentdiv.appendChild(createDeleteBtn);
//         note_section.appendChild(createparentdiv)
//         notetextarea.value = "";
//         titlenote.value = "";
//     }
// }


