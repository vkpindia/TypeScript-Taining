//Optional Parameter Example
// ? turnery operator
function studentDetails(sid, sname, semail) {
    var studentData = "\nID: " + sid + ",\nName: " + sname;
    if (semail !== undefined) {
        studentData += "\nEmail: " + semail;
    }
    // console.log('semail', semail);
    console.log('Student Details', studentData);
}
studentDetails(111, 'Ashok', 'ashk@gmail.com');
