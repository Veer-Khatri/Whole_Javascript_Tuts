console.log("learning sets in javascript");
// Set stores unique values

let mySet = new Set();// initializing an empty set
console.log(mySet);


// Adding values to set
mySet.add("this");
mySet.add(900); 
mySet.add(900);// this vlaue will not be added because Set never repeats values
mySet.add(undefined);
mySet.add(this);
mySet.add(true);
mySet.add(null);
mySet.add([0,96,9,6,9,6,9,54,5,85,'veeru']);
mySet.add({name:'veeu', work:"timewaster"});
mySet.add("this");  // this vlaue will not be added because Set never repeats values
console.log(mySet);
 
 
let mySet2 = new Set([6,74,{a:2,b:'veeru'},['a','b']])
console.log(mySet2);


console.log(mySet.size);
console.log(mySet.has(900));

// Removing element from set
console.log(mySet);
mySet.delete(); // this will delete undefined 
console.log(mySet);
mySet.delete(900); //this will delete 900
console.log(mySet);


// Iterating the set
console.log('---------------------------------------');
for (const item of mySet) {
    console.log(item);
}


mySet.forEach((item) => {
    console.log(item);
});


let arr_mySet = Array.from(mySet)
console.log(arr_mySet);