function reportWindowSize() {
    
    console.log(window.innerHeight,window.innerWidth);
  }
  
  window.onresize = reportWindowSize;

  let aside__Container=document.getElementsByClassName("aside")[0]
  aside__Container.style.left=(window.innerWidth-600)+"px"

 let likeBtn=document.querySelectorAll(".like")
 let unlikeBtn=document.querySelectorAll('.unlike')
 
 likeBtn.forEach((btn,index)=>{

    btn.addEventListener('click',()=>{
    
        btn.classList.add('d-none')
        unlikeBtn[index].classList.remove('d-none',true)
        unlikeBtn[index].style.fill="red"
      
   })

 })

 unlikeBtn.forEach((btn,index)=>{
   btn.addEventListener('click',()=>{
    btn.classList.add('d-none')
    likeBtn[index].classList.remove('d-none')
    
   
   })
 })

 let eachPost=document.querySelectorAll(".feedCard__Img > img");
console.log(eachPost);
 eachPost.forEach((post,index)=>{
   post.addEventListener('dblclick',()=>{
    likeBtn[index].classList.add('d-none')
    unlikeBtn[index].classList.remove('d-none',true)
    unlikeBtn[index].style.fill="red"
    console.log(index);
   })
 })