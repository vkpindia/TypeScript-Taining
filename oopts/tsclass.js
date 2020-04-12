// Class declaration in typescript
var Student = /** @class */ (function () {
    //class constructor
    function Student(x, y) {
        this.sid = 1025;
        this.sname = "Scott";
        console.log('Sum', x + y);
    }
    Student.prototype.showData = function () {
        console.log('Student ID', this.sid);
        console.log('Student Name', this.sname);
    };
    return Student;
}());
var sObj = new Student(10, 20);
sObj.showData();
