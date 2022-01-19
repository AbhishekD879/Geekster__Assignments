let cards=document.querySelectorAll(".Card")
console.log(cards);


let previous=document.getElementsByClassName("previous")[0];
let next=document.getElementsByClassName("next")[0];

let current=0
/**
when my current is 0 my pre should be length ,
when my current is lenght my next should be 0
7 + -7=0
0 +  7 =7 
*/
previous.addEventListener('click',()=>{

    if(current===0){
        current=current +6;
        cards[current-6].classList.remove("card__active");
    }else{
        current -=1;
        cards[current+1].classList.remove("card__active");
    }
    
    console.log(current,current+1)
    
    cards[current].classList.add("card__active")
});

next.addEventListener('click',()=>{
  
    if(current===6){
        current=current-6;
        cards[current+6].classList.remove("card__active");
    }else{
        current=current+1;
        cards[current-1].classList.remove("card__active");
    }
    console.log(current,current-1)
    
    cards[current].classList.add("card__active")
});

let like__Buttons=document.querySelectorAll('.like');
let dislike__Buttons=document.querySelectorAll('.dislike')
let counters=document.querySelectorAll('.counter')
console.log(like__Buttons,dislike__Buttons,counters);
like__Buttons.forEach((button,index)=>{
    button.addEventListener('click',()=>{
        counters[index].textContent=Number(counters[index].textContent)+1;
    });
});

dislike__Buttons.forEach((button,index)=>{
    button.addEventListener('click',()=>{
        counters[index].textContent==0 ?null:counters[index].textContent=Number(counters[index].textContent)-1;
    });
});