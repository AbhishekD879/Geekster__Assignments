# **Factorial of a number input is 5. factorial of 5 -> 5 * 4 * 3 * 2 * 1 factorial of 7 -> 7 * 6 * 5 * 4 * 3 * 2 * 1 ->** 
    # **Take n from the user and alert the factorial of that number.**

    ---

### **Test Cases===>**
*               if n=5 5*4*3*2*1 = 120;
                if n=.0111       =  1;
                if n=2.50        =  2;
                
                so factorial for n is given by "fact"=n*(n-1)*(n-2)*(n-3).....(n-(n-1))

### **Approach====>**
*               Take Input N=parsInt(n)
                declare fact =1
                loop from i=n till i>0 
                      fact= fact*i or fact *=i
                display fact

                conplixity = O(n) 

    ----

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

----

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