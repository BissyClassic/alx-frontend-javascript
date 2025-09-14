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

// Define function interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage
console.log(printTeacher("John", "Doe")); // Output: J. Doe

// -----------------------------
// Interfaces
// -----------------------------

// Constructor interface (defines what args the class constructor takes)
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

// Class interface (defines the methods/attributes of the class)
interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

// -----------------------------
// Class implementation
// -----------------------------

class Student implements StudentClass {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// -----------------------------
// Example usage
// -----------------------------
const student = new Student("John", "Doe");
console.log(student.displayName());    // Output: John
console.log(student.workOnHomework()); // Output: Currently working
