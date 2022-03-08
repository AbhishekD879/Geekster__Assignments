/**
FIND THE ELEMENT THAT DOESN’T EXIST IN PAIR{2, 2, 3, 3, 2, 2, 4, 4, 3, 1, 1}3 in the above array at index 8 exists without pair

*/


let pair=(arr)=>{

    let obj={}

    arr.forEach((ele)=>{
        obj[ele]=obj[ele]+1 || 1;

    })
    
    for(let i in obj){
        if(obj[i]%2!==0){
            return +i
        }
    }

}

console.log(pair([2, 2, 3, 3, 2, 2, 4, 4, 3, 1, 1]))