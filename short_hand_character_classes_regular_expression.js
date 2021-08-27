console.log("Learning short hand character classes in regular expression");

let regex = /chullu/g
let str = "chaman chullu bhaman chullu thaman chullu dhaman chullu @@@@@@@ 9000 2000"

let result = str.match(regex); 
console.log(result);


regex = /\whullu/g; // \w is called word character -> it means _ or alphabet or numbers 
result = str.match(regex); 
console.log(result);


regex = /\w+an/g // one or more than one word character
result = str.match(regex); 
console.log(result);

regex = /\W/g // one non word character
result = str.match(regex); 
console.log(result);


regex = /\W+/g // one or more non word character
result = str.match(regex); 
console.log(result);

regex = /\d000/g // \d means one digit
result = str.match(regex); 
console.log(result);

regex = /\d+/g // \d means one or more digits
result = str.match(regex); 
console.log(result);

regex = /\D9000/g // \D means one non digit
result = str.match(regex); 
console.log(result);

regex = /\D+/g // \D means one or more non digit
result = str.match(regex); 
console.log(result);

regex = /\s/g // \s means one whitespace character
result = str.match(regex); 
console.log(result);

regex = /\s+/g // \s means one or more whitespace character
result = str.match(regex); 
console.log(result);

regex = /\S/g // \S means non whitespace character
result = str.match(regex); 
console.log(result);

regex = /\whaman\b/g // \b means word boundary means there must be a space after the given expression
result = str.match(regex); 
console.log(result);


//  Assertions 

regex = /h(?=a)/g;// after h there must be a (a) not any other character or non character
result = str.match(regex); 
console.log(result);

regex = /h(?!c)/g // after h there must not be a (c). Any other character or non character can occur there