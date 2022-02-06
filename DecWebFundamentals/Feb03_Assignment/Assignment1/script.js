document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('pre code').forEach((el) => {
      hljs.highlightElement(el);
    });
  });

let operation=(operationToBePerformed,second,third,...args)=>{
    switch(operationToBePerformed){
        case "+":
            var result=0
            args.forEach((arg)=>{
                result+=arg
            })
           result=result+second+third;
           return result
           break;
        case "-":
             var result=0
             args.forEach((arg)=>{
                 result-=arg
             })
            result=second-third-result;
            return result
            break;
        case "*":
             var result=1
             args.forEach((arg)=>{
                 result*=arg
             })
            result=second*third*result;
            return result
            break;
        case "/":
             var result=1
             args.forEach((arg)=>{
                 result/=arg
             })
            result=second/third/result;
            return result
            break;
         default:
            alert("invalid Operation i.e first Argument")              
    }
}


console.log(operation("/",2,4,5,6,8))

let anagramSumbit=document.getElementsByClassName('anagramSumbit')[0]

  anagramSumbit.addEventListener('click',()=>{
    let inputArray=document.getElementsByClassName("InputArray")[0]
  inputArray=inputArray.value
  
  let target=document.getElementsByClassName("InputTarget")[0]
  target=target.value.split(",")
    if(inputArray.length!=0&&target!=undefined){
        target  = target.map((x) =>parseInt(x));
        let result=operation(inputArray,...target)
        document.getElementById("Answer").innerText=`Answer:-${result}`
        
        // .innerText(`Answer:- ${result}`)
    }
  })