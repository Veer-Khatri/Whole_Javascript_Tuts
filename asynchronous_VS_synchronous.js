console.log("learning asynchronous programming");

setTimeout(() => {  
    for (let i = 0; i < 1000; i++) {
        console.log(i);
        
    }
}, 100);
console.log("hello");