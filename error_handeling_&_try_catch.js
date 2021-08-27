console.log("learning error handeling");
let a = "keeru"//pretend this response is coming fromserver
if (a == undefined) {
    throw new Error("not undefined ");
}
else{
    console.log("undefined YESSSSSSSSSSSSSS");
    
}
// we use try catch when we don't want to stop our code due to some error
try {
    faltu // this will give error 
    console.log("try this");//this will not throw error
} catch (error) {
    console.log("are you Ok");
    console.log(error);
    console.log(error.name);
    console.log(error.message);
} finally{
    console.log("this will run surely");
}