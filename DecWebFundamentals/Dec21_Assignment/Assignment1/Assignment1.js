/**
Q1Take 3 inputs from the user and show minimum of the three. 
 
## Test Cases====>
*                 if three Numbers Are [12,33,22] then print 12
                  if three Numbers Are [55,33,22] then print 22
                  if three Numbers Are [.1,.01,0] then print 0
                  if three Numbers Are [-22,-3,-40] then print -40
                  if three Numbers Are [-.1,0.33,0.55] then print -0.1
## Approach======>
*               
                Todo1: check if number1 is Smaller than number2 and number3 return number1
                todo2: else check if number2 is Smaller than number1 and number3 return number2
                todo2: else return number3
  
 
 ## Approach======>
 *                   min = Number1
                     if Number2 < min:
                         min = Number2
                     if Number3 < min:
                         min = Number3 
                     return min
 ## Approach=====>
 *                  min= Math.min(Number1,Number2)
                    min= Math.min(Number3,min)
                    return min

 ## Solution=====>
                                       
 */
 alert("This Program Show the Minimum Among all Inputed Numbers")
 let number1=parseFloat(prompt("Enter 1st Number "))
 let number2=parseFloat(prompt("Enter 2nd Number "))
 let number3=parseFloat(prompt("Enter 3rd Number "))

 console.log(Math.min(number1,number2,number3))
 alert("The Minimum of three Number is " + Math.min(number1,number2,number3) )


