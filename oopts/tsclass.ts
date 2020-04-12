// Class declaration in typescript
class Student {
    private sid: number = 1025;
    public sname: string = "Scott";
    
    //class constructor
    constructor(x: number, y:number){
        console.log('Sum', x+y);
    }

    public showData(): void{
        console.log('Student ID', this.sid);
        console.log('Student Name', this.sname);
    }
 }
 var sObj = new Student(10, 20);
 sObj.showData();