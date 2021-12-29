/**
  Assignment: create an array using .push with prompt and also using parseInt(); -> Take three numbers and find max. 
  (Using arrays) -> Math.max(); //For further reading.

### **Test Cases====>**
 *              When arr[0]=10,arr[1]=20,arr[2]=30 print 30 is greatest Among all three Numbers
                When arr[0]=.200,arr[1]=0,arr[2]=-30 print .200 is greatest Among all three Numbers
                When arr[0]=10,arr[1]=10,arr[2]=10 print 10 is greatest Among all three Numbers
                When arr[0]=-20,arr[1]=-220,arr[2]=0 print 0 is greatest Among all three Numbers
                When arr[0]=11121212,arr[1]=222222222,arr[2]=999999999*2 print 999999999*2  is greatest Among all three Numbers
  
 ### **Apporach======>**
 *              Todo1: check if arr[0] is greater than arr[1] and arr[2] return arr[0]
                todo2: else check if arr[1] is greater than arr[0] and arr[2] return arr[1]
                todo2: else return arr[2]
 ### **Apporach======>**
                    max = arr[0]
                     if arr[1] > max:
                         max = arr[1]
                     if arr[2] > max:
                         max = arr[2] 
                     return max
 ### **Apporach======>**
 *                  max= Math.max(arr[0],arr[1])
                    max= Math.max(arr[2],max)
                    return max

 ### **Solution=======>**

 */
alert("This program will find the maximun among three number using Array")
let arr=[];
for (let i=0;i<3;i++){
    let number= parseFloat(prompt("enter number " + parseInt(i+1)));
    arr.push(number)
}
alert(Math.max(arr[0],arr[1],arr[2]))
