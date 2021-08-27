console.log("Learning date and time object in js");
let today = new Date();
console.log(today);
console.log(typeof today);
console.log(typeof Date);
let otherdate = new Date("12-2-2004 4:55:59")
otherdate = new Date(" December 9 1010 4:55:59")
console.log(otherdate);
console.log(otherdate.getDate());
console.log(otherdate.getMinutes());
console.log(otherdate.getTime());
otherdate.setDate(20);
console.log(otherdate);
otherdate.setMonth(2);
console.log(otherdate);
otherdate.setMinutes(10);
console.log(otherdate);
console.log(otherdate.getDay());// 0 - sun,  1 - mon 