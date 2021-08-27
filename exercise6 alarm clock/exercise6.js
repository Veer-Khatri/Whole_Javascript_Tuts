let alarm = new Date();
let hour = document.getElementById("hour");
let minutes = document.getElementById("minutes");
let submit = document.getElementById("submit")

console.log(alarm.getHours());
console.log(alarm.getMinutes());

submit.addEventListener("click", () => {
    if (alarm.getHours() == hour.value && alarm.getMinutes() == minutes.value) {
        let audio = new Audio('marshmello-anne-marie-friends-lyrics.mp3')
        audio.play();
    }
    else if (alarm.getHours() == hour.value && alarm.getMinutes() < minutes.value) {
        setTimeout(() => {
            let audio = new Audio('marshmello-anne-marie-friends-lyrics.mp3')
            audio.play();
        }, 1000 * 60 * (minutes.value - alarm.getMinutes()));
    }
    else if (alarm.getHours() < hour.value && alarm.getMinutes() < minutes.value) {
        setTimeout(() => {
            let audio = new Audio('marshmello-anne-marie-friends-lyrics.mp3')
            audio.play();
        },  1000*60*60*(hour.value - alarm.getHours()) + 1000 * 60 * (alarm.getMinutes() - minutes.value));
    }
    else if (alarm.getHours() < hour.value && alarm.getMinutes() == minutes.value) {
        setTimeout(() => {
            let audio = new Audio('marshmello-anne-marie-friends-lyrics.mp3')
            audio.play();
        },  1000*60*60*(hour.value - alarm.getHours()));
    }
    else if (alarm.getHours() < hour.value && alarm.getMinutes() > minutes.value) {
        setTimeout(() => {
            let audio = new Audio('marshmello-anne-marie-friends-lyrics.mp3')
            audio.play();
        },  1000*60*60*(hour.value - alarm.getHours()) - 1000*60*(alarm.getMinutes() - minutes.value));
    }
    


})



// let audio = new Audio('marshmello-anne-marie-friends-lyrics.mp3' )
// audio.play();
