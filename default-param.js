// Default param example
function studentDetail(id, sname, cduration) {
    if (cduration === void 0) { cduration = 40; }
    var studentData = "\nID: " + id + ", \n Student Name: " + sname + ", \n Class Duration: " + cduration;
    console.log('studentData', studentData);
}
//function call
studentDetail(111, 'Ashok');
studentDetail(111, 'Ashok', 30);
