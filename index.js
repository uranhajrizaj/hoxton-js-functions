/* WRITE THE CODE FOR THE FOLLOWING FUNCTIONS */

// Input: a (number), b (number)
// Action: Add both numbers together
// Output: The result (number)
function add(x=0, y=0) {
    return x + y;
  }
  
  // Input: number
  // Action: Check if the number given is even or not
  // Output: The result (boolean)
  function isEven(number=0) {
    if (number % 2 === 0)  return true
    else return false
    
  }
  
  // Input: name (string)
  // Action: Greet the user by name
  // Output: The greeting (string)
  function greet(name=`Stranger`) {
    let greet= "Hello " + name + "!"
    return `${greet} How are you today? Welcome into the club!`

    
  }
  
  // Input: age (number)
  // Action: Check if the age is 18 or over
  // Output: The result (boolean)
  function isAnAdult(number=0) {
    if (number >= 18) return true
    else return false
  
  }
  
  // Input: age (number)
  // Action: Check how many years are left until adulthood (18)
  // Output: The result (number)
  function yearsToAdulthood(number=0) {
    let difference = 18-number
    return difference
    
  }
  
  // Input: person ({ age: number, name: string })
  // Action:
  //   - check if a person is an adult
  //   - if they are, greet them
  //   - if they are not, tell them to come back in X years (when they are)
  // Output: The result (string)
  function admit(age=0, name='Strainger') {
    // write your code here
    // use greet, isAnAdult and yearsToAdulthood to help you!
    if (isAnAdult(age)) return greet(name)
   else return `${name} you are ${age} years old. Please come back in ${yearsToAdulthood(age)} years.`
  
}
console.log(admit(34, 'Joe'))
console.log(admit(14, 'John'))
   