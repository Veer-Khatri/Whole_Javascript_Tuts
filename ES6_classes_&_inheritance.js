console.log("learning calsses and inheritance ");


class Employee {
    constructor(given_name, given_work, given_salary){
        this.name = given_name,
        this.work = given_work,
        this.salary = given_salary
    }
    changeName(name){
        this.name = name;
    }
    myname(){
        return `my name is ${this.name}`    
    }
    // to use a function of class without making an object we use static 
    // i mean that if i want to use changeName function i have to use like this objectName.functionName() 
    // but with static i can use it like this className.functionName() 
    static add(a,b){
        return a+b;
    }
}

let jullu = new Employee("jullu","machenical enginner",550000);
console.log(jullu.myname());
console.log(Employee.add(55,5));

//----------------------------------------------Inheritance------------------------------------------------

// here we means that first copy all the things of Employee class then make Programmer calss
class Programmer extends Employee{
    constructor(given_name, given_work, given_salary , given_language){
        super(given_name, given_work, given_salary); 
        // super means when an object is made using this Programmer class extended with Employee class, take the given values from the extended class i.e Employee
        this.language = given_language;
    }
    // we cant use this keyword in static method
    static Programming_language(language = "C"){ 
        // here i am setting default language C. it will display when none argument is given while calling this function  
        return language;
    }
}
let pullu = new Programmer("pullu","OS developer",550000,"C");
console.log(pullu);
console.log(Programmer.Programming_language("c++"));
