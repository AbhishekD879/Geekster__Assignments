/**
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
### **Solution====>**                    

 */
alert("This Program Calculates the Factorial of Given Number")
let fact=1;/** O(1) */
let n=parseInt(prompt("Enter Number to calculate Factorial note: fact must be Non-negitive Interger i.e(n>-1)"));/** O(1) */
if(n>-1){/** O(1) */
  for(let i=n;i>0;i--){/** O(n) */
    fact *= i;
  }

console.log('====================================');/** O(1) */
console.log(fact);/** O(1) */
alert(fact)
console.log('====================================');/** O(1) */
}else{
  console.log('====================================');/** O(1) */
  console.log("!!Opps Invalid Input,Fact must be Non-negitive Interger");/** O(1) */
  alert("!!Opps Invalid Input,Fact must be Non-negitive Interger")
  console.log('====================================');/** O(1) */
}



