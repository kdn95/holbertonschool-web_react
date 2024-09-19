/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />


namespace Subjects {
  // Add a new attribute experienceTeachingReact? (number) to the Teacher interface
  export interface Teacher {
    experienceTeachingReact?: number;
  }
  // write a React Class in the same namespace.
  // In the class, write a method named getRequirements that will return a string 
  // Here is the list of requirements for React
  export class React extends Subject {

    // In the class, write a method named getRequirements that will return a string 
    // Here is the list of requirements for React
    getRequirements() {
      return "Here is the list of requirements for React";
    }
    // Write a method named getAvailableTeacher that will return a string 
    // Available Teacher: <first name of teacher>
    getAvailableTeacher() {
      // If the teacher doesn’t have any experience in teaching React,
      // then the method should return a string No available teacher
      if (this.teacher.experienceTeachingReact) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return "no available teacher";
      }
    }
  }
}
