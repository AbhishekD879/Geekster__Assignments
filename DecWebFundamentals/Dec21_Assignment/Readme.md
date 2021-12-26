## **Assignment1**
**Q1Take 3 inputs from the user and show minimum of the three.** 
 
### **Test Cases====>**
*                 if three Numbers Are [12,33,22] then print 12
                  if three Numbers Are [55,33,22] then print 22
                  if three Numbers Are [.1,.01,0] then print 0
                  if three Numbers Are [-22,-3,-40] then print -40
                  if three Numbers Are [-.1,0.33,0.55] then print -0.1
### **Approach======>**
*               
                Todo1: check if number1 is Smaller than number2 and number3 return number1
                todo2: else check if number2 is Smaller than number1 and number3 return number2
                todo2: else return number3
  
 
 ### **Approach======>**
 *                   min = Number1
                     if Number2 < min:
                         min = Number2
                     if Number3 < min:
                         min = Number3 
                     return min
 ### **Approach======>**
 *                  min= Math.min(Number1,Number2)
                    min= Math.min(Number3,min)
                    return min
 
 ----

 ## **Assignment2**               
  **Q2.Check whether the given chracter is a vowel or not. (Also check for capital characters).**

  ### Test Cases====>
  *                 if char=A then vowel else consonant
                    if char=p then vowel else consonant
                    if char=Ahhs then vowel else consonant
                    if char=mmm then vowel else consonant
                    if char=qqq then vowel else consonant
                
  ### **Approach======>**
  *                  if char == "A" || char == "E" || char == "I" || char == "O" || char == "U" || 
                       char="a" || char == "e" || char == "i" || char == "o" || char == "u" || 
                    print char is vowel   
                    else 
                        print consonant
    
  ### **Approach======>**
  *                  if("aeiouAEIOU.indexOf(char) !=-1") then print vowel else print consonant
   
  ### **Approach======>**
  *                  if("aeiouAEIOU".contain(char)) then print vowel else print consonant
                    
  ### **Approach======>**
  *                 ['a', 'e', 'i', 'o', 'u'].includes(str.charAt(0).toLowerCase()) then print vowel else print consonant                  

    