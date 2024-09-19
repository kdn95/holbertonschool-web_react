// task 1
interface Teacher {
  firstName: string;
  lastName: string,
  fullTimeEmployee: boolean;
  yearsOfExperience: number;
  location: string;
 // Add the possibility to add any attribute to the 
 // Teacher object like contract(boolean) without specifying the name of the attribute:
 // Property should be a string
 // Type of this property can be anything
  [key: string]: any;
}
// task 2
interface Directors extends Teacher {
  numberOfReports: number;
}
// task 3
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string) => {
  return `${firstName[0]}. ${lastName}`;
}

// Task 4
// The class should be described through an Interface
interface studentInterface {
  workOnHomework(): string;
  displayName(): string;
}
// The constructor of the class should be described through an Interface
interface studentClassConstructor {
  new (firstName: string, lastName: string): studentInterface;
}

class studentClass implements studentInterface {
  firstName: string;
  lastName: string;
  // The constructor accepts firstName(string) and lastName(string) arguments
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  // The class has a method named workOnHomework that return the string Currently working
  workOnHomework(): string {
    return "Currently working";
  }
  // The class has a method named displayName. It returns the firstName of the student
  displayName(): string {
    return this.firstName;
  }
}