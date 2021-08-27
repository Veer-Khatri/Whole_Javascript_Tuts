console.log("learning async await");
// async always return promise
function veeru() {
    // this will return string 
    return 'hellooooooooooooooooooooooooooooooooooooooooo'
}
let a = veeru();
console.log(a);



async function cheeru() {
    // this will return promise
    console.log("inside calling function");
    console.log("before response")
    const response = await fetch('https://api.github.com/users')
    console.log("after response and before users")
    const users = await response.json();
    console.log("after users")
    return users;
}
console.log("before calling cheeru");
let cha = cheeru();
console.log("after calling cheeru");
console.log(cha);
cha.then((data) =>{
    console.log('printing data');
    console.log(data);
})
console.log("after printing cheeru in console");

