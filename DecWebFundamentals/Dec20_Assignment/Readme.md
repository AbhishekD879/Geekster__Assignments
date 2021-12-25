Assignment1======>
                
 * Problem:
 * Q1. Write a program to check whether the number is greater than 10 or not.
 
 * Test Cases ====>
 *              when number=1 then print Not greater
                when number=5 then print Not greater
                when number=.5 then print Not greater
                when number=111 then print  greater
                when number=10 then print Not greater
                when number=999.5 then print greater
  
 * Approach=====>
 *              Todo: Take Number either from user or Any static number
                todo: if number taken from user parse it using ParseFloat 
                todo: make conditional check to check if the number entered is greater than 10
                todo: if greater than print Number is greater else number not greater
 
  
  
 
 Assignment2====>
                
 * Q2. Write a program to have 3 variables (all three are number) and output the highest/greatest/maximum of all three.
  
  
 * Test Cases====>
 *              When Number1=10,Number2=20,Number3=30 print 30 is greatest Among all three Numbers
                When Number1=.200,Number2=0,Number3=-30 print .200 is greatest Among all three Numbers
                When Number1=10,Number2=10,Number3=10 print 10 is greatest Among all three Numbers
                When Number1=-20,Number2=-220,Number3=0 print 0 is greatest Among all three Numbers
                When Number1=11121212,Number2=222222222,Number3=999999999*2 print 999999999*2  is greatest Among all three Numbers
 
 * Apporach======>
 *              Todo1: check if number1 is greater than number2 and number3 return number1
                todo2: else check if number2 is greater than number1 and number3 return number2
                todo2: else return number3
 * Approach======>
 *                  max = Number1
                    if Number2 > max:
                         max = Number2
                    if Number3 > max:
                         max = Number3 
                    return max
 * Approach=====>
 *                  max= Math.max(Number1,Number2)
                    max= Math.max(Number3,max)
                    return max
 
                  
 *                 Dec20 All Assignment Completed                