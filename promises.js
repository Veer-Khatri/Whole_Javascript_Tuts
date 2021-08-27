console.log("learning promises promise.then() & promise.catch()");
// promise can be rejected , resolved or can be pending
function funcn1() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            const error = true;
            if (!error) {
                console.log("your promise has been resolved");
                resolve('success');
            }
            else{
                console.log("your promise has been rejected");
                reject("sorry");
            }

        }, 2000);
    })
}

funcn1().then(function(given_in_resolve) { 
    // if promise is resolved then this functions will run 
    console.log("RESOLVED " + given_in_resolve);
}).catch(function(given_in_reject) { 
    // if promise is rejected then this functions will run
    console.log("REJECTED " + given_in_reject);
})


// returning promises in callback



console.log("Returning promises in callback");
// pretend that this response is comming from server

const students = [
    {name : "chullu", subject: "python"},
    {name : "dhullu", subject: "java"}
]

function enrollStudent(student) {
    return new Promise(function(resolve, reject) {
        setTimeout(function()  {
            // setTimeout says that your code outside me will run and which is inside me i will run it in background after given time
            students.push(student);
            let error = false;
            if (!error) {
                resolve();
                
            }
            else{
                reject();
            }
        }, 4000);
        
    })
}

function getStudents() {
    setTimeout(function()  {
        let str = "";
        students.forEach(function(student) {
            str += `<li>${student.name}</li>`
        })
        document.getElementById("student_div").innerHTML = str;
    }, 1000);
}
let newStudent = {name:"funny", subject:"c#"}
enrollStudent(newStudent).then(getStudents()).catch(function(){
    console.log("sorry an error occured");
}) 

// function inside then is compiled as - resolve();
// function inside catch is compiled as - reject();