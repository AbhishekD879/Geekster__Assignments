/**
 * Q2. Write a program to have 3 variables (all three are number) and output the highest/greatest/maximum of all three.
 * 
 * 
 * Test Cases====>
 *              When Number1=10,Number2=20,Number3=30 print 30 is greatest Among all three Numbers
 *              When Number1=.200,Number2=0,Number3=-30 print .200 is greatest Among all three Numbers
 *              When Number1=10,Number2=10,Number3=10 print 10 is greatest Among all three Numbers
 *              When Number1=-20,Number2=-220,Number3=0 print 0 is greatest Among all three Numbers
 *              When Number1=11121212,Number2=222222222,Number3=999999999*2 print 999999999*2  is greatest Among all three Numbers
 * 
 * Apporach======>
 *              Todo1: check if number1 is greater than number2 and number3 return number1
 *              todo2: else check if number2 is greater than number1 and number3 return number2
 *              todo2: else return number3
 * Approach======>
 *                  max = Number1
 *                   if Number2 > max:
 *                       max = Number2
 *                   if Number3 > max:
 *                       max = Number3 
 *                   return max
 * Approach=====>
 *                  max= Math.max(Number1,Number2)
 *                  max= Math.max(Number3,max)
 *                  return max
 */
let number1=10;
let number2=20;
let number3=30;
let max= Math.max(Math.max(number1,number2),number3)
console.log('====================================');
console.log(max);
console.log('====================================');