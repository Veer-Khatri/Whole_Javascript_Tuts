console.log("learning prototype inheritance");
// WE WULL USE ES6 CLASSES NOT THIS. IT IS ONLY FOR UNDERSTANDING AND KNOWLEDGE 

const proto = {
    slogan : function(){
        return "this is my slogan"
    },
    changeName : function (newName) {
        this.name = newName;
    }
}
// this creates an object named person
const person = Object.create(proto);
person.name = "tullu",
person.work = "time waste gaming"
console.log(person);
person.changeName("ullu");
console.log(person);

// ---------------------------------Prototype Inheritance------------------------------------

// macking employee constructor
function employee(name, work, salary) {
    this.name = name;
    this.work = work;
    this.salary = salary;
}
// adding prototype functions
employee.prototype.slogan = function(){
    return "this is my slogan"
}
employee.prototype.changeName = function (newName) {
    this.name = newName;
}

// making object with our constructor 
let ullu = new employee("ullu","time waste","-200");
console.log(ullu);
console.log(ullu.slogan());

function Programmer(name,  work, salary, programming_language) {
    employee.call(this, name, work, salary);
    this.programming_language = programming_language;
}

// inheritance of prototype
Programmer.prototype = Object.create(employee.prototype)// it means create the progammer object with the prototype of employee   

// Manually setting the constructor of programmer 
Programmer.prototype.constructor =  Programmer

let chullu = new Programmer("chullu","game developer",500000, "c++ and java");
console.log(chullu);