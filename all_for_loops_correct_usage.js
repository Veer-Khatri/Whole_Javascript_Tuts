console.log("difference between all for loops and finding when to use which one");


// Traditional for loop
/*
let arr = [1,2,3,2,1,2,4,52,5,6,4]
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    
}


// iterating an object using forin loop:

let obj = {
    name : 'veeru',
    work : "time wasting",
    regret : "yes but only for 5 mins"
}
console.log(obj);

for (const keys in obj) {
    console.log(obj[keys]);
}

mystr = " this is a string"
for (let index in mystr) {
    console.log(mystr[index]);
}
*/

let arr = [1,2,3,2,1,2,4,52,5,6,4]

for (let e of arr ) {
    console.log(e);
}

