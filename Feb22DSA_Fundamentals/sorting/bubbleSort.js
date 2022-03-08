const insertionSort= require("./insertionSort")
console.log(insertionSort)
let swap=(arr,index1,index2)=>{
    [arr[index1],arr[index2]]=[arr[index2],arr[index1]]
}

let bubbleSort=(arr)=>{
    let isSwap=false
    for(let i=arr.length-1;i>0;i--){

        for(let j=0;j<i;j++){
            if(arr[j]>arr[j+1]){
                swap(arr,j,j+1)
                isSwap=true;
            }
        }
      if(!isSwap){
          break;
      }  
    }
    return arr;
}
 //                     0   1  2 3   4
console.log(bubbleSort([13,24,11,22,1136]))
//                       i
//                      j
// arr[2]=24 arr[j+1]=1136