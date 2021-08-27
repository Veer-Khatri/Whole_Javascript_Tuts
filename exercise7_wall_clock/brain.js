console.log("exercise 7");

let time_div = document.getElementById("timeDiv");
function update_clock() {
    let current_time = new Date();
    let hour = current_time.getHours();
    let minutes = current_time.getMinutes();
    let seconds = current_time.getSeconds();
    time_div.innerText = `${hour}:${minutes}:${seconds}`
    console.log(current_time);

}

