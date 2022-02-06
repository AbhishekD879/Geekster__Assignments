
let increasing=document.getElementById("increasing")
let stopit=document.getElementById("stop")
let decreasing=document.getElementById("decreasing")
let clearIncreasing;
let clearDecreasing;
let isIncreasing=false;
let isDecreasing=false;


increasing.addEventListener('click',()=>{
    let count=document.getElementById("count")

    if(!isIncreasing && isDecreasing==false){
        isIncreasing=true;
        clearIncreasing=setInterval(()=>{
            count.innerText=Number(count.innerText)+1  
        },1000)
        
    }
  
})

decreasing.addEventListener('click',()=>{
    let count=document.getElementById("count")

   if(!isDecreasing && isIncreasing==false){
       isDecreasing=true;
    clearDecreasing=setInterval(()=>{
        count.innerText=Number(count.innerText)-1    
    },1000)
   }

})

stopit.addEventListener('click',()=>{
    isDecreasing=false;
    isIncreasing=false
    clearInterval(clearIncreasing)
    clearInterval(clearDecreasing)
})