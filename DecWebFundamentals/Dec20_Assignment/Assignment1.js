/**
 * Problem:
 * Q1. Write a program to check whether the number is greater than 10 or not.
 * 
 * Test Cases ====>
 *              when number=1 then print Not greater
 *              when number=5 then print Not greater
 *              when number=.5 then print Not greater
 *              when number=111 then print  greater
 *              when number=10 then print Not greater
 *              when number=999.5 then print greater
 * 
 * Approach=====>
 *              Todo: Take Number either from user or Any static number
 *              todo: if number taken from user parse it using ParseFloat 
 *              todo: make conditional check to check if the number entered is greater than 10
 *              todo: if greater than print Number is greater else number not greater
 * 
 * Solution=====>
 * 
 */

let __numberToBeChecked= parseFloat(prompt("Enter the number to check if it is greater than 10"))

if(__numberToBeChecked>10){
    console.log('====================================');
    console.log(__numberToBeChecked  + " is Greater Than 10");
    console.log('====================================');
}else{
    console.log('====================================');
    console.log(__numberToBeChecked + " is Not Greater than 10");
    console.log('====================================');
}