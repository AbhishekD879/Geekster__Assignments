
let feedobj=[
  {
    channelName:"nature",
    channelProfile:"https://images.unsplash.com/photo-1643302067557-c88dc1549591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    postImg:"https://images.unsplash.com/photo-1643302067557-c88dc1549591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    likes:"34,111",
    commentCount:'443'
  },
  {
    channelName:"3dArt",
    channelProfile:"https://images.unsplash.com/photo-1643274922790-510cb79a9d2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=797&q=80",
    postImg:"https://images.unsplash.com/photo-1643274922790-510cb79a9d2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=797&q=80",
    likes:"66,111",
    commentCount:'621'
  }, {
    channelName:"Food",
    channelProfile:"https://images.unsplash.com/photo-1643226228323-34e639efc40e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
    postImg:"https://images.unsplash.com/photo-1643226228323-34e639efc40e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
    likes:"9,855",
    commentCount:'440'
  }, {
    channelName:"fasion",
    channelProfile:"https://images.unsplash.com/photo-1619933317484-5f142f791902?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    postImg:"https://images.unsplash.com/photo-1619933317484-5f142f791902?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    likes:"90,111",
    commentCount:'4433'
  }, {
    channelName:"health And WellNess",
    channelProfile:"https://images.unsplash.com/photo-1643287749401-449c7af31d06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    postImg:"https://images.unsplash.com/photo-1643287749401-449c7af31d06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    likes:"39,111",
    commentCount:'4993'
  }, {
    channelName:"current events",
    channelProfile:"https://images.unsplash.com/photo-1642965468433-9763eb3590fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8QkpKTXR0ZURKQTR8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    postImg:"https://images.unsplash.com/photo-1642965468433-9763eb3590fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8QkpKTXR0ZURKQTR8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    likes:"34,111,999",
    commentCount:'99943'
  }, {
    channelName:"NFT",
    channelProfile:"https://images.unsplash.com/photo-1642751227050-feb02d648136?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fE94eW50Sm9CREZZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    postImg:"https://images.unsplash.com/photo-1642751227050-feb02d648136?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fE94eW50Sm9CREZZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    likes:"50,664",
    commentCount:'4993'
  }
]

let likeBtn;
let unlikeBtn;
document.addEventListener('DOMContentLoaded', (event) => {
  
  feedobj.map((obj,index)=>{
    let newfeed=document.createElement("div")
    let child=`<div class="feedCard">
    <div class="feedCard__Header">
        <div class="channelContainer">
            <div class="feedContainer__gradient">
                <div class="channelAvater">
                    <img src=${obj.channelProfile}>
                </div>
            </div>
             <p>${obj.channelName}</p>
        </div>
        <div class="more__option">
            <svg aria-label="More options" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
        </div>
    </div>
    <div class="feedCard__Img">
        <img src=${obj.postImg}>
    </div>
    <div class="feedCard__ActionContainer">
            <div class="feedCard__Action__icon">
                <div class="feedCard__Action__icon__Left">
                   <div class="feedCard__Action__icon__Left__EachIcon">
                    <svg aria-label="Like" class="like _8-yf5 " color="#8e8e8e" fill="#8e8e8e" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg>
                    <svg aria-label="Unlike" className="_8-yf5" class="unlike d-none" color="#ed4956" fill="#ed4956" height=24 role="img" viewBox="0 0 48 48" width=24><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z" /></svg>
  
                   </div>
                   <div class="feedCard__Action__icon__Left__EachIcon">
                    <svg aria-label="Comment" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                   </div>
                   <div class="feedCard__Action__icon__Left__EachIcon">
                    <svg aria-label="Share Post" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                   </div>
                </div>
                <div class="feedCard__Action__icon__Right">
                    <svg aria-label="Save" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                </div>
            </div>
            <div class="feedCard__likes__comments__time">
                <div class="likesContainer">
                    <a class="likesLink" href="/p/CY84u0bpmM1/liked_by/" tabindex="0"><span>${obj.likes}</span> likes</a>
                </div>
                <div class="viewAllComments">
                    View all<span> ${obj.commentCount} </span>comments
                </div>
                <div class="lastUpdated">
                    <span>12</span> HOURS AGO
                </div>
            </div>
    </div>
    <div class="feedCard__add__comment">
        <div class="feedCard__add__comment__inputContainer">
            <div class="feedCard__add__emoji">
                <svg aria-label="Emoji" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path></svg>
            </div>
            <div class="feedCard__add__comment__input">
                <input type="text" placeholder="Add a comment...">
            </div>
        </div>
        <div class="postBtn">Post</div>
    </div>
  </div>`
  newfeed.innerHTML=child

    document.getElementsByClassName("feed")[0].appendChild(newfeed)
    likeBtn=document.querySelectorAll(".like")
    unlikeBtn=document.querySelectorAll('.unlike')
    likefunction()
  })
});

function reportWindowSize() {
    
    console.log(window.innerHeight,window.innerWidth);
  }
  
  window.onresize = reportWindowSize;

  let aside__Container=document.getElementsByClassName("aside")[0]
  aside__Container.style.left=(window.innerWidth-600)+"px"

//  let likeBtn=document.querySelectorAll(".like")
//  let unlikeBtn=document.querySelectorAll('.unlike')
 
 function likefunction(){
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
 }

//  Feed Creator



