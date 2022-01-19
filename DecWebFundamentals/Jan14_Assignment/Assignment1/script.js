alert("This Calculator is made without using Eval...but still follows DMAS rule... the bracket will not work,I am still working on implementing logic for brackets")

let deletion=document.getElementsByClassName("deletion")[0]// Elenmet 🔙 to delete the operation character
let actualOutput=document.getElementsByClassName("actual__output")[0]// Element which show the output to the User
let buttons=document.querySelectorAll(".button")// returns array of all buttons
let operationArray=buttons
let operationField=document.getElementsByClassName("calculation__Operation")// string which contains the Expression to be evaluted 
let deleteAll=document.getElementsByClassName("deleteAll")[0]// button that clear everything on display
let calculate=document.getElementById("equal")//button that calculates the output for expression
// calculate the Expression and check if expression is valid using try catch block
calculate.addEventListener("click",()=>{
   let operationFieldOP=operationField[0].textContent;
   let ArrayThatIncludeOperationAndNumber=[]
  


const numbers = operationFieldOP.split(/\D/g);
const op = operationFieldOP.split(/\d/g).filter(Boolean);
console.log(numbers,op);
let numberIndex=0;
let opIndex=0;
for(let i=0;i<numbers.length+op.length;i++){
    if(i%2==0){
        ArrayThatIncludeOperationAndNumber.push(numbers[numberIndex])
        numberIndex++
    }else{
        ArrayThatIncludeOperationAndNumber.push(op[opIndex])
        opIndex++
    }
}

console.log(ArrayThatIncludeOperationAndNumber);
var pattern = ['/', '*', '+', '-'];

function sortArray (array, pattern) {
    return array.sort(function (a, b) {
        if (pattern.indexOf(a) === pattern.indexOf(b)) {
            return 0;
        } else {
            return pattern.indexOf(a) > pattern.indexOf(b) ? 1 : -1;
        }
    });
}

// use like:
var sortedArray = sortArray(op, pattern);
let answer;
sortedArray.forEach((oper)=>{
    if(ArrayThatIncludeOperationAndNumber.indexOf(oper)!=-1){
//  ['77', '/', '8888', '/', '8', '*', '88']
        if(oper=="+"){
            let index=ArrayThatIncludeOperationAndNumber.indexOf(oper)
             answer= Number(ArrayThatIncludeOperationAndNumber[index-1]) + Number(ArrayThatIncludeOperationAndNumber[index+1]);
            
            ArrayThatIncludeOperationAndNumber.splice(index-1,3,answer)
            ArrayThatIncludeOperationAndNumber.push(answer)
        }else if(oper=="-"){
            let index=ArrayThatIncludeOperationAndNumber.indexOf(oper)
             answer= Number(ArrayThatIncludeOperationAndNumber[index-1]) - Number(ArrayThatIncludeOperationAndNumber[index+1]);
            
            ArrayThatIncludeOperationAndNumber.splice(index-1,3,answer)
            ArrayThatIncludeOperationAndNumber.push(answer)
        }else if(oper=="*"){
            let index=ArrayThatIncludeOperationAndNumber.indexOf(oper)
             answer= Number(ArrayThatIncludeOperationAndNumber[index-1]) * Number(ArrayThatIncludeOperationAndNumber[index+1]);
            
            ArrayThatIncludeOperationAndNumber.splice(index-1,3,answer)
            ArrayThatIncludeOperationAndNumber.push(answer)
        }else if(oper=="/"){
            let index=ArrayThatIncludeOperationAndNumber.indexOf(oper)
             answer= Number(ArrayThatIncludeOperationAndNumber[index-1]) / Number(ArrayThatIncludeOperationAndNumber[index+1]);
            
            ArrayThatIncludeOperationAndNumber.splice(index-1,3,answer)
            
        }
       
    }

    
    
})
operationField[0].textContent=answer;
actualOutput.textContent=answer;

})
// logic to clear the display i.e setting the innerText of operation field and output to empty String
deleteAll.addEventListener("click",()=>{
    operationField[0].textContent="";
    actualOutput.textContent=""
})
// logic to append the operation field to inputed expression 
  operationArray.forEach((value,key)=>{
     value.addEventListener("click",()=>{
          if(key!=0 && key!=3 && key!=19){
             operationField[0].textContent+=value.textContent
          }    
     },false)
  })
//delete single character from operation Field 
deletion.addEventListener("click",()=>{
    operationField[0].textContent=operationField[0].textContent.slice(0,operationField[0].textContent.length-1)
})