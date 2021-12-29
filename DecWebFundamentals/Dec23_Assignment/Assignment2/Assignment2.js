/**
 # **Assignment2: -> Write a program to print all even numbers less than or equal to n (n is an input which we take using prompt).**


 ## **Approach===>**
                take N as input
                loop till n 
                for each value of counter check if counter%2===0 if so then print that counter 

 */
alert("This program prints all even Number less than or Equal to N")                
let n=prompt("Enter the Number")
let allEven=[]
for(let i=1;i<=parseInt(n);i++){

    if(i%2===0){
        console.log('====================================');
        console.log(i);
        allEven.push(i)
        console.log('====================================');
    }

}
alert(allEven)