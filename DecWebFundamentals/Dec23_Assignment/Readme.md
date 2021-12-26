# **Assignment1**

 **Assignment1: -> Check from the objects.js file g_class. Give the list of students which have greater than or equal to 85 marks.**

## **Given:**
    ```javascript
            var g_class = {
  'name': "Dec21WebFundamentals",
  'instructor': {
    'name': "Aayush Sinha",
    'subject': "MERN"
  },
  'students': [{
      'name': 'Ujjwal',
      'marks': 80,
    },
    {
      'name': 'Anshul',
      'marks': 89,
    },
    {
      'name': 'Lasya',
      'marks': 77,
    },
    {
      'name': 'Ayush',
      'marks': 70,
    },
    {
     'name': 'Gourav',
     'marks': 90,
    },
    {
     'name': 'Niladri',
     'marks': 85,
    },
    {
     'name': 'Ugrasen',
     'marks': 87,
    }
  ],
};

```

### **Approach====>**
*                    Access the Student Array using g_class.students
                    loop through array 
                    check if arr[i].marks is >= 85 ? passList.push(arr[i].name)
                    print passList


---

# **Assignment2**
 ## **Assignment2: -> Write a program to print all even numbers less than or equal to n (n is an input which we take using prompt).**


 ## **Approach===>**
                take N as input
                loop till n 
                for each value of counter check if counter%2===0 if so then print that counter 


---

# **Assignment3**

## ** Write a program to take an input from the user (num) and check whether it is a prime number or not.**

 ## **Approach====>**
 *                  input n 
                    loop form i=2 to sqrt(n)
                            check n%i===0
                                print(n+" is not prime number")
                                    break;
                    print(n+ " is prime number")
