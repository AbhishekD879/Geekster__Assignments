let likeBtn=document.querySelectorAll('.like');

likeBtn.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        if(btn.innerText=='❤️'){
            btn.innerText='❤'
        }else if(btn.innerText=='❤'){
            btn.innerText='❤️'
        }
    })
})
let x=()=>{

}
console.log(typeof x);