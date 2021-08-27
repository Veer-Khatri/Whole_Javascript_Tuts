//  Fetch api is better than ajax 
console.log("learning Fetch api");
let fetch_BTN = document.getElementById("fetch_api_btn");
let content = document.getElementById("student_div");


// function getData() {
//     console.log("started getting data");
//     url = 'exercise5/dummy_text.txt'
//     fetch(url).then((response)=> {
//         console.log("inside first then");
//         return response.text()
//     }).then((data)=>{
//         console.log("inside second then");
//         console.log(data);
//     })
// }


// GET REQUEST


function getData() {
    console.log("started getting data");
    url = 'https://api.github.com/users'
    fetch(url).then((response)=> {
        console.log("inside first then");
        return response.json()
    }).then((data)=>{
        console.log("inside second then");
        console.log(data);
    })
}


// POST REQUEST


function postData() {
    url = '	http://dummy.restapiexample.com/api/v1/create'
    data = {"name":"telllloo","salary":"123","age":"23"}
    parameters ={
        method : "post",
        // headers:{
        //     'Content-Type':"application/json"
        // },
        body :data // JSON.stringify(data)
    }
    fetch(url,parameters).then((response)=> {
        return response.json();
    }).then((data)=>{
        console.log(data);
    })
}
postData();
