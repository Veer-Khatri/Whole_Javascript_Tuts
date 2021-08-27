console.log("learning regular expressions");
// to find a match or matches form a string we use regular expression for it 

// to write anything of regular expression we put that thing in backslashes

// to use two flags at once we write tehm together like this -> gi

let reg = /harry/ // this is a regular expression literal 

console.log(reg);
console.log(reg.source);// source means what you have written in regular expression literal

let str = "hello harry how are you, are you fine because i am fine harry and one more thing harry loved programming"
// functions to match expressions


// -----------------------------------------------------------------------------------------

// 1. exec() - this function will return an array when find match and null when nothing matches
let exec_result = reg.exec(str);
console.log(exec_result);

exec_result = reg.exec(str); // at this time second and third occurence are not logged in console because this function starts from the string starting and print the same occurrance. To prevent this we use flag in the regular expression like below 

reg = /harry/g // it means global and tells that check all whole string
exec_result = reg.exec(str);
console.log(exec_result);

exec_result = reg.exec(str);
console.log(exec_result);

exec_result = reg.exec(str);
console.log(exec_result);

exec_result = reg.exec(str);
console.log(exec_result);


reg = /harry/i // it means case insensitive 
str = "hello hArry how are you, are you fine because i am fine Harry and one more thing harRY loved programming"

exec_result = reg.exec(str);
console.log(exec_result);

exec_result = reg.exec(str);
console.log(exec_result);

exec_result = reg.exec(str);
console.log(exec_result);
//-------------------------------------------------------------------------------------------


// 2. test -> return true or false respective of match found

exec_result = reg.test(str);
console.log(exec_result);
reg = /harry/
exec_result = reg.test(str);
console.log(exec_result);

//-------------------------------------------------------------------------------------------

// 3. match -> this returns null when match not found and returns an array when match found
//  difference between match() and exec() is, exec() only return one occurrence and match() return all the occurrence when regular expression in global 
reg = /harry/g
str = "hello harry how are you, are you fine because i am fine harry and one more thing harry loved programming"
exec_result = str.match(reg);
console.log(exec_result);
//-------------------------------------------------------------------------------------------


// 4. search() -> it returns index of first match or returns -1 integer
reg = /harry/g
str = "hello harry how are you, are you fine because i am fine harry and one more thing harry loved programming"
exec_result = str.search(reg);
console.log(exec_result)
str = "hello hArry how are you, are you fine because i am fine Harry and one more thing harRY loved programming"
exec_result = str.search(reg);
console.log(exec_result);
//-------------------------------------------------------------------------------------------


// 5. replace -> returns new replaced string with all the replacement
reg = /harry/g
str = "hello harry how are you, are you fine because i am fine harry and one more thing harry loved programming"
exec_result = str.replace(reg, "REPLACED");
console.log(exec_result);
str = "hello hArry how are you, are you fine because i am fine Harry and one more thing harRY loved programming"
exec_result = str.replace(reg, "REPLACED");
console.log(exec_result);
//-------------------------------------------------------------------------------------------


