alert("The g_class of all the Students that Scored greater than 85")
var g_class = {
    'name': "Dec21WebFundamentals",
    'instructor': {
      'name': "Aayush Sinha",
      'subject': "MERN"
    },
    'students': [{
        'name': 'Ravi',
        'marks': 82,
      },
      {
        'name': 'Raushan',
        'marks': 88,
      },
      {
        'name': 'Aniket',
        'marks': 75,
      },
      {
        'name': 'Ankit',
        'marks': 73,
      },
      {
       'name': 'Shivam',
       'marks': 90,
      },
      {
       'name': 'Rahul',
       'marks': 89,
      },
      {
       'name': 'Tuhin',
       'marks': 86,
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
  console.log("The list of Students That Passed are " + passList);
  alert("The list of Students That Passed are " + passList)