function reportWindowSize() {
    
    console.log(window.innerHeight,window.innerWidth);
  }
  
  window.onresize = reportWindowSize;

  let aside__Container=document.getElementsByClassName("aside")[0]
  aside__Container.style.left=(window.innerWidth-600)+"px"

 