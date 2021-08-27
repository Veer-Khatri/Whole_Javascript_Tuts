console.log("Object Oriented JS starting here");

// object literals for macking objects
let objectt = {
    monitor_resolution : "6k to 8k",
    pc_count : 4,
    monitors_count : 14,
    laptop_count : 1,
    laptop_name : "macbook pro 15",
    mechanical_keyboard_count : 8,
    chiclet_keyboard_count : 1,
    chiclet_keyboard_name : "apple magic fingerprint keybaord ",
    wireless_mouse_count : 8,
    wired_mouse_count : 4,
    total_mouse_count : 12 ,
    bekarFunction : function() {
       console.log("me ek bekar function hun"); 
    }
}

console.log(objectt);

// ----------------------------Constructor --- new keyword--------------------------------------

// we have already seen constructor like  new Date();

// constructor for custom objects

function general_tech(name, pc_count) {
    this.name = name;
    this.number_of_pc = pc_count; 
    this.print = function() {
        console.log(this.name, this.number_of_pc);
    }
}

helloSetup = new general_tech("hello", 1);
console.log(helloSetup);
