class Person {
    public name: string;
    public age: number;

    constructor(x: string, y: number) {
        console.log('x', x);
        console.log('y', y);
    }

    public personDetails(): void {
        this.name = "Srikar";
        this.age = 25;
        console.log('Name', this.name);
        console.log('Age', this.age);
    }
}

class Student extends Person {
    public sid: number = 1024;
    public course: string = "TypeScript";

    constructor(a: number, b: string, c: string, d: number) {
        super(c, d);
        console.log('a', a);
        console.log('b', b);
    }

    public studentDetails(): void {
        console.log('ID', this.sid);
        console.log('Course', this.course);
    }
}

var stu = new Student(10, "Angular", "Ashok", 50);

stu.personDetails();
stu.studentDetails();
