console.log("this is project 4");

const namee = document.getElementById("name");
const mob = document.getElementById("mob");
const submit = document.getElementById("submit");

namee.addEventListener('blur',()=>{
    let regex = /^[a-zA-Z]([0-9a-zA-Z]{3,10})/;
    let str = namee.value
    if (regex.test(str)) {
        console.log("name matched");
    }
    else{
        console.log("name didn't match");
        
    }

})


mob.addEventListener('blur',()=>{
    let regex = /^[0-9]{10}/;
    let str = mob.value
    console.log(str);
    if (regex.test(str)) {
        console.log("number matched");
    }
    else{
        console.log("number didn't match");
        
    }
})  