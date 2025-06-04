/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />
/// <reference path="Cpp.ts" />
/// <reference path="React.ts" />
/// <reference path="Java.ts" />

const cTeacher: Subjects.Teacher = {
  firstName: "Maxence",
  lastName: "Bouret",
  experienceTeachingC: 10,
  experienceTeachingReact: 2,
  experienceTeachingJava: 0,
};

const cpp = new Subjects.Cpp();
cpp.setTeacher(cTeacher);
console.log("Cpp:");
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

const react = new Subjects.React();
react.setTeacher(cTeacher);
console.log("\nReact:");
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

const java = new Subjects.Java();
java.setTeacher(cTeacher);
console.log("\nJava:");
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());
