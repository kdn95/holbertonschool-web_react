// write a Subject class in the same namespace named Subjects.
// the class has one setter method setTeacher that accepts a teacher in argument
// (and as setter, set the instance attribute teacher with it)
/// <reference path="Teacher.ts" />
namespace Subjects {
  export class Subject {
    // the class has one attribute teacher that implements the Teacher interface
    teacher: Teacher
    // the class has one setter method setTeacher that accepts a teacher in argument
    // (and as setter, set the instance attribute teacher with it)
    setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}