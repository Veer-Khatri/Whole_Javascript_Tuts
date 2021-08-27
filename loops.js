console.log('loops');
// Types of loops 
/*
1. for loop
2. while loop
3. do while loop
 */
/*
for (let i = 0; i < 100; i++) {
    console.log(i);  
}

let k = 0;
while (k!=100) {
    console.log(k);
    k++;
}


let l=0;
do {
    console.log(l);
    l++;
} while (l!=100);
*/

// for (let i = 0; i < 10; i++) {
//     if (i==5) {
//         break;
//     }
//     console.log("this will not print the sixth time"); 
// }
// console.log("done");


// for (let i = 0; i < 10; i++) {
//     if (i==5) {
        
//         //continue is used when we want to skip an itration means when i==5 the below code will not execute        
//         continue;
//     }
    
//     console.log("this will not print the when i = 5"); 
// }
// console.log("done");

// let arr = [3,489,18,481984,894,89,4,4984,98,890,848,4894,981741,541,784,561,8974105,74,6549,87415,87,465,7,654,987,94,98741654,67,67,65,984,87,7,74,4,714,7,51,65,61,54,651,32132132,05,11,234,894,1,684,0,615,51,1,4,5,456,4,654,5,456,51,5165,1,169,42,8974,1,984.1,984,6,54,654,54656,65,651,0,56113212,311,321,657,4];
// arr.forEach(function(params, index, array) {
//     console.log(params, index, array);
// })


let employee = {
    first_name:"tullu",
    last_name:"chand",
    age : 20,
    work: "MECHANICAL ENGINEER",
    working_on: "cpu macking"

}

for(let key in employee){
    console.log(`${key}:${employee[key]}`);
}