/**
 # ** Write a program to check the given number is a perfect square or not! (Don't use function)**

 ## **Approach====>**
 *                 therotical ===> 
                                  list out all the factors of the given number 
                                  if the  count of factor is odd then the number is perfect square
                                  
                    Implementation====>
                                        Take input from user As Num
                                        Initilize count_of_Factor=0
                                        loop from i=1 to num
                                            if(num%i===0)then:
                                                        count_0f_factor++
                                        
                                        if(count_Of_Factor%2===0){
                                            not perfect square
                                        }else{
                                            perfectSquare
                                        }

                                        complixity O(n)
                                          
 */
alert("This Program Checks if the Inputed Number is Perfect Square or Not")                                        
let num=parseInt(prompt("Enter a Number to check if it is Perfect Square or Not"))/** O(1) */

let count_Of_Factor=0;/** O(1) */

for(let i=1;i<=num;i++)/** O(n) */
{
    if(num%i===0) count_Of_Factor++
}

if(count_Of_Factor%2===0)/** O(1) */
{ 
    alert(num+ " is not perfect square")
}else{
    alert(num+ " is perfect square")
}

