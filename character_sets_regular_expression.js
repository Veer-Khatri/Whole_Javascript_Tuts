console.log("learning character sets in regular expression");
let regex = /chullu/; 
let str = "chullu"

// -------------------------------CHARACTER SETS-------------------------------
regex = /ch[a-z]llu/; // here [a-z] means anything between a to z which starts with ch and ends with llu matches 
regex = /ch[ulp]llu/; // here [ulp] means between ch and llu only u,l,p can match 
regex = /ch[^abc]llu/ // here [^abc] means only a,b,c can't be placed between ch and llu
regex = /ch[a-zA-Z]llu/; // here [a-z] means anything between a to z or A to Z which starts with ch and ends with llu matches 
regex = /ch[a-zA-Z0-9]llu/; // here [a-z] means anything between a to z or A to Z or 0 to 9 which starts with ch and ends with llu matches 


// ------------------------------QUANTIFIERS----------------------------------
regex = /chul{2}u/ // means l exactly occurs 2 times
regex = /chul{0,2}u/ // means l can occur 0 to 2 times


// ------------------------------------GROUPING---------------------------------
str = "harhar"
regex = /(har){2}/ // means har exactly 2 times
regex = /(har){2}([0-9]r){5}/ // matching string for this expression is below
str = "harhar0r1r2r9r8r6r"

result = str.match(regex);
console.log(result);

if (regex.test(str)) {
    console.log(`the string --${str}-- starts with or contains or ends with the expression ${regex.source}`);
}
else{
    console.log(`the given string doesn't starts with or contains or ends with the expression ${regex.source}`);
}

