// BY CODE WITH HARRY 
// VEER WAS NOT ABLE TO SOLVE
let str = 'python'
let links = document.links;


Array.from(links).forEach(function(element){
    let href = element.href;
    if (href.includes(str)) {
        console.log(href);
     
    }
})