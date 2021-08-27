console.log("learning callback functions in javascript");
// pretend that this response is comming from server
const students = [
    {name : "chullu", subject: "python"},
    {name : "dhullu", subject: "java"}
]

function enrollStudent(student,callback_func) {
    // here callback_func argument is given because if getstudent function is done before this fucniton then new student will not be fetched because it cant be enrolled to fast  
    setTimeout(function()  {
        // setTimeout says that your code outside me will run and which is inside me i will run it in background after given time
        students.push(student);
        callback_func();
    }, 2000);
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
enrollStudent(newStudent,getStudents);