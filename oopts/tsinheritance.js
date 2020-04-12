var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(x, y) {
        console.log('x', x);
        console.log('y', y);
    }
    Person.prototype.personDetails = function () {
        this.name = "Srikar";
        this.age = 25;
        console.log('Name', this.name);
        console.log('Age', this.age);
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(a, b, c, d) {
        var _this = _super.call(this, c, d) || this;
        _this.sid = 1024;
        _this.course = "TypeScript";
        console.log('a', a);
        console.log('b', b);
        return _this;
    }
    Student.prototype.studentDetails = function () {
        console.log('ID', this.sid);
        console.log('Course', this.course);
    };
    return Student;
}(Person));
var stu = new Student(10, "Angular", "Ashok", 50);
stu.personDetails();
stu.studentDetails();
