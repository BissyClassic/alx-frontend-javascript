// Define the Teacher interface
interface Teacher {
  readonly firstName: string;       // cannot be changed after init
  readonly lastName: string;        // cannot be changed after init
  fullTimeEmployee: boolean;        // must always be defined
  yearsOfExperience?: number;       // optional
  location: string;                 // must always be defined
  [key: string]: any;               // allow additional attributes
}

// Example usage
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

console.log(teacher3);

