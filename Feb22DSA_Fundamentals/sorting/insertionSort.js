const swap=(arr,index1,index2)=>{
    [arr[index1],arr[index2]]=[arr[index2],arr[index1]]
}

const insertionSort=(arr)=>{

   if(arr.length<=1){
       return arr;
   }else{
    for(let i=1;i<arr.length;i++){

        for(let j=i;j>0;j--){
            if(arr[j-1]>arr[j]){
                swap(arr,j,j-1)
            }
        }

    }
   }

   return arr

}

console.log(insertionSort([1,-3]))
module.export=insertionSort;
// [13,24,11,22,1136]
//        i    
//     j- j