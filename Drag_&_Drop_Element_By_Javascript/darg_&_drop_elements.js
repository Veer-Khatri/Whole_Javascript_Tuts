console.log("drag and drop elements with javascript + HTML");

let imgbox = document.getElementById("imgBox");
let imgBOXcontainer = document.getElementsByClassName("whitebox");
console.log(imgBOXcontainer);


imgbox.addEventListener('dragstart',()=>{ 
    // when we started draging dragable imgbox this event will fire 
    imgbox.style.border = ' 4px solid purple'
    setTimeout(() => {
        imgbox.style.display = 'none'
        // here 0 means ajter running everything, run code in this setTimeout function
    }, 0);
})

imgbox.addEventListener('dragend',()=>{
    // when we end draging means when we release an item which is kept for draging dragable imgbox this event will fire 
    console.log("drag end");
    imgbox.style.border = 'none'
    imgbox.style.display = 'block'
    
})


for (const whitebox of imgBOXcontainer) {
    whitebox.addEventListener('dragover',(eventOBJ)=>{
        // eventOBJ.target.id   
        eventOBJ.preventDefault();
        console.log('dragover');
    })
    whitebox.addEventListener('dragenter',(eventOBJ)=>{
        console.log('dragenter');
        
    })
    whitebox.addEventListener('dragleave',(eventOBJ)=>{
        console.log('dragleave');
    })
    whitebox.addEventListener('drop',(eventOBJ)=>{
        eventOBJ.target.append(imgbox)
        console.log('drop');

    })
}