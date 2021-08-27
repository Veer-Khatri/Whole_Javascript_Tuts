console.log("learning regular expression methacharacter symbol");

let regex = /ullu/;

let str = "i am ullu brother of tullu and son of chullu, ull*u i am the best ullu in the world"

let result = regex.exec(str);
console.log(result);



// METACHARACTER SYMBOLS
regex = /^i/; // ^i means the string starts with i   
regex = /world$/; // world$ means the string ends with world 
regex = /b.st/ // b.st means any single character can be at dot place 
regex = /c*r/ // c*r means 0 to n number of characters can be at * place
regex = /c?h?ullu?/ // c?h?ullu? means alphabets before ? are optional means c,h,u can and can not be there 
regex = /ull\*u/ //  means escape character means ull*u must be there in the string here * is not used as above  

result = str.match(regex);
console.log(result);

if (regex.test(str)) {
    console.log(`the string --${str}-- starts with or contains or ends with the expression ${regex.source}`);
}
else{
    console.log(`the given string doesn't starts with or contains or ends with the expression ${regex.source}`);
    
}
