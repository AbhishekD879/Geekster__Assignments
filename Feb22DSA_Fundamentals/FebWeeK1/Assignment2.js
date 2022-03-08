/**
SEARCH ELEMENT IN A ROTATED 
SORTED ARRAY
Using modified binary search, return index of 10
[9, 10, 2, 5, 6, 8]
 0   1  2  3  4  5
[2, 5, 6, 8, 9, 10]
[10, 2, 5, 6, 8, 9]

*/


let sortedAndRoteted=(arr,target)=>{
    let low=0;
    let high=arr.length-1;
    
    while(low<=high){
        let mid=Math.floor(low+(high-low)/2)
        
        if(arr[mid]===target) return mid;
        if(arr[low]<=arr[mid]){
            //left is sorted 
            if(target<arr[mid] && target >=arr[low]){
                high= mid-1
            }else{
                low= mid+1
            }
        }else{
            // reight is sorted
            if(target>arr[mid]&& target<=arr[high]){
                low=mid+1
            }else{
                high=mid-1
            }
        }
      
    }    
    return -1;  

}
console.log(sortedAndRoteted([9, 10, 2, 5, 6, 8],8))