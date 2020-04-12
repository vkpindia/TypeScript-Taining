"use strict";
var Employee = /** @class */ (function () {
    function Employee() {
        this.employee = {
            empId: 1024,
            fname: "Ravi",
            lname: "Kumar"
        };
        this.employeeData = [
            {
                empId: 1024,
                lname: "Kumar"
            },
            {
                empId: 1025,
                lname: "Kumar"
            },
            {
                empId: 1026,
                fname: "Scott",
                lname: "Kumar"
            }
        ];
    }
    Employee.prototype.printDetails = function () {
        console.log('Employee', this.employee);
        console.log('employeeData', this.employeeData);
    };
    return Employee;
}());
// Object creation
var empObj = new Employee();
//function call
empObj.printDetails();
