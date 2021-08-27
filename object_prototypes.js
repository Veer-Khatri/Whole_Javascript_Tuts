
console.log("learning object prototypes");
let obj = {
    "name": "tullu",
    work: "videoediting",
}
console.log(obj);

function obj_constructor(givenName) {
    this.name = givenName;
}

let obj2 = new obj_constructor("ullu")
console.log(obj2);

obj_constructor.prototype.getName = function () {
    // we can only cahnge the prototype of our object made by our own constrctor not by object literal like obj above 
    return this.name
}
obj_constructor.prototype.setName = function (newName) {
    // we can only cahnge the prototype of our object made by our own constrctor not by object literal like obj above 
    this.name = newName;
    return "name set"
}
console.log(obj2);