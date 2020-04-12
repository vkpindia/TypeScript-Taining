abstract class Person {
    constructor(name: string, age: number) {
        console.log('name', name);
        console.log('age', age);
    }

    public showDetails(): void {
        console.log("Hello Abstract");
    }

    abstract personDetails(): void;
}

class Employee extends Person {
    constructor(empId: number, name: string, age: number) {
        super(name, age);
        console.log('empId', empId);
    }

    public personDetails(): void {
        console.log("Hello, Abstract member!!")
    }
}

var empObj = new Employee(1024, "Ashok", 28);

empObj.showDetails();
empObj.personDetails();