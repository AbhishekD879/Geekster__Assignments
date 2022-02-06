document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('pre code').forEach((el) => {
      hljs.highlightElement(el);
    });
  });
  var twoSum = function(nums, target) {
    let frequency={}
   
       nums.forEach((num,index)=>{
           frequency[num]=index
       })

       for(let i=0;i< nums.length ;i++){
           let requiredNumber=target-nums[i]

           if(frequency.hasOwnProperty(requiredNumber)&&frequency[requiredNumber]!=i){
               return [i,frequency[requiredNumber]]
           }
       }

   };
  

  let anagramSumbit=document.getElementsByClassName('anagramSumbit')[0]

  anagramSumbit.addEventListener('click',()=>{
    let inputArray=document.getElementsByClassName("InputArray")[0]
  inputArray=inputArray.value.split(",")
  
  let target=document.getElementsByClassName("InputTarget")[0]
  target=target.value
    if(inputArray.length!=0&&target!=undefined){
        let result=twoSum(inputArray,target)
        document.getElementById("Answer").innerText=`Answer:- [${result}]`
        
        // .innerText(`Answer:- ${result}`)
    }
  })