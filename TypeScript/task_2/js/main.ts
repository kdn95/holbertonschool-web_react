// Create the DirectorInterface
interface DirectorInterface {
  workfromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}
// Create the TeacherInterface
interface TeacherInterface {
  workfromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}
// Create a class Director that will implement DirectorInterface
class Director implements DirectorInterface {
  // workFromHome should return the string Working from home
  workfromHome(): string {
    return "Working from home";
  }
  // getCoffeeBreak should return the string Getting a coffee break
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  // workDirectorTasks should return the string Getting to director tasks
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}
// Create a class Teacher that will implement TeacherInterface
class Teacher implements TeacherInterface {
  // workFromHome should return the string Cannot work from home
  workfromHome(): string {
    return "Cannot work from home";
  }
  // getCoffeeBreak should return the string Cannot have a break
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  // workTeacherTasks should return the string Getting to work
  workTeacherTasks(): string {
    return "Getting to work";
  }
}
// Create a function createEmployee with the following requirements:
// It can return either a Director or a Teacher instance
// It accepts 1 arguments:
// salary(either number or string)
const createEmployee = (salary: number | string) => {
  if (typeof salary === 'number' && salary < 500) {
    // if salary is a number and less than 500 - It should return a new Teacher.
    return new Teacher;
  } else {
    // Otherwise it should return a Director
    return Director;
  }
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));
// Write a function isDirector:
// it accepts employee as an argument

const isDirector = (employee: Director | Teacher) => {
  // it will be used as a type predicate and if the employee is a director
  return (employee as Director);
}

// Write a function executeWork:
// it accepts employee as an argument

const executeWork = (employee: Director | Teacher) => {
  
}
// if the employee is a Director, it will call workDirectorTasks
// if the employee is a Teacher, it will call workTeacherTasks