class Person {
    public name: string = "";
    public age: number = 50;
    // public 
}

class Student extends Person {
    public sid: number = 10;
    public course: string = "";
}

var stu = new Student();

stu.name = "Ashok";
stu.course = "Typescript";

console.log('sid', stu.sid);
console.log('Name', stu.name);
console.log('Age', stu.age);
console.log('Course', stu.course);