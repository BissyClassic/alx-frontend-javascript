// Define the Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // allow extra properties
}

// Extend Teacher into Directors
interface Directors extends Teacher {
  numberOfReports: number;
}

// Example usage of Directors
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

// ============================
// 3. Printing teachers
// ============================

// Function interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function implementation
const printTeacher: printTeacherFunction = function(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
};

// Example
console.log(printTeacher("John", "Doe")); // Expected: J. Doe
