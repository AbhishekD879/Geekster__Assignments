


let hasTimerStarted=false
let timerStateBtn=document.getElementsByClassName("timerStateBtn")[0]
let reset=document.getElementsByClassName("reset")[0]
let stopSecond;
let stopMin;
let tween;
let minEle=document.getElementsByClassName("min")[0]
let secondsEle=document.getElementsByClassName("seconds")[0]
timerStateBtn.addEventListener('click',()=>{
    console.log(timerStateBtn.innerText);
   if(timerStateBtn.innerText==="START"){
    let minEle=document.getElementsByClassName("min")[0]
    let min__forComputation=minEle.innerText*1
    let min=minEle.innerText*1
    let secondsEle=document.getElementsByClassName("seconds")[0]
    let seconds__forComputation=secondsEle.innerText*1
    let seconds=secondsEle.innerText*1
    let actual__time__inSeconds=min__forComputation*60+seconds__forComputation;

   tween=gsap.to(".progressBar", {duration:`${actual__time__inSeconds}`,width:"100%",ease:'linear'});
    tween.play()
    hasTimerStarted=true;
    timerStateBtn.innerText="PAUSE";

    stopMin=setInterval(()=>{
        if(min>0&&min<61){
            if(seconds==0){
                min--
                minEle.innerText=min
                seconds=60
            }
        }
    },1000)

    stopSecond=setInterval(()=>{
        if(seconds>0&&seconds<61){
            seconds--
            console.log(seconds);
            secondsEle.innerText=seconds>9? seconds : `0${seconds}`
        }
    },1000)
   }else{

    clearInterval(stopSecond)
    clearInterval(stopMin)
    timerStateBtn.innerText="START"
    tween.pause()
   }

})

reset.addEventListener('click',()=>{
    hasTimerStarted=false
    timerStateBtn.innerText="START"
    minEle.innerText=0
    secondsEle.innerText=00
    clearInterval(stopSecond)
    clearInterval(stopMin)
    tween.restart()
    tween.pause()
    
})




/**
 * setInterval(()=>{
 * if(seconds==0){
 *  min--
 *  seconds==60
 *  }
 * if(second<10){
 *  secondes=`0${second}`
 * }
 * },1000)
 */

