console.log("arrays and objects");
let number_arr = [5,3,6,5,8 ,7];
let string_arr = ['veer',"kheer","teer","jeer","peer"];
let mixed_arr = ["veer",10,true,10.232,[11,53],{name:"hacker",work:"hacking",web_hacked:1406}];
console.log(number_arr); 
console.log(string_arr); 
console.log(mixed_arr); 
console.log(number_arr.length);
console.log(Array.isArray(number_arr));

number_arr[0] = 7.2;
console.log(number_arr); 


number_arr.push(9);//this appends at the end 

number_arr.unshift(1);//this appends at the start of the array 
console.log(number_arr); 

number_arr.pop();// removes an element from end
console.log(number_arr); 

number_arr.shift();// removes an element from starting
console.log(number_arr); 

number_arr.splice(1,3);// first argument is from where to start removing elements,second argument is how many elements to remove from given index 
console.log(number_arr); 

number_arr.reverse();
console.log(number_arr);

let numberarr_2 = [4,45,1,61,51,6,1,841,1,1,4]
numberarr_2 = numberarr_2.concat(string_arr);
console.log(numberarr_2);

number_arr = number_arr.concat(numberarr_2);
console.log(number_arr);

mixed_arr = mixed_arr.concat(number_arr);
console.log(mixed_arr);

let person_obj ={
    name : "tullu",
    'last name' : "chand",
    job : " website-logo freelancer",
    age : 16,
    gender: "male",
    is_gamer: false,
    
}

console.log(person_obj);

console.log(person_obj.age);

console.log(person_obj.is_gamer);

console.log(person_obj.gender);

console.log(person_obj['gender']);

console.log(person_obj["last name"]);

console.log(`${person_obj.name} ${person_obj["last name"]}`);


