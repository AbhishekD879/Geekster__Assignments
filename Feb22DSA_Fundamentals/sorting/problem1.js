/**
You’re given an array A which consists of whole numbers.
Return an array B which contains numbers such that A[i]+B[i] is divisible by 3 and != 0.
A = [2, 45, 0, 11, -9]
If this is A, then the output B should can be one of these-
B = [1, 0, 3, 1, 0] or [1, 0, -3, -2, 0]

*/

let problem=(arr)=>{
let result=[]
    arr.forEach((ele)=>{

        if(ele %3===0 && ele!==0){
            result.push(0)
        }else{
            result.push(3-(ele%3))
        }

    })
 return result
}
console.log(problem([2, 45, 0, 11, -9]))