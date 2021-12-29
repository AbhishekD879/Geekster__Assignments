/**
 # **Assignment2: ->Take n from the user and print first n prime numbers.**

 ---

 ## **Approach===>**
 *              TODD: for each number till N check wheather if the Number is prime or Not 
                            if Prime ? then Push into primeArray: Do not push 


## **Actual===>**
*               Take input "N" such that N represent the range Of Prime Number
                 declare PrimeArray = empty Array
                 start loop for each value of i where i ranges from 2 to N (I have started From 2 because 2 is first prime number)    
                     declare primeFlag bool that keeps track of wheather each value is prime or not:default=true
                         !this step is for prime checking ===>
                             loop from j=2 till sqrt(i) because we want to check if i is prime number 
                                     if(i!=j) this is a short circuit that will prevent failure of my if(i%j===0)
                                         if(i%j===0) ? we conclude that "i" is not prime and set the primeFlag=false : else continue the loop 
                                                     if the primeFlag is still true then we push "i" inside the primeArray
                                                     
                                                             complixity is O(n^2)


                                                            

 */





alert("This Program prints all prime number up till N , Please Check Console For Answer")
let n=parseInt(prompt("Enter the value of N such that N represent the range Of Prime Number "))/** O(1) */
let primarray=[] /** O(1) */

for(i=2;i<=n;i++){ /** O(n) */
    let primeFlag=true
    for(let j=2;j<=Math.sqrt(i);j++)/** O(n^2) */
    { 
       if(i!=j)
       {
           if(i%j===0)
           {   // number not prime
               primeFlag=false;
           }
       }
    }
    

    if(primeFlag)
    {
        primarray.push(i)  
    }
}
console.log('====================================');/** O(1) */
console.log(primarray);/** O(1) */
// alert(primarray)
console.log('====================================');/** O(1) */
