//Optional Parameter Example
// ? turnery operator
function studentDetails(sid: number, sname: string, semail?:string) {
    var studentData = `\nID: ${sid},\nName: ${sname}`;
    if(semail !== undefined){
        studentData += `\nEmail: ${semail}`;
    }
    // console.log('semail', semail);
    console.log('Student Details', studentData);
}

 studentDetails(111, 'Ashok', 'ashk@gmail.com');