console.log("learning maps in javascript");
//  In Maps we can use any type of key or value

let myMap = new Map();
console.log(myMap);

let key1 = "myStr", key2 = {}, key3 = function () { }

// Setting the values in map
myMap.set(key1, 'This is a string');
myMap.set(key2, 'This is an empty object');
myMap.set(key3, 'This is an empty function');
console.log(myMap);


// Getting the values in maps
let value1 = myMap.get(key1);
console.log(value1);
let value2 = myMap.get(key2);
console.log(value2);
let value3 = myMap.get(key3);
console.log(value3);

// Getting the size of the map
console.log(myMap.size);

// we can get keys and values by using for of loop
console.log('----------------------------------------------');
for (const [key, value] of myMap) {
    console.log(key);
    console.log(value);
}

// getting keys only by using for of loop
console.log('----------------------------------------------');
for (const key of myMap.keys()) {
    console.log(key);
}

// getting values only by using for of loop
console.log('----------------------------------------------');
for (const value of myMap.values()) {
    console.log(value);
}

// getting keys and values by using forEach loop
console.log('----------------------------------------------');
myMap.forEach((value,key) => {
    console.log(value);
    console.log(key);
});


// Converting map to array

let array = Array.from(myMap)
console.log(array);

let array1 = Array.from(myMap.keys())
console.log(array1);

let array2 = Array.from(myMap.values())
console.log(array2);