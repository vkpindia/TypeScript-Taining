//Decorator in typescript

/* 1. class
   2. property
   3. method 
   4. parameter
   5. accessor */

// class decorator (without parameter)

function student(config) {
    return function (target) {
        Object.defineProperty(target.prototype, 'course', { value: () => config.course });
    }
}



@student({
    course: "Prameterized decorator"
})
class Person {
    public firstName: string;
    public lastName: string;

    constructor(fname, lname) {
        this.firstName = fname;
        this.lastName = lname;
    }

    public name(): String {
        return `${this.firstName} ${this.lastName}`;
    }

    public whoAreYou(): String {
        return `I am ${this.name()}`;
    }
}

var person = new Person("Ashok", "Kumar");

console.log('Course', person.course); // Prameterized decorator
console.log('WhoAreYOu', person.whoAreYou()); // Ashok Kumar

