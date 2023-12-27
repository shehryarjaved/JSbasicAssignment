// Q1

let result;
let score;
if (score >= 80) {
    result = "Pass";
} else {
    result = "Fail";
}

let resultt = score >= 80 ? "Pass" : "Fail";
console.log(resultt)

//Q2
const person = {
    name: "John Doe",
    address: {
      street: "123 Main St",
      city: "Exampleville",
      zipCode: "12345",
    },
  };
  
  // Without optional chaining (may throw an error if a property is undefined)
  
   person.city = person.address && person.address.city;
  
  // With optional chaining (safely retrieves nested property)
  const city = person?.address?.city;

  // Q3

  const obj = { a: 1, b: 2, c: 3 };

for (const key in obj) {
  console.log(key, obj[key]);
}

// Q4

function calculateAverage(numbers) {
    // Check if the array is not empty
    if (numbers.length === 0) {
      return 0; // or you can choose to return undefined, null, or any other appropriate value
    }
  
    // Calculate the sum of all numbers in the array
    const sum = numbers.reduce((total, num) => total + num, 0);
  
    // Calculate the average by dividing the sum by the number of elements
    const average = sum / numbers.length;
  
    return average;
  }
  
  // Example usage:
  const numbersArray = [4, 7, 2, 8, 5];
  const averageValue = calculateAverage(numbersArray);
  
  console.log(`The average is: ${averageValue}`);


  /// Q5

  function outerFunction() {
    let outerVariable = "I am from the outer function";
  
    function innerFunction() {
      console.log(outerVariable);
    }
  
    return innerFunction;
  }
  
  // Create a closure by invoking outerFunction
  const closure = outerFunction();
  
  // Execute the closure
  closure(); // Outputs: "I am from the outer function"


//   Q6

// const student = {
//     name: "John Doe",
//     age: 20,
//     grades: [90, 85, 92, 88, 95],
  
//     calculateAverage: function () {
//       if (this.grades.length === 0) {
//         return 0; // or you can choose to return undefined, null, or any other appropriate value
//       }
  
//       const sum = this.grades.reduce((total, grade) => total + grade, 0);
//       const average = sum / this.grades.length;
//       return average;
//     }
//   };
  
//   // Example usage:
//   console.log(`Student: ${student.name}`);
//   console.log(`Average Grade: ${student.calculateAverage()}`);



  ///  Q7

//   const originalObject = { a: 1, b: { c: 2 } };

// // Shallow Copy
// const shallowCopy = { ...originalObject };

// // Modify the shallow copy
// shallowCopy.b.c = 99;

// console.log(originalObject); // { a: 1, b: { c: 99 } }
// console.log(shallowCopy);    // { a: 1, b: { c: 99 } }


// // Using a utility library like Lodash for deep copy
// const _ = require('lodash');

// // Original Object
// const originalObject = { a: 1, b: { c: 2 } };

// // Deep Copy
// const deepCopy = _.cloneDeep(originalObject);

// // Modify the deep copy
// deepCopy.b.c = 99;

// console.log(originalObject); // { a: 1, b: { c: 2 } }
// console.log(deepCopy);       // { a: 1, b: { c: 99 } }


// // Original Object
// const originalObject = { a: 1, b: 2 };

// // Reference Copy
// const referenceCopy = originalObject;

// // Modify the reference copy
// referenceCopy.b = 99;

// console.log(originalObject); // { a: 1, b: 99 }
// console.log(referenceCopy);  // { a: 1, b: 99 }

// Q8

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (const number of numbers) {
//   const result = number % 2 === 0 ? "even" : "odd";
//   console.log(`${number} is ${result}`);
// }

//    Q9

// for (initialization; condition; iteration) {
//     // Code to be executed
//   }

// examp

// for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }

// while exmp

// while (condition) {
//     // Code to be executed
//   }

// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }
//  DO exmap
// do {
//     // Code to be executed
//   } while (condition);

// Do examp
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 5);

//     Q10


// const students = [
//     { name: 'Alice', age: 22, grades: { math: 90, english: 85 } },
//     { name: 'Bob', age: 21, grades: { math: 88 } },
//     { name: 'Charlie', age: 23 },
//   ];
  
//   // Loop through the array of students
//   for (const student of students) {
//     // Use optional chaining to safely access grades.math property
//     const mathGrade = student?.grades?.math;
  
//     // Check if the property exists before logging
//     if (mathGrade !== undefined) {
//       console.log(`${student.name}'s math grade: ${mathGrade}`);
//     } else {
//       console.log(`${student.name} has no math grade.`);
//     }
//   }


//   Q11

// const person = {
//     name: 'John Doe',
//     age: 30,
//     occupation: 'Engineer'
//   };
  
//   // Iterate over the properties of the 'person' object
//   for (const key in person) {
//     if (person.hasOwnProperty(key)) {
//       // Check if the property is a direct property of the object (not inherited)
//       console.log(`Property: ${key}, Value: ${person[key]}`);
//     }
//   }

// Q12

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (const number of numbers) {
//   if (number === 5) {
//     console.log("Found 5! Breaking the loop.");
//     break;
//   }
//   console.log(number);
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (const number of numbers) {
//   if (number % 2 === 0) {
//     // Skip even numbers
//     continue;
//   }
//   console.log(number);
// }

//   Q13

function calculateTax(income) {
    // Use a ternary operator to determine the tax rate
    const taxRate = income <= 50000 ? 0.1 : income <= 100000 ? 0.15 : 0.2;
  
    // Calculate and return the tax amount
    const taxAmount = income * taxRate;
    return taxAmount;
  }
  
  // Example usage:
  const income1 = 45000;
  const income2 = 75000;
  const income3 = 120000;
  
  console.log(`Tax for income $${income1}: $${calculateTax(income1)}`);
  console.log(`Tax for income $${income2}: $${calculateTax(income2)}`);
  console.log(`Tax for income $${income3}: $${calculateTax(income3)}`);

//   Q14

// Define the car object
const car = {
    make: 'Toyota',
    model: 'Camry',
    startEngine: function () {
      console.log('Engine started. Vroom, vroom!');
    }
  };
  
  // Instantiate the object and call the method
  car.startEngine();

//   Q15

function RegularFunction() {
    this.value = 42;
  
    this.method = function () {
      console.log(this.value);
    };
  }
  
  const regularInstance = new RegularFunction();
  regularInstance.method(); // Logs 42


  function ArrowFunction() {
    this.value = 42;
  
    this.method = () => {
      console.log(this.value);
    };
  }
  
  const arrowInstance = new ArrowFunction();
  arrowInstance.method(); // Logs 42