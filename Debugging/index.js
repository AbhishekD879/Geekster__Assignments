

let burger=document.getElementById("burger")
let expansion=false;
burger.addEventListener('click',()=>{
    if(!expansion){
        let burgerExpansion=document.getElementById("burgerExpansion")
        burgerExpansion.classList.replace("hidden","block")
        expansion=true
    }else{
        let burgerExpansion=document.getElementById("burgerExpansion")
        burgerExpansion.classList.replace("block","hidden")
        expansion=false
    }
})

let closeBurger=document.getElementById("closeBurger")

closeBurger.addEventListener("click",()=>{
    let burgerExpansion=document.getElementById("burgerExpansion")
    burgerExpansion.classList.replace("block","hidden")
        expansion=false
})

// search inputs

let searchEle=document.getElementById("search");
let fibButton=document.getElementById("fibButton")
fibButton.addEventListener('click',()=>{
    let x=document.createElement("h1")
    x.innerText=fib(searchEle.value)
    document.body.appendChild(x)
},false);

function fib(n){
    if(n<1) return 1;

    return fib(n-1) + fib(n-2)
}


//  event loop exploration

