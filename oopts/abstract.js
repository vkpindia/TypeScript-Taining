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
    function Person(name, age) {
        console.log('name', name);
        console.log('age', age);
    }
    Person.prototype.showDetails = function () {
        console.log("Hello Abstract");
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(empId, name, age) {
        var _this = _super.call(this, name, age) || this;
        console.log('empId', empId);
        return _this;
    }
    Employee.prototype.personDetails = function () {
        console.log("Hello, Abstract member!!");
    };
    return Employee;
}(Person));
var empObj = new Employee(1024, "Ashok", 28);
empObj.showDetails();
empObj.personDetails();
