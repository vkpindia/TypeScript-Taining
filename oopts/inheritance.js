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
    function Person() {
        this.name = "";
        this.age = 50;
        // public 
    }
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sid = 10;
        _this.course = "";
        return _this;
    }
    return Student;
}(Person));
var stu = new Student();
stu.name = "Ashok";
stu.course = "Typescript";
console.log('sid', stu.sid);
console.log('Name', stu.name);
console.log('Age', stu.age);
console.log('Course', stu.course);
