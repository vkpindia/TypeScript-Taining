export interface Itest {
    empId: number;
    fname?: string;
    lname: string;
    age?: number;
}

class Employee {
    public employee: Itest = {
        empId: 1024,
        fname: "Ravi",
        lname: "Kumar"
    };

    public employeeData: Array<Itest> = [
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

    public printDetails(): void {
        console.log('Employee', this.employee);
        console.log('employeeData', this.employeeData);
    }
}

// Object creation
var empObj = new Employee();

//function call
empObj.printDetails();
