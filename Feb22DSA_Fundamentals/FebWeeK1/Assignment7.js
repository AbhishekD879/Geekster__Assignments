/**
MIN ELEMENT IN A ROTATED SORTED ARRAYThe answer for this is 0[4, 5, 6, 7, 0, 1, 2]

[4, 5, 6, 7, 0, 1, 2]
 0  1  2  3  4  5  6

{5, 6, 1, 2, 3, 4}
 0  1  2  3  4  5

{1, 2, 3, 4}
 0  2  3  4

{2, 1}
 0  1

 */

let rotatedSortedMin=(arr)=>{

    let low=0;
    let high=arr.length;
    let mid=Math.floor(low+(high-low)/2)
   console.log(mid,low)
    if(arr.length!=1){
        if(arr[low]<arr[mid]){
            // left sorted
            
            if(arr[low]<arr[mid+1]){
                return arr[low]
            }else{
                return arr[mid+1]
            }
            
           // arr[low] is the lowest for that part
    
        }if(mid>low){
            return arr[low]
        }else{
            // right sorted
            //arr[mid] is lowest
            if(arr[mid]<arr[mid-1]){
                return arr[mid]
            }else{
                return arr[mid-1]
            }
        }
    }else{
        return arr[0]
    }

}
console.log(rotatedSortedMin([1,2]))