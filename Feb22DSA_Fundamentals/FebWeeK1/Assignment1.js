/**
CHECK IF THE NUMBER IS A 
PERFECT SQUARE OR NOT
A number is called perfect square if its square root is a “whole” number

*/


/**
Approach==>Binary Search

i*i=num so 
i must exist bethueen 2 and num/2
low=2 and high=num/2

*/


let perfectSquareBinarySearch=(num)=>{

    if(num===1){return true}
    let low=2;
    let high=Math.floor(num/2)

    while(low<=high){
       let mid=Math.floor(low + (high-low/2))
       mid=mid-1
       if(mid*mid===num){
           return true
       }else if(mid*mid > num){
            high=mid-1
       }else{
           low=mid+1
       } 
    }
    return false

}

console.log(perfectSquareBinarySearch(25))