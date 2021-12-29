/**
    Assignment1: -> Check from the objects.js file g_class. Give the list of students which have greater than or equal to 85 marks.

    Given:
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

### **Solution====>**                    
 */
alert("This program traverse The g_class object and returns a array of all the Students that Scored greater than 85")
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
  let passList=[]
  let students=g_class.students
  for(let i=0;i<students.length;i++){
      if(students[i].marks>=85){
        passList.push("\n"+students[i].name)
      }
  }
  console.log('====================================');
  console.log("The list of Students That Passed are " + passList);
  alert("The list of Students That Passed are " + passList)
  console.log('====================================');