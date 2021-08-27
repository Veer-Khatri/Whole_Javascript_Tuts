console.log("PROJECT 2");
const nav = document.getElementsByClassName("navigation")[0];
const searchbox = document.getElementsByClassName("searchbox")[0];
const menu = document.getElementsByClassName("menu")[0];

function menuToggle(p) {
    p.classList.toggle('change');
}

menu.addEventListener('click', function () {
    nav.classList.toggle('display_none_toggle')
    searchbox.classList.toggle('display_none_toggle')
});


// library form js
let library_form = document.getElementById("libraryForm");
let tableBody = document.getElementById("tableBody");
let th_counting = document.getElementsByClassName("th_counting");



// constructor
function Book(name = undefined, author = undefined, type) {
    this.name = name;
    this.author = author;
    this.type = type;

}
// display constructor
function Display() {

}

// add method to display prototype
Display.prototype.add = function (about_book) {
    console.log("added");
    let uiString = `
    <tr>
        <th scope="row" class="th_counting" >${(tableBody.childElementCount) + 1}</th>
        <td>${about_book.name}</td>
        <td>${about_book.author}</td>
        <td>${about_book.type}</td>
    </tr>
    `;
    tableBody.innerHTML += uiString;
}
Display.prototype.clear = function () {
    library_form.reset();
}

Display.prototype.validate = function (about_book) {
    if (about_book.name == "" || about_book.author == "") {
        return false;
    }
    else {
        return true
    }
}



// Add submit event listener to library book
library_form.addEventListener('submit', library_form_submit);

function library_form_submit(eventOBject) {
    eventOBject.preventDefault();
    console.log("you have submitted library form");

    let name = document.getElementById("bookName").value;

    let author = document.getElementById("authorName").value;

    // Finding vale od type 
    let fiction_radio_btn = document.getElementById("fictionbtn");
    let programming_radio_btn = document.getElementById("programmingbtn");
    let mathematics_radio_btn = document.getElementById("mathematicsbtn");
    let other_radio_btn = document.getElementById("otherbtn");
    let type;
    if (fiction_radio_btn.checked) {
        type = "Fiction";
    }
    else if (programming_radio_btn.checked) {
        type = "Programming";
    }
    else if (mathematics_radio_btn.checked) {
        type = "Mathematics";
    }
    else {
        type = "Other";
    }

    let book = new Book(name, author, type);

    console.log(book);

    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        alert("success we have added your book");
    }
    else {
        alert("Sorry can't add book - Name and author must contain 1 letter");

    }


}

