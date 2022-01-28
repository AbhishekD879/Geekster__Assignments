document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('pre code').forEach((el) => {
      hljs.highlightElement(el);
    });
  });
let hover=gsap.to('.header__right > a > div', {duration: .1,width:'100%',ease: "bounce",})
let element=document.querySelectorAll(".header__right > a")
let hoverablediv=hover.targets()
console.log(element);
element.forEach((ele,index)=>{
    ele.addEventListener('mouseenter',()=>{
        hover.play()
    })
})
element.forEach((ele,index)=>{
    ele.addEventListener('mouseleave',()=>{
        hover.reverse()
    })
})


let add9Input;
let mul4Input;
function mulBy4(array) {
  var result = [];
  for (let i = 0; i < array.length; i++) {
    var y = array[i] * 4;
    result.push(y);
  }
  return result;
}
function add9(array) {
  var result = [];
  for (let i = 0; i < array.length; i++) {
    var y = array[i] + 9;
    result.push(y);
  }
  return result;
}
function manipulateArray(array,callback) {
  let result=callback(array)
  return result;
}



let add9InputEle=document.getElementById('add9')
add9InputEle.addEventListener('change',()=>{
  add9Input= add9InputEle.value.split(",").map(x=>+x);;
  
  document.getElementsByClassName("AdditionAns")[0].innerText=manipulateArray(add9Input,add9)
})
let mul4InputEle=document.getElementById('mul4')
mul4InputEle.addEventListener('change',()=>{
  mul4Input=mul4InputEle.value.split(",").map(x=>+x);;
  
  document.getElementsByClassName("MulAns")[0].innerText=manipulateArray(mul4Input,mulBy4)
})


// Anagram

let __Anagram=(str1,str2)=>{
  str1=str1.toLowerCase()
  str2=str2.toLowerCase()
  let obj1={}
  let obj2={}
  if(str1.length===str2.length){

      for(let i=0;i<str1.length;i++){
              obj1[str1[i]]= (obj1[str1[i]] || 0) + 1;
              obj2[str2[i]]= (obj2[str2[i]] || 0) + 1;
      }
      for(value in obj1){
          if(obj2.hasOwnProperty(value)){
              if(obj2[value]!==obj1[value]){
                  return false
              }
          }else{
              return false
          }
      }

  }else{
      return false
  }
  return true
  // console.log({obj1,obj2})
}
// let isAnagram=__Anagram('iceman','cinemr')

let string1=document.getElementById("Anagram1")
let string2=document.getElementById('Anagram2')

let anagramSumbit=document.getElementsByClassName("anagramSumbit")[0]
anagramSumbit.addEventListener('click',()=>{
  if(__Anagram(string1.value,string2.value)){
    alert("They Are Anagram")
  }else{
    alert("They Are not Anagram")
  }
})
