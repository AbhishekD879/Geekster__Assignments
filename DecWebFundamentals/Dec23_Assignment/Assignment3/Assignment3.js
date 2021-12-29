/**
 # ** Write a program to take an input from the user (num) and check whether it is a prime number or not.**

 ## **Approach====>**
 *                  input n 
                    loop form i=2 to sqrt(n)
                            check n%i===0
                                print(n+" is not prime number")
                                    break;
                    print(n+ " is prime number")
                                          
 */
alert("This Program Checks Wheather the Inputed Number is Prime Or Not")                    
let n=parseInt(prompt("Enter a number to check wheather it is prime or not"))
let primeFlage=true;
for(i=2;i<Math.sqrt(n);i++){
    if(n%i===0){
        
        
        primeFlage=false
        break;
    }
}

if(primeFlage){
    alert(n+" is  prime number");
}else{
    alert(n+" is not prime number");
}