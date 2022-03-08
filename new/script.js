let burger=document.getElementById("burger")
let expansion=false;
burger.addEventListener('click',()=>{
    if(!expansion){
        let burgerExpansion=document.getElementById("burgerExpansion")
        burgerExpansion.classList.remove("d-none")
        expansion=true
    }else{
        let burgerExpansion=document.getElementById("burgerExpansion")
        burgerExpansion.classList.add("d-none")
        expansion=false
    }
})

let closeBurger=document.getElementById("closeBurger")

closeBurger.addEventListener("click",()=>{
    let burgerExpansion=document.getElementById("burgerExpansion")
    burgerExpansion.classList.add("d-none")
        expansion=false
})